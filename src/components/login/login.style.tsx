import styled from "styled-components/macro";

export const StyledLoginPage = styled.main`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: scroll;
`;

export const StyledLoginForm = styled.form`
	width: 36rem;
	height: 72rem;
	background-color: ${(props) => props.theme.colors.yellow};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 8rem 3.2rem 2rem;
	border-radius: 10px;
`;

export const StyledLoginFormHeader = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 72px;
	margin-bottom: 8px;
`;

export const StyledLoginFormLogo = styled.img``;

export const StyledLoginFormTitle = styled.h1`
	font-size: 18px;
`;

export const StyledLoginFormBody = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-bottom: 3rem;
`;

const StyledLoginButton = styled.button`
	background-color: ${(props) => props.theme.colors.white};
	border-radius: 10px;
	width: 100%;
	height: 56px;
	margin-top: 8px;
	font-size: 16px;
	cursor: pointer;
	position: relative;
`;

export const StyledLoginButtonImg = styled.img`
	width: 16px;
	height: 16px;
	margin-right: 10px;
	transform: translateY(20%);
`;

export const StyledLoginFormGoogle = styled(StyledLoginButton)``;
export const StyledLoginFormKakao = styled(StyledLoginButton)``;
export const StyledLoginFormFooter = styled.footer``;
