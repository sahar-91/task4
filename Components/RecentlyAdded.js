"use client";

import RecentJobsCard from "@/Components/RecentJobsCard";

export default function RecentJobs() {

const array = [
  { title: "UI/UX Designer", content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" , company: "Dimension Studio", location:"San Francisco, CA",type: "Full Time" ,image: "https://img.icons8.com/ios/brain/00cc99/enter-2.png" },
  { title: "Full Stack Developer", content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" , company: "Alpander", location:"San Francisco, CA",type: "Full Time" ,image: "https://img.icons8.com/ios/money-bag/00cc99/money-bag.png" },
  { title: "Product Designer", content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" , company: "XReact Tech", location:"San Francisco, CA",type: "Full Time" ,image: "https://img.icons8.com/ios/bank/00cc99/bank.png" },
  { title: "Data Analyst", content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" , company: "Alpander", location:"San Francisco, CA",type: "Full Time" ,image: "https://img.icons8.com/ios/product/00cc99/product.png" },
];
  return (
    <div className="bg-[#fbfbfb] h-auto py-10">
      <div className="flex items-center flex-col py-8 px-5 md:px-8">
        <h2 className="text-2xl font-bold text-center pt-10">Recently Added Jobs</h2>
        <p className="text-[#8A8A8A] text-center m-4 max-w-[600px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
      
        <RecentJobsCard array={array} />

        <button className="border-[#00cc99] border-2 cursor-pointer h-10 px-6 text-[#00cc99] rounded hover:bg-[#00b386] hover:text-white transition duration-300 mt-6">
          View More
        </button>
      </div>
    </div>
  );
}