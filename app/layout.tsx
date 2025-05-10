import type { Metadata } from "next";
import "./globals.css";
import KeycloakProvider from "../context/KeycloakProvider";

export const metadata: Metadata = {
  title: "Supplier Dashboard",
  description: "Pharmaceutical supplier management system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <KeycloakProvider>{children}</KeycloakProvider>
      </body>
    </html>
  );
}
