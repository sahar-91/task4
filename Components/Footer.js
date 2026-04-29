import RegisterCard from "./RegisterCard";

export default function Footer() {
  return (
    <footer className="relative bg-[#00cc99] mt-50 pt-48 pb-12">
    
      <RegisterCard />

      <div className="container mx-auto grid grid-cols-1 gap-10 px-8 md:grid-cols-4 text-white">
        
       
        <div className=" flex flex-col items-start justify-center">
          <h3 className="text-3xl font-extrabold mb-2"><span className="text-black">Job</span>NQw</h3>
          <p className="text-sm text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  et dolore magna aliqua.
          </p>
        </div>


        <div className="mx-auto">
          <h4 className="font-bold text-lg mb-2">Company</h4>
          <ul className="text-sm text-white">
            <li>Address : 123 Fifth Avenue, New York - NY 10001, USA</li>
            <li>Call Us : +(1600) 456 7890</li>
            <li>Email : info@example.com</li>
            <li>Mon-Sat : 8:00 AM - 18:00 PM</li>
          </ul>
        </div>


        <div className="mx-auto">
          <h4 className=" font-bold text-lg">Pages</h4>
          <ul className="text-sm white">
            <li className="flex items-center gap-2 cursor-pointer hover:translate-x-2 transition-transform">
              <span className="text-[10px]">{">"}</span> Home
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:translate-x-2 transition-transform">
              <span className="text-[10px]">{">"}</span> Booking
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:translate-x-2 transition-transform">
              <span className="text-[10px]">{">"}</span> Facilities
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:translate-x-2 transition-transform">
              <span className="text-[10px]">{">"}</span> About Us
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:translate-x-2 transition-transform">
              <span className="text-[10px]">{">"}</span> Location
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:translate-x-2 transition-transform">
              <span className="text-[10px]">{">"}</span> Contact
            </li>
          </ul>
        </div>

  
        <div className="flex flex-col items-end">
          <h4 className="font-bold text-lg mb-2">Contact Us</h4>
          <div className="flex gap-3">
            <img className="w-5 h-5" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/google-logo--v1.png" alt="google-logo--v1"/>
            <img className="w-5 h-5" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/facebook-new.png" alt="facebook-new"/>
            <img className="w-5 h-5" src="https://img.icons8.com/ios-filled/50/FFFFFF/twitter.png" alt="twitter"/>
            <img className="w-5 h-5" src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png" alt="linkedin"/>
          </div>
        </div>

      </div>
    </footer>
  );
}
