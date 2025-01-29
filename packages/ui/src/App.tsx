import { useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useAuthenticateUser } from "./hooks/useAuthenticateUser";

const redirectURI = "http://localhost:5173/auth/github/callback";

function App() {
	const [count, setCount] = useState(0);

	useAuthenticateUser();

	return (
		<>
			<div>
				<a href="https://vite.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button type="button" onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>

				<a
					href={`https://github.com/login/oauth/authorize?client_id=${import.meta.env.VITE_GITHUB_CLIENT}&redirect_uri=${redirectURI}`}
				>
					<button type="button">Login with GitHub</button>
				</a>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
