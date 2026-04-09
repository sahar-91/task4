"use client";  
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Navbar() {
  const [active, setActive] = useState(false);


    const authButtons = (
  <ul className="flex gap-2.5 list-none items-center md:flex-row flex-col">
    <li className="hover:bg-white hover:text-[#00cc99] rounded-sm p-2 md:text-white transition duration-300">
      <Link href="/signin" onClick={() => setActive(false)}>Sign in</Link>
    </li>
    <li>
      <Link
        href="/create"
        onClick={() => setActive(false)}
        className="bg-white rounded-sm gap-2 p-2 flex items-center justify-center"
      ><img src="https://img.icons8.com/ios/windows/bold/enter-2.png" className="w-4 h-4 mr-1" alt="Create Account Icon" />
         Create Account
      </Link>
    </li>
  </ul>
);

  return (
    <div className=" bg-gray-100 md:bg-gradient-to-r from-gray-100 from-[40%] via-gray-200 via-[60%] to-[#00cc99] to-[65%] w-full">
      <div className="container mx-auto">
      
      <header className="flex justify-between items-center ">
      <div className="bg-gray-100 py-7 w-full md:w-[60%] flex items-center justify-center md:justify-between md:flex-row md:pr-30">
        <div className=" text-2xl font-bold hover:text-[#00cc99]">
          <h2><Link href="/">Job<span className="text-[#00cc99]">NQw</span></Link></h2>
        </div>
        
        <div 
          className="md:hidden bg-[#00cc99] rounded-sm w-10 p-1 flex items-center justify-center text-white absolute right-10 text-[20px] cursor-pointer"
          onClick={() => setActive(true)}
        > 
          ☰
        </div>
        <nav
          className={
            active
              ? "fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center gap-8 md:hidden z-100"
              : "hidden md:flex"
          }
        >
          <div
            className="text-[#00cc99] md:hidden text-3xl cursor-pointer absolute top-5 right-10"
            onClick={() => setActive(false)}
          >
            x
          </div>
          <ul className="flex text-center gap-2.5 list-none md:flex-row flex-col font-bold gap-7">
            <li className="hover:text-[#00cc99]"><Link href="/">Home</Link></li>
            <li className="hover:text-[#00cc99]"><Link href="/job">Job</Link></li>
            <li className="hover:text-[#00cc99]"><Link href="/aboutus">About Us</Link></li>
            <li className="hover:text-[#00cc99]"><Link href="/contact">Contact</Link></li>
          </ul>
          <div className="md:hidden mt-6">
             {authButtons}
          </div>
        </nav>  
    </div>
    <div className="bg-[#00cc99] w-[40%] hidden md:flex items-center justify-end flex-row font-bold py-6">
    {authButtons}
    </div>
      </header> 
      </div>  
      </div>
            
  );
}
