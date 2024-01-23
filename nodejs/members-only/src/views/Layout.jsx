/** @type {import("hono/jsx").FC<{ title: string }>} */
export const Layout = function Layout({ children, title }) {
	return (
		<html>
			<head>
				<link rel="stylesheet" href="/assets/css/style.css" />
				<title>{title || "EMBERS"}</title>
			</head>
			<body>{children}</body>
		</html>
	);
};
