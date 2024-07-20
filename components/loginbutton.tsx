"use client"
import Image from "next/image";
import React from "react";
import { signIn } from 'next-auth/react';
import { useSession } from "next-auth/react";


const LoginButton = () => {


const handleGoogleSignIn = async () => {
  try {
    await signIn('google', {
      callbackUrl: '/list', // Redirect to list of users page after successful sign-in
    });
  } catch (error) {
    console.error('Sign in error:', error);
  }
  };


  return (
    <button
      onClick={handleGoogleSignIn}
      className="flex items-center font-medium justify-center h-14 px-6 mt-4 text-md hover:bg-[#0060AE] hover:text-white transition-colors duration-300 bg-white border border-black text-black rounded-lg focus:shadow-outline hover:bg-slate-200"
    >
      <Image src="/googleLogo.png" alt="Google Logo" width={20} height={20} />
      <span className="ml-4">Continue with Google</span>
    </button>
    
  );
};

export default LoginButton;
