import { createGlobalStyle, css, DefaultTheme } from "styled-components";

const cssReset = css`
	*,
	*:before,
	*:after {
		box-sizing: border-box;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		margin: 0;
		padding: 0;
		border: none;
	}
`;

const GlobalStyle = createGlobalStyle`
    ${cssReset}
    
    html {
		font-size: 62.5%;
		background-color: ${(props) => props.theme.colors.backgroundDark};
		color: ${(props) => props.theme.colors.white};
		font-family: "Noto Sans KR", MalgunGothic, "맑은 고딕", "돋움", Dotum, AppleGothic, Sans-serif, Arial;
	}

`;

const colors = {
	white: "#fff",
	black: "#000",
	backgroundDark: "#282b30",
	gray: "#454d51",
	grayLight: "#78808b",
	grayDark: "#1d242d",
	yellow: "#ffb210",
	purple: "#6800ff",
	blue: "#50d2ee",
	pink: "#ff6f9c",
};

export type ColorsTypes = typeof colors;
export const theme: DefaultTheme = {
	colors,
};

export default GlobalStyle;
