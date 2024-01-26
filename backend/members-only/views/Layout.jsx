import { cn } from "~/helpers/util";

/** @type {import("@kitajs/html").Component<{title: string, class: import("clsx").ClassValue}>}*/
export const Layout = function ({
	class: className,
	title,
	children,
	...props
}) {
	return (
		<html>
			<head>
				<title safe>{title || "EMBERS"}</title>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width initial-scale=1" />
				<link rel="stylesheet" href="/assets/css/style.css" />
				<script src="https://unpkg.com/htmx.org@1.9.10"></script>
			</head>
			<body class={cn("w-screen h-screen", className)} {...props}>
				{children}
			</body>
		</html>
	);
};
