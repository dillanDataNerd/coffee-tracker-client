import axios from "axios";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
const SERVER_URL = import.meta.env.VITE_SERVER_URL;
import { useEffect, useState } from "react";
import LoadingCard from "../components/LoadingCard";
import Carousel from "../components/BrewCarousel"
import CoffeeTimer from "../components/CoffeeTimer";

function HomePage() {
  const [brews, setBrews] = useState([]);
  const [pageLoaded, setPageLoaded] = useState(false);

  const getData = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/brews?_expand=bean`);
      // get the latest 3 brews to show in the carosal
      const sortedArray = [...response.data].sort(
        (a, b) => b.createdAt - a.createdAt
      );
      const trimmedArray = sortedArray.slice(-3);
      setBrews(trimmedArray);
      setPageLoaded(true);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  if (!pageLoaded) {
    return (
      <>
        <LoadingCard />
        <Navbar />
      </>
    );
  }

  return (
    <>
      <CoffeeTimer brew={brews.slice(-1)}/>
      <Carousel brews={brews}/>
      <Navbar />
    </>
  );
}

export default HomePage;
