import SearchBar from "./searchBar";

export default function Banner() {
    return (
    <div className= "bg-gray-100 top-0 z-50 h-173.25 -mt-[80px]">
        
        <div className="flex flex-row h-173.25 gap-6 items-center">
            <div className="max-w-[60%] align-center mx-auto">
        <div className="text-start p-4 h-full">
            <h1 className="text-3xl font-bold mb-4">Search, Find, & Apply</h1>
            <p className="text-lg mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        
        <SearchBar /> 
        
        </div>
        </div>

        <div className="bg-[#00cc99] rounded-bl-[100px] z-100 w-[40%] h-full shrink-0"></div>
        
        </div>
        </div>
    )
}