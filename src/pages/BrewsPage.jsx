import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import LoadingCard from "../components/LoadingCard";
import BrewCard from "../components/BrewCard";
import FilterByBean from "../components/FilterByBean";
import FilterByMethod from "../components/FilterByMethod";
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function BrewsPage() {
  const [brews, setBrews] = useState([]);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [beanToFilter, setBeanToFilter] = useState("");
  const [methodToFilter, setMethodToFilter] = useState("");

  const getData = async () => {
    try {
      const url = `${SERVER_URL}/brews?_expand=bean&_sort=createdAt&_order=desc
      ${beanToFilter ? `&beanId=${beanToFilter}` : ""}
        ${methodToFilter ? `&method=${methodToFilter}` : ""}`;
      const response = await axios.get(url);

      setBrews(response.data);
      setPageLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setPageLoaded(false);
    getData();
  }, [beanToFilter, methodToFilter]);

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
      <div className="d-flex gap-2">
        <div className="flex-fill w-50">
          <FilterByBean
            beanToFilter={beanToFilter}
            setBeanToFilter={setBeanToFilter}
          />
        </div>
        <div className="flex-fill w-50">
          <FilterByMethod
            methodToFilter={methodToFilter}
            setMethodToFilter={setMethodToFilter}
          />
        </div>
      </div>

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
