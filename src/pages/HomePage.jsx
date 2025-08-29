import axios from "axios";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import LoadingCard from "../components/LoadingCard";
import Carousel from "../components/BrewCarousel";
import CoffeeTimer from "../components/CoffeeTimer";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function HomePage() {
  const [brews, setBrews] = useState([]);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [now, setNow] = useState(Date.now());

  // Pull filtered data of latest 5 coffees
  const getData = async () => {
    try {
      const response = await axios.get(
        `${SERVER_URL}/brews?_expand=bean&_sort=createdAt&_order=desc&_limit=5`
      );
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
    return () => clearInterval(interval);
  }, [now]);

  // when the server is offline set a page to 
  if (!pageLoaded) {
    return (
      <>
        <h1 className="warning">Waiting for the server to boot up.</h1>
        <img
          src="/error-page.gif"
          alt="404 error message fry shaking"
          className="img-fluid mb-4 rounded-3"
          style={{ maxHeight: 260, objectFit: "cover" }}
        />
        <Navbar />
      </>
    );
  }

  return (
    <>
      <CoffeeTimer brew={brews} />
      <Carousel brews={brews} />
      <Navbar />
    </>
  );
}

export default HomePage;
