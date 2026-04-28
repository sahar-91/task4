"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function RecentJobsCard({ array }) {
  return (
    <div className="w-full my-8">
      <Swiper
        spaceBetween={25}        
        grabCursor={true}        
        slidesPerView={1.2}
        slidesOffsetBefore={32}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          768: { slidesPerView: 3.2 },
        }}
      >
        {array.map((item, index) => (
          <SwiperSlide key={index} className=" flex-shrink-0">
            <div className="group">
              <div className="bg-white rounded-[20px] p-6 flex flex-col items-start">
                
                <img src={item.image} alt={item.title} className="w-10 h-10 mb-4 rounded-[50px]" />

                <h3 className="text-sm md:text-xl font-bold mb-2 line-clamp-3 ">{item.title}</h3>

                <p className="text-[#8a8a8a] mb-8">{item.company}</p>

                <p className="text-[#8a8a8a] text-sm">{item.content}</p>
                <div className="flex fex-row items-center gap-2 my-4">
                    <div className="bg-[#f9f9f9] rounded-[10px] font-semibold flex row items-center p-1 gap-1">
                        <img src="https://img.icons8.com/ios/marker--v1.png" alt="Location Icon" className="w-4 h-4 mr-1" />
                        {item.location}
                    </div>
                    <div className="bg-[#f9f9f9] rounded-[10px] font-semibold flex row items-center p-1 gap-1">
                        <img src="https://img.icons8.com/fluency-systems-regular/48/briefcase.png" alt="briefcase Icon" className="w-4 h-4 ml-2" />
                        {item.type}
                    </div>
                </div>

                <div className="text-[#00cc99] text-lg mt-2 cursor-pointer font-semibold">
                    Apply Now <span className="ml-2">{">"}</span>
                 </div>
                </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}