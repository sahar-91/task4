import React, { useState } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

export default function LocationDropdown({ locations }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("ALL"); 
  const handleOpen = () => setOpen(!open);

  const handleSelect = (city) => {
    setSelected(city);
    setOpen(false); 
  };

  return (
    <Accordion open={open ? 1 : 0} icon={
      <svg
        className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    }>
      
      <AccordionHeader onClick={handleOpen} className="cursor-pointer bg-gray-100 rounded-xl px-3 py-2">
        {selected}
      </AccordionHeader>

  
      {open && (
        <AccordionBody className="flex flex-col p-0">
          <div
            className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleSelect("ALL")}
          >
            ALL
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
        </AccordionBody>
      )}
    </Accordion>
  );
}