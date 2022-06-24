import {
	createContext,
	createRef,
	ReactNode,
	useCallback,
	useContext,
	useEffect,
	useImperativeHandle,
	useMemo,
	useState,
} from "react";
import { OAuthProvider } from "../model/types";
import User from "../model/User";
import LoginPage from "../pages/LoginPage";
import AuthService from "../service/auth.service";

type State = { user: User | undefined; logIn: (provider: OAuthProvider) => Promise<void>; logOut: () => Promise<void> };
const AuthContext = createContext<State>({
	user: undefined,
	logIn: async (provider: OAuthProvider) => {},
	logOut: async () => {},
});
const contextRef = createRef();

export function AuthProvider({
	authService,
	authErrorEventBus,
	children,
}: {
	authService: AuthService;
	authErrorEventBus: AuthErrorEventBus;
	children: ReactNode;
}) {
	const [user, setUser] = useState<User | undefined>(undefined);

	/** Allow binding contextRef with user info inside the provider */
	useImperativeHandle(contextRef, () => (user ? user : undefined));

	useEffect(() => {
		authErrorEventBus.listen((err: Error) => {
			console.error(err);
			setUser(undefined);
		});
	}, [authErrorEventBus]);

	const isLoggedIn = useCallback(async () => {
		try {
			const user = await authService.me();

			if (!user) {
				setUser(undefined);
				return;
			}

			setUser(user);
		} catch (error) {
			console.error(error);
		}
	}, [authService]);

	useEffect(() => {
		isLoggedIn();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoggedIn]);

	const logIn = useCallback(
		async (provider: OAuthProvider) => {
			try {
				const user = await authService.login(provider);
				setUser(user);
			} catch (error) {
				console.error(error);
			}
		},
		[authService]
	);

	const logOut = useCallback(async () => {
		await authService.logout();
		setUser(undefined);
	}, [authService]);

	const context = useMemo(
		() => ({
			user,
			logIn,
			logOut,
		}),
		[user, logIn, logOut]
	);

	return (
		<AuthContext.Provider value={context}>
			{user ? children : <LoginPage authService={authService} />}
		</AuthContext.Provider>
	);
}

export class AuthErrorEventBus {
	callback!: (e: Error) => void;
	listen(cb: (e: Error) => void) {
		this.callback = cb;
	}

	notify(error: Error) {
		this.callback(error);
	}
}

export default AuthContext;

export const fetchUser = () => contextRef.current;
export const useAuth = () => useContext(AuthContext);
