"use client"

import Image from "next/image";
import React from "react";
import LoginButton from "@/components/loginbutton";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-white flex-col items-center justify-between p-2">
      <div className="w-full items-center justify-center text-sm flex">
        <div className="flex flex-col w-full min-h-full lg:p-6 lg:m-10 bg-slate-100 justify-center items-center border border-gray-300">
          <p className="lg:text-2xl italic font-medium">Welcome to Customer Portal</p>
          <p className="lg:text-lg font-light">Please login to continue</p>
          <LoginButton/>
        </div>            
      </div>
    </div>
  );
}
