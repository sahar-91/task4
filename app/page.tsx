import Head from "next/head";
import HowWork from "@/Components/howWork";
import WeWillHelp from "@/Components/weWillHelp";
import Popular from "@/Components/Popular";
import RecentlJobs from "@/Components/RecentlyAdded";

export default function Homepage() {
return (
    <>
        <Head>
        <title>Homepage</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Homepage description" />
      </Head>
        
        <HowWork />
        <WeWillHelp/>
        <Popular/>
        <RecentlJobs/>
      
    </>
    
  );
}