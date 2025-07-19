import "@radix-ui/themes/styles.css";

import osguildLogo from "./assets/osguild.svg";

import "./App.css";
import { Button } from "@radix-ui/themes";
import { useAuthenticateUser } from "./hooks/useAuthenticateUser";
import { PAGES_URL } from "./utils/constants";

const redirectURI = new URL(
	"/auth/github/callback",
	PAGES_URL ?? "http://localhost:5173/",
).toString();

function App() {
	useAuthenticateUser();

	return (
		<>
			<div>
				<a href="https://osguild.io" target="_blank" rel="noreferrer">
					<img src={osguildLogo} className="logo" alt="Vite logo" />
				</a>
			</div>
			<h1>OS Guild</h1>
			<div className="card">
				<a
					href={`https://github.com/login/oauth/authorize?client_id=${import.meta.env.VITE_GITHUB_CLIENT}&redirect_uri=${redirectURI}`}
				>
					<Button>Login with GitHub</Button>
				</a>
			</div>
		</>
	);
}

export default App;
