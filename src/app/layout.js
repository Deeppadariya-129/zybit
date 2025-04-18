import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "ZYBIT",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
