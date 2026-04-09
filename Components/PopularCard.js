"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function PopularCard({ array }) {
  return (
    <div className="w-full my-8">
      <Swiper
        spaceBetween={25}        
        grabCursor={true}        
        slidesPerView="auto"    
        breakpoints={{
          640: { slidesPerView: "auto" },
          768: { slidesPerView: "auto" },
        }}
      >
        {array.map((item, index) => (
          <SwiperSlide key={index} className="!w-[250px] flex-shrink-0">
            <div className="group">
              <div className="bg-white relative h-[220px] rounded-[20px] p-6 group-hover:text-white cursor-pointer group-hover:bg-[#00cc99] transition duration-300 flex flex-col items-start">
                
                <img src={item.image} alt={item.title} className="w-10 h-10 mb-4" />

                <h3 className="text-xl font-bold mb-2">{item.title}</h3>

                <p className="text-gray-600 group-hover:text-white text-sm absolute bottom-5 left-5">{item.content}</p>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}