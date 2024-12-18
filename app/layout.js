import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";
import CookiesPopUp from "./components/cookiesPopUp";
import HomeNotification from "./components/homeNotification";


export const metadata = {
  title: "Tripma",
  description: "Flight booking website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <HomeNotification/>
        <NavBar />
        {children}
        <CookiesPopUp/>
        <Footer/>
      </body>
    </html>
  );
}
