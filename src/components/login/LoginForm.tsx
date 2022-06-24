import React from "react";
import LoginLogo from "../../assets/login_logo.png";
import GoogleLogo from "../../assets/google_logo.png";
import KakaoLogo from "../../assets/kakao_logo.png";

import {
	StyledLoginButtonImg,
	StyledLoginForm,
	StyledLoginFormBody,
	StyledLoginFormFooter,
	StyledGoogleLoginButton,
	StyledLoginFormHeader,
	StyledKakaoLoginButton,
	StyledLoginFormLogo,
	StyledLoginFormTitle,
} from "./login.style";
import { OAuthProvider } from "../../model/types";

interface LoginFormProps {
	children?: React.ReactNode;
	onLogin: (provider: OAuthProvider) => void;
}

const LoginForm: React.FC<LoginFormProps> = (props) => {
	return (
		<StyledLoginForm onSubmit={(e) => e.preventDefault()}>
			<StyledLoginFormHeader>
				<StyledLoginFormLogo src={LoginLogo} alt="Studytime" />
				<StyledLoginFormTitle>동기부여 어드민</StyledLoginFormTitle>
			</StyledLoginFormHeader>
			<StyledLoginFormBody>
				<StyledGoogleLoginButton onClick={() => props.onLogin("Google")}>
					<StyledLoginButtonImg src={GoogleLogo} />
					구글 계정으로 로그인
				</StyledGoogleLoginButton>
				<StyledKakaoLoginButton onClick={() => props.onLogin("Kakao")}>
					<StyledLoginButtonImg src={KakaoLogo} />
					카카오톡 계정으로 로그인
				</StyledKakaoLoginButton>
			</StyledLoginFormBody>
			<StyledLoginFormFooter>관리자 권한이 필요한 경우, 담당자에게 문의주세요.</StyledLoginFormFooter>
		</StyledLoginForm>
	);
};

export default LoginForm;
