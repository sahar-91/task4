import RegisterCard from "./RegisterCard";

export default function Footer() {
  return (
    <footer className="relative bg-[#00cc99] mt-50 pt-48 pb-12">
    
     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1280px] px-5 md:px-8">
        <RegisterCard />
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-10 px-5 md:px-8 md:grid-cols-5 text-white">
        
       
        <div className=" col-span-2 flex flex-col items-start justify-center">
          <a href="#" className="cursor-pointer">
          <h3 className="text-3xl font-extrabold mb-2"><span className="text-black">Job</span>NQw</h3>
          </a>
          <p className="text-sm text-white max-w-[60%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  et dolore magna aliqua.
          </p>
        </div>


        <div className="col-span-1 flex flex-col items-start">
          <h4 className="font-bold text-lg mb-2">Company</h4>
          <ul className="text-sm text-white">
            <li>Address : 123 Fifth Avenue, New York-1060, USA.</li>
            <li>Call Us : +(1600) 456 7890</li>
            <li>Email : yourid@example.com</li>
            <li>Mon-Sat : 9:00 AM - 19:00 PM</li>
          </ul>
        </div>


   <div className="col-span-1 flex flex-col items-start">
  <h4 className="font-bold text-lg">Pages</h4>
  <ul className="text-sm white">
    <li className="flex items-center">
      <a href="#" className="flex items-center gap-2 cursor-pointer">
        <span className="text-[10px]">{">"}</span> Home
      </a>
    </li>
    <li className="flex items-center">
      <a href="#" className="flex items-center gap-2 cursor-pointer">
        <span className="text-[10px]">{">"}</span> Booking
      </a>
    </li>
    <li className="flex items-center">
      <a href="#" className="flex items-center gap-2 cursor-pointer"> 
        <span className="text-[10px]">{">"}</span> Facilities
      </a>
    </li>
    <li className="flex items-center">
      <a href="#" className="flex items-center gap-2 cursor-pointer">
        <span className="text-[10px]">{">"}</span> About Us
      </a>
    </li>
    <li className="flex items-center">
      <a href="#" className="flex items-center gap-2 cursor-pointer hover:translate-x-2 transition-transform py-1">
        <span className="text-[10px]">{">"}</span> Location
      </a>
    </li>
    <li className="flex items-center">
      <a href="#" className="flex items-center gap-2 cursor-pointer hover:translate-x-2 transition-transform py-1">
        <span className="text-[10px]">{">"}</span> Contact
      </a>
    </li>
  </ul>
</div>
  
        <div className="col-span-1 flex flex-col items-start">
  <h4 className="font-bold text-lg mb-2">Contact Us</h4>
  <div className="flex gap-3">
    <a href="#" className="cursor-pointer">
      <img className="w-5 h-5" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/google-logo--v1.png" alt="google-logo" />
    </a>
    <a href="#" className="cursor-pointer">
      <img className="w-5 h-5" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/facebook-new.png" alt="facebook" />
    </a>
    <a href="#" className="cursor-pointer">
      <img className="w-5 h-5" src="https://img.icons8.com/ios-filled/50/FFFFFF/twitter.png" alt="twitter" />
    </a>
    <a href="#" className="cursor-pointer">
      <img className="w-5 h-5" src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png" alt="linkedin" />
    </a>
  </div>
</div>


      </div>
    </footer>
  );
}
