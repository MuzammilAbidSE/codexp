import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Code XP Solutions — AI-Powered Software & Digital Innovation",
  description:
    "Code XP Solutions delivers cutting-edge AI automation, software development, and digital transformation for forward-thinking enterprises.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

const themeInitScript = `
(function () {
  var t = localStorage.getItem('codexp-theme') || 'light';
  document.documentElement.setAttribute('data-theme', t);
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="light dark" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
