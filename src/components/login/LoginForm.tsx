import React from "react";
import LoginLogo from "../../assets/login_logo.png";
import GoogleLogo from "../../assets/google_logo.png";
import KakaoLogo from "../../assets/kakao_logo.png";

import {
	StyledLoginButtonImg,
	StyledLoginForm,
	StyledLoginFormBody,
	StyledLoginFormFooter,
	StyledLoginFormGoogle,
	StyledLoginFormHeader,
	StyledLoginFormKakao,
	StyledLoginFormLogo,
	StyledLoginFormTitle,
} from "./login.style";

interface LoginFormProps {
	children?: React.ReactNode;
}

const LoginForm: React.FC<LoginFormProps> = (props) => {
	return (
		<StyledLoginForm>
			<StyledLoginFormHeader>
				<StyledLoginFormLogo src={LoginLogo} alt="Studytime" />
				<StyledLoginFormTitle>동기부여 어드민</StyledLoginFormTitle>
			</StyledLoginFormHeader>
			<StyledLoginFormBody>
				<StyledLoginFormGoogle>
					<StyledLoginButtonImg src={GoogleLogo} />
					구글 계정으로 로그인
				</StyledLoginFormGoogle>
				<StyledLoginFormKakao>
					<StyledLoginButtonImg src={KakaoLogo} />
					카카오톡 계정으로 로그인
				</StyledLoginFormKakao>
			</StyledLoginFormBody>
			<StyledLoginFormFooter>관리자 권한이 필요한 경우, 담당자에게 문의주세요.</StyledLoginFormFooter>
		</StyledLoginForm>
	);
};

export default LoginForm;
