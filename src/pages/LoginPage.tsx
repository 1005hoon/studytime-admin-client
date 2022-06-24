import React from "react";

import { StyledLoginPage } from "../components/login/login.style";
import LoginForm from "../components/login/LoginForm";
import { OAuthProvider } from "../model/types";
import AuthService from "../service/auth.service";

interface LoginPageProps {
	children?: React.ReactNode;
	authService: AuthService;
}

const LoginPage: React.FC<LoginPageProps> = (props) => {
	const onLogin = async (provider: OAuthProvider) => {
		await props.authService.login(provider);
	};

	return (
		<StyledLoginPage>
			<LoginForm onLogin={onLogin} />
		</StyledLoginPage>
	);
};

export default LoginPage;
