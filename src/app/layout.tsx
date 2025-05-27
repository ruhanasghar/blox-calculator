import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Questionnaire",
  description: "Multi-step questionnaire form",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex,nofollow" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
