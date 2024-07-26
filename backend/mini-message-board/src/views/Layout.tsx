export const Layout: JSX.Component = function ({ children, title }) {
  return (
    <html>
      <head>
        <title>{title || "Messaging App"}</title>
        <link rel="stylesheet" href="/public/css/style.css" />
      </head>
      <body>{children}</body>
    </html>
  );
};
