import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wahoo BBQ",
  description: "Unofficial website for Wahoo BBQ Bar and Grill",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.png" />
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
