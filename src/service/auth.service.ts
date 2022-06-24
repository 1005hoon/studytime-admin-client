import { OAuthProvider } from "../model/types";
import User from "../model/User";

class AuthService {
	users: User[];
	constructor() {
		this.users = [new User("1", "k", "tester", "tester@test.com", 1)];
	}

	async login(provider: OAuthProvider) {
		console.log(provider);

		return this.users[0];
	}

	async me(): Promise<User | null> {
		console.log("this runs?");
		return null;
	}

	async logout() {}
}

export default AuthService;
