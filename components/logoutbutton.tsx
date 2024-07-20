"use client"
import { useSession, signOut } from 'next-auth/react';
import React from 'react';

function LogoutButton() {
  const { data: session } = useSession();

  if (!session) {
    // User is not signed in, so hide the button
    return null;
  }

  return (
    <button
        type="button"
        aria-label="Sign Out"
        onClick={() => signOut({callbackUrl:'http://localhost:3000'})}
        className="h-fit w-fit p-2 items-center justify-center bg-[#0060AE] text-white rounded-md"
    >
        Sign Out
    </button>
  );
}

export default LogoutButton;