import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";


export const metadata = {
  title: "Tripma",
  description: "Flight booking website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <NavBar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
