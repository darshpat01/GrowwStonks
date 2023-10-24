import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { ReduxProvider } from "@/redux/provider";
import Provider from "../theme/Providers";
import { ChakraProvider } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GrowwStonks",
  description: "A web application for a stocks/etfs broking website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          "w-screen min-h-screen overflow-y-scroll overflow-x-hidden bg-white text-black dark:bg-black dark:text-white"
        }
      >
        <ChakraProvider>
          <Provider>
            <Navbar />
            <div className="container mx-auto">
              <ReduxProvider>{children}</ReduxProvider>
            </div>
          </Provider>
        </ChakraProvider>
      </body>
    </html>
  );
}
