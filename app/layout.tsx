
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SessionWrapper from "@/components/SessionWrapper";
import {metadata} from './metadata';




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body>
        <Header/> 
        <main>
        <SessionWrapper>
          {children}
        </SessionWrapper>
        </main>
        <Footer/>
      </body>
      
    </html>
  );
}
