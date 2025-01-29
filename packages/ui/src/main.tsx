import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import "./index.css";
import App from "./App.tsx";

const rootEl = document.getElementById("root");

if (!rootEl) throw new Error("Error! root element is not defined");

createRoot(rootEl).render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>,
);
