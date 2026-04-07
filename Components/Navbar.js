"use client";  
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Navbar() {
  const [active, setActive] = useState(false);
  const pathname = usePathname();

  const linkUndeline = (path) =>
    `hover:text-[#00cc99] ${
      pathname === path ? "underline text-[#00cc99]" : ""
    }`;

  return (
    
      <div className="sticky top-0 z-100 w-full">
      <header className="container max-w-[1440px] mx-auto px-4 flex justify-between items-center p-4">
      
        <div className=" text-2xl font-bold hover:text-[#00cc99]">
          <h2><Link href="/">JobNow</Link></h2>
        </div>
        
        <div 
          className="md:hidden absolute top-5 right-5 text-[20px] cursor-pointer"
          onClick={() => setActive(true)}
        >
          ☰
        </div>
        <nav
          className={
            active
              ? "fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center gap-8 md:hidden z-50"
              : "hidden md:flex"
          }
        >
          <div
            className="text-[#00cc99] md:hidden text-3xl cursor-pointer absolute top-5 right-5"
            onClick={() => setActive(false)}
          >
            x
          </div>
          <ul className="flex gap-2.5 list-none md:flex-row flex-col">
            <li className={`hover:text-[#00cc99] ${linkUndeline("/")}`}><Link href="/">Home</Link></li>
            <li className={`hover:text-[#00cc99] ${linkUndeline("/job")}`}><Link href="/job">Job</Link></li>
            <li className={`hover:text-[#00cc99] ${linkUndeline("/aboutus")}`}><Link href="/aboutus">About Us</Link></li>
            <li className={`hover:text-[#00cc99] ${linkUndeline("/contact")}`}><Link href="/contact">Contact</Link></li>
            <li className={`hover:text-[#00cc99] text-white ${linkUndeline("/signin")}`}><Link href="/signin">sign in</Link></li>
            <li className={` bg-white rounded-sm p-2 hover:text-[#132c26] ${linkUndeline("/create")}`}><Link href="/create">Create Account</Link></li>
          </ul>

        </nav>  
    
      </header> 
      </div>  
      
  );
}