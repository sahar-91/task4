'use client';
import { useState } from "react";
import According from "./According";
export default function SearchBar() {
    const locations = ["Zahle", "Beirut", "Tripoli", "Sidon", "Tyre", "Byblos", "Baalbek"];
  return (
    <div className="bg-white rounded-2xl p-4 flex flex-row items-center gap-4 max-w-4xl justify-between">
      
      
      <div className="flex items-center w-[45%] bg-gray-100 rounded-xl px-3 py-2">
      <img src="https://img.icons8.com/ios/50/search--v1.png" alt="Search Icon" className="w-5 h-5 mr-2" />
        <input
          type="text"
          placeholder="Job title or keyword"
          className="w-full outline-none placeholder-black"
        />
      </div>

      
      <div className="flex items-center w-[35%]">
        

        <According locations={locations} />

        
       
      </div>

      
      <button className="w-auto cursor-pointer bg-[#00cc99] text-white px-6 py-2 rounded-xl hover:bg-[#00b386] transition">
        Search
      </button>
    </div>
  );
}