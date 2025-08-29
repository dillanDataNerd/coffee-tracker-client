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
  const [now, setNow] = useState(Date.now());


  const getData = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/brews?_expand=bean&_sort=createdAt&_order=desc&_limit=5`);
      console.log(response.data)
      setBrews(response.data);
      setPageLoaded(true);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();

    //force page to rerender every minute to update timer
    const interval = setInterval(() => {
      setNow(Date.now());  
    }, 60000);    
    return( () => clearInterval(interval))
  }, [now]);


  if (!pageLoaded) {
    return (
      <>
      <h1>Waiting for the server to boot up</h1>
        <LoadingCard />
        <Navbar />
      </>
    );
  }

  return (
    <>
      <CoffeeTimer brew={brews}/>
      <Carousel brews={brews}/>
      <Navbar />
    </>
  );
}

export default HomePage;
