import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import LoadingCard from "../components/LoadingCard";
import BeanCard from "../components/BeanCard";

function BeansPage() {
  const [beans, setBeans] = useState([]);
  const [pageLoaded, setPageLoaded] = useState(false);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:5005/beans");
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
            key={eachBean.name}
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
