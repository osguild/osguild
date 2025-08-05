import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	define: {
		"import.meta.env.CF_PAGES_URL": JSON.stringify(process.env.CF_PAGES_URL),
	},
	server: {
		proxy: {
			// Target is your backend API
			"/api": {
				target: "https://sp89tu7492.execute-api.us-east-1.amazonaws.com/prod/",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ""),

				configure: (proxy, _options) => {
					proxy.on("error", (err, _req, _res) => {
						console.log("error", err);
					});
					proxy.on("proxyReq", (_proxyReq, req, _res) => {
						console.log("Request sent to target:", req.method, req.url);
					});
					proxy.on("proxyRes", (proxyRes, req, _res) => {
						console.log(
							"Response received from target:",
							proxyRes.statusCode,
							req.url,
						);
					});
				},
			},
		},
	},
});
