import SearchBar from "./searchBar";

export default function Banner() {
    return (
    <div className="md:bg-gradient-to-r from-gray-100 from-[40%] via-gray-200 via-[60%] to-[#00cc99] to-[65%] w-full h-full md:h-125">
      <div className="container mx-auto">
    <div className= "bg-white md:bg-gray-100 z-50 h-full md:h-125">
        
        <div className="flex flex-col md:flex-row md:h-125 gap-6 items-center align-center">
            <div className="w-full md:max-w-[60%] align-center mx-auto ">
        <div className="text-center md:text-start h-full pr-8">
            <h1 className="text-3xl font-bold mb-4">Search, Find, & Apply</h1>
            <p className="text-lg mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        
        <SearchBar /> 
        
        </div>
        </div>

        <div className="bg-[#00cc99] md:rounded-bl-[100px] z-60 md:w-[40%] md:h-125 h-85 shrink-0 w-full relative">
        <img src="https://img.icons8.com/ios-filled/50/00cc99/security-checked.png" alt="protect" className="w-10 h-10 p-2 rounded-sm bg-white absolute top-20 left-20 rotate-340" />
        <img src="https://img.icons8.com/ios-filled/50/00cc99/resume.png" alt="resume" className="w-10 h-10 p-2 rounded-sm bg-white  absolute top-40 right-20 rotate-5" />
        <img src="https://img.icons8.com/ios-filled/50/00cc99/search--v1.png" alt="search" className="w-10 h-10 p-2 rounded-sm bg-white absolute top-60 left-15 rotate-340" />
        </div>
        
        </div>
        </div>
        </div>
        </div>
    )
}