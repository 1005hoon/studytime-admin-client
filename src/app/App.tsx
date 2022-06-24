import React from "react";
import { useAuth } from "../context/AuthContext";

function App() {
	const { user, logOut } = useAuth();
	return (
		<div>
			<h1>hi</h1>
		</div>
	);
}

export default App;
