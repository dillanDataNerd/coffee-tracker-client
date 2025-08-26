import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import LoadingCard from "../components/LoadingCard";
import BrewCard from "../components/BrewCard";

function BrewsPage() {
  const [brews, setBrews] = useState([]);
  const [pageLoaded,setPageLoaded] = useState(false);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:5005/brews");
      setBrews(response.data);
      setPageLoaded (true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
      getData();
    console.log("loaded");
  }, []);

  if (!pageLoaded) {
    return (
        <>
        <LoadingCard/>
        <LoadingCard/>

      <Navbar/>
      </>
      
    );
  }

  return (
    <>
      {brews.map(eachBrew=>{
        return <BrewCard key={eachBrew.id} id={eachBrew.id} method={eachBrew.method}  tastingNotes={eachBrew.tastingNotes} rating={eachBrew.rating} bean={eachBrew.bean} date={eachBrew.createdAt}/>
      })}

      <Navbar />
    </>
  );
}
export default BrewsPage;
