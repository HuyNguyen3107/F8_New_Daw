import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/Provider/Provider";
const inter = Inter({ subsets: ["latin"] });
import "primeicons/primeicons.css";
import Header from "@/components/Header/Header";
import { Navbar } from "@nextui-org/react";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Navbar shouldHideOnScroll>
            <Header />
          </Navbar>
          {children}
        </Provider>
      </body>
    </html>
  );
}
