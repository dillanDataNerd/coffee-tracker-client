import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import LoadingCard from "../components/LoadingCard";
import BeanCard from "../components/BeanCard";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;


function BeansPage() {
  const [beans, setBeans] = useState([]);
  const [pageLoaded, setPageLoaded] = useState(false);

  const getData = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/beans`);
      console.log(response.data)
      setBeans(response.data);
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
        <LoadingCard />

        <Navbar />
      </>
    );
  }

  return (
    <>
      {beans.map((eachBean) => {
        return (
          <BeanCard
            key={eachBean.id}
            id={eachBean.id}
            name={eachBean.name}
            roaster={eachBean.roaster}
            origin={eachBean.origin}
            notes={eachBean.notes}
            image={eachBean.imageUrl}
          />
        );
      })}{" "}
      <Navbar />
    </>
  );
}

export default BeansPage;
