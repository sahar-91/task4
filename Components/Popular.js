"use client";

import PopularCard from "@/Components/PopularCard";

export default function Popular() {

const array = [
  { title: "Design and Development", content: "350 jobs vacancy", image: "https://img.icons8.com/ios/brain/00cc99/enter-2.png" },
  { title: "Accounting and Finance", content: "120 jobs vacancy", image: "https://img.icons8.com/ios/money-bag/00cc99/money-bag.png" },
  { title: "Bank Institution", content: "80 jobs vacancy", image: "https://img.icons8.com/ios/bank/00cc99/bank.png" },
  { title: "Product Management", content: "200 jobs vacancy", image: "https://img.icons8.com/ios/product/00cc99/product.png" },
  { title: "Cybersecurity", content: "50 jobs vacancy", image: "https://img.icons8.com/ios/security-checked/00cc99/security-checked.png" },
];

  return (
    <div className="bg-[#00cc99]/[0.051] h-auto pb-9">
      <div className="flex items-center flex-col py-8 px-5 md:px-8">
        <h2 className="text-2xl font-bold text-center pt-10">Popular Job Categories</h2>
        <p className="text-[#8A8A8A] text-center m-4 max-w-[600px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
      <div className="container mx-auto px-5 md:px-8">
        <PopularCard array={array} />
      </div>
        <button className="border-[#00cc99] border-2 cursor-pointer h-10 px-6 text-[#00cc99] rounded hover:bg-[#00b386] hover:text-white transition duration-300 mt-4">
          View More
        </button>
      </div>
    </div>
  );
}