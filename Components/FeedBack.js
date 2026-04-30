'use client';
import { useState } from 'react';

export default function FeedBack({ persons }) {
  const [index, setIndex] = useState(0);

  const isFirst = index === 0;
  const isLast = index === persons.length - 1;

  const nextSlide = () => !isLast && setIndex(index + 1);
  const prevSlide = () => !isFirst && setIndex(index - 1);

  const current = persons[index];

  return (
    <div className="container mx-auto pt-20 pb-5 px-5 md:px-8">
      <h1 className="font-bold text-3xl mb-4 text-center md:text-left">People's Feedback about JobNow!</h1>
      
      <div className="flex flex-col md:flex-row items-center md:items-start gap-15">
        <div className="flex-1 flex flex-col justify-center text-center md:text-left order-1">
          <p className="text-[#8a8a8a] mb-8">{current.text}</p>
          <p className="font-semibold mb-8 text-xl">"{current.quote}"</p>
          
          <div className="hidden md:block mb-6">
            <p className="font-bold mb-2 text-lg">{current.name}</p>
            <p className="text-[#8a8a8a] text-sm">{current.role}</p>
          </div>

          <div className="hidden md:flex gap-4">
            <button 
              onClick={prevSlide}
              disabled={isFirst}
              className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300
                ${isFirst ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-[#00cc99] text-white cursor-pointer hover:-translate-x-1 hover:shadow-lg'}`}
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </button>

            <button 
              onClick={nextSlide}
              disabled={isLast}
              className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300
                ${isLast ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-[#00cc99] text-white cursor-pointer hover:translate-x-1 hover:shadow-lg'}`}
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="flex-1 w-full order-2">
          <img 
            src={current.image} 
            
            className="w-full h-45.75 md:h-118.5 mx-auto object-cover rounded-[20px] bg-[#00cc99] transition-all duration-500" 
          />
        </div>

        <div className="flex flex-col items-center text-center md:hidden order-3 w-full">
            <div className="mb-6">
                <p className="font-bold mb-2">{current.name}</p>
                <p className="text-[#8a8a8a] text-sm">{current.role}</p>
            </div>
            <div className="flex gap-4">
                <button 
                onClick={prevSlide}
                disabled={isFirst}
                className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300
                    ${isFirst ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-[#00cc99] text-white cursor-pointer hover:-translate-x-1 hover:shadow-lg'}`}
                >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                </button>

                <button 
                onClick={nextSlide}
                disabled={isLast}
                className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300
                    ${isLast ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-[#00cc99] text-white cursor-pointer hover:translate-x-1 hover:shadow-lg'}`}
                >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}
