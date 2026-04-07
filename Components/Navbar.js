
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
    <div className="z-0 bg-gradient-to-r from-gray-100 from-30% to-[#00cc99] w-full ">
      <div className="container mx-auto max-w-[1440px]">
      
      <header className="flex justify-between items-center">
      <div className="bg-gray-100 w-[60%] flex items-center justify-between flex-row h-16 pr-30">
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
          </ul>
        </nav>  
    </div>
    <div className="bg-[#00cc99] w-[40%] flex items-center justify-end flex-row h-16">
      <ul className="flex gap-2.5 list-none items-center">
    <li className={`hover:text-[#00cc99] text-white z-50 ${linkUndeline("/signin")}`}>
      <Link href="/signin">Sign in</Link>
    </li>
    <li>
      <Link
        href="/create"
        className={`bg-white rounded-sm px-4 py-2 flex items-center justify-center hover:text-[#132c26] ${linkUndeline("/create")}`}
      >
        Create Account
      </Link>
    </li>
  </ul>
    </div>
      </header> 
      </div>  
      </div>
      
      
  );
}
