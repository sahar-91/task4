import React, { useState, useRef, useEffect } from "react";

export default function LocationDropdown({ locations }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Location");
  const dropdownRef = useRef(null);

  const handleSelect = (city) => {
    setSelected(city);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between bg-gray-100 rounded-xl px-3 py-2 cursor-pointer select-none"
      >
        <div className="flex items-center gap-2">
          <img src="/location.png" alt="Location Icon" className="w-5 h-5" />
          <span className="truncate">{selected}</span>
        </div>
        <svg
          className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {open && (
        <div className="absolute z-70 mt-1 w-full bg-white rounded-xl shadow-lg max-h-48 overflow-y-auto">
          <div
            className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleSelect("ALL")}
          >
            All
          </div>
          {locations.map((city, index) => (
            <div
              key={index}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(city)}
            >
              {city}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}