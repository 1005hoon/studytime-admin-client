import React from "react";

import { StyledLoginPage } from "../components/login/login.style";
import LoginForm from "../components/login/LoginForm";

interface LoginPageProps {
	children?: React.ReactNode;
}

const LoginPage: React.FC<LoginPageProps> = (props) => {
	return (
		<StyledLoginPage>
			<LoginForm />
		</StyledLoginPage>
	);
};

export default LoginPage;
