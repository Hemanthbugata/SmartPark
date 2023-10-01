import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import { WalletProvider } from "./context/WalletContext";
// import Register from "./components/Register";
// import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SmartPark",
  description: "A one-stop solution for all the parking problems!!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WalletProvider>
          {/* <Register /> */}
          <Navbar />
          {children}
          {/* <Footer /> */}
          {/* <script
          src="https://kit.fontawesome.com/91dd69b788.js"
          crossOrigin="anonymous"
          */}
        </WalletProvider>
      </body>
    </html>
  );
}
