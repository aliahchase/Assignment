// components/header.tsx
import React from "react";
import Image from "next/image";
import SignOutButton from '../components/logoutbutton';
import SessionWrapper from '../components/SessionWrapper';



export default function Header(){
    return (
        <>
            <header
                className={`flex w-full justify-start items-center flex-row`}
                style={{
                    backgroundColor: "ghostwhite",
                    padding: "1rem",
                }}
            >
             <div className="flex-grow">   
                    <Image 
                        src="/logo.png" 
                        width={100} 
                        height={50}
                        alt="Company Logo"
                    />
                </div>
                <div className="mr-8">
                   <SessionWrapper>
                        <SignOutButton/>
                    </SessionWrapper> 
                </div>
                <div className="inline-flex gap-2"> 
                    <Image
                        src="/world.svg"
                        width={20}
                        height={20}
                        alt="language"
                    />
                    <p>EN</p>   
                </div>
            </header>
        </>
    )
}
