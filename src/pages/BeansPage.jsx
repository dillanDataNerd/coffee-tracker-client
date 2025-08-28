import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import LoadingCard from "../components/LoadingCard";
import BeanCard from "../components/BeanCard";
import FilterByOrigin from "../components/FilterByOrigin";
import FilterByRoaster from "../components/FilterByRoaster";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function BeansPage() {
  const [beans, setBeans] = useState([]);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [originToFilter, setOriginToFilter] = useState("");
  const [roasteryToFilter, setRoasteryToFilter] = useState("");

  const getData = async () => {
    try {
      const response =
        await axios.get(`${SERVER_URL}/beans?_sort=createdAt&_order=desc
      ${originToFilter ? `&origin=${originToFilter}` : ""}
        ${roasteryToFilter ? `&roaster=${roasteryToFilter}` : ""}`);
      setBeans(response.data);
      setPageLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [originToFilter, roasteryToFilter]);

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
      <h1>Beans</h1>

      <div className="d-flex gap-2 buttons-bar">
        <div className="flex-fill w-50">
          <FilterByOrigin
            originToFilter={originToFilter}
            setOriginToFilter={setOriginToFilter}
          />
        </div>
        <div className="flex-fill w-50">
          <FilterByRoaster
            roasteryToFilter={roasteryToFilter}
            setRoasteryToFilter={setRoasteryToFilter}
          />
        </div>
      </div>

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
      })}

      <Navbar />
    </>
  );
}

export default BeansPage;
