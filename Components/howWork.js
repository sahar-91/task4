import Card from "./Card";
export default function HowWork() {
    const array = [
    {title: "Register", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", image: "https://img.icons8.com/ios/windows/00cc99/enter-2.png"},
    {title: "Create a resume", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", image: "https://img.icons8.com/ios/00cc99/resume.png"},
    {title: "Find job", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", image: "https://img.icons8.com/ios/00cc99/search--v1.png"},
    {title: "Apply job", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", image: "https://img.icons8.com/ios/00cc99/job.png"}
    ];
    return (
        <div className="bg-[#fbfbfb] flex items-center">
      <div className="container mx-auto pt-20 pb-5 px-5 md:px-8">
            <div className="font-bold text-3xl">How it works</div>
                <div className="flex md:flex-row flex-col gap-6 mt-6 mb-20 justify-between align-center">
                <p className="text-[#8A8A8A] w-full md:w-[60%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                <button className="hidden md:inline-block bg-white border-[#00cc99] border-2 cursor-pointer h-10 px-6 text-[#00cc99] rounded hover:bg-[#00b386] hover:text-white transition duration-300">Learn More</button>
                </div>
                <div className="w-full">
            <Card array={array} />
            <div className="mt-6 md:hidden flex justify-center">
                <button className="bg-white border-[#00cc99] border-2 cursor-pointer h-10 px-6 text-[#00cc99] rounded hover:bg-[#00b386] hover:text-white transition duration-300 my-8">Learn More</button>
            </div>
            </div>
      </div>  
        </div>
    )
}