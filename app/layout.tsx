"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { FirebaseAppProvider } from "reactfire";
import firebaseConfig from "@/config/firebase";
import BottomBar from "@/components/bottom-bar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <html lang="en">
        <body className={`${inter.className} bg-primary w-screen h-screen`}>
          {children}
          <BottomBar />
        </body>
      </html>
    </FirebaseAppProvider>
  );
}


