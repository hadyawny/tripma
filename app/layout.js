import "./globals.css";
import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";
import CookiesPopUp from "./components/cookiesPopUp";
import HomeNotification from "./components/homeNotification";
import { GlobalContextProvider } from "./context/store";
import SessionProviderWrapper from "./components/sessionProviderWrapper";


export const metadata = {
  title: "Tripma",
  description: "Flight booking website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <SessionProviderWrapper>
        <GlobalContextProvider>
        <HomeNotification/>
        <NavBar />
        {children}
        <CookiesPopUp/>
        <Footer/>
        </GlobalContextProvider>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
