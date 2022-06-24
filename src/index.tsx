import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import App from "./app/App";
import GlobalStyle, { theme } from "./app/GlobalStyle";
import { AuthErrorEventBus, AuthProvider } from "./context/AuthContext";
import reportWebVitals from "./reportWebVitals";
import AuthService from "./service/auth.service";

const authErrorEventBus = new AuthErrorEventBus();
const authService = new AuthService();

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<AuthProvider authService={authService} authErrorEventBus={authErrorEventBus}>
				<App />
			</AuthProvider>
		</ThemeProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
