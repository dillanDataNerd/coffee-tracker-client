import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import LoadingCard from "../components/LoadingCard";
import BrewCard from "../components/BrewCard";
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function BrewsPage() {
  const [brews, setBrews] = useState([]);
  const [pageLoaded, setPageLoaded] = useState(false);

  const getData = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/brews?_expand=bean`);
      console.log(response.data);
      setBrews(response.data);
      setPageLoaded(true);
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
        <LoadingCard />
        <LoadingCard />

        <Navbar />
      </>
    );
  }

  return (
    <>
      {brews.map((eachBrew) => {
        return (
          <BrewCard
            key={eachBrew.id}
            id={eachBrew.id}
            method={eachBrew.method}
            tastingNotes={eachBrew.tastingNotes}
            rating={eachBrew.rating}
            bean={eachBrew.bean.name}
            date={eachBrew.createdAt}
          />
        );
      })}

      <Navbar />
    </>
  );
}
export default BrewsPage;
