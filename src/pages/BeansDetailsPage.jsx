import { Navigate, useNavigate, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

import Navbar from "../components/Navbar";
import LoadingCard from "../components/LoadingCard";
import { Button } from "react-bootstrap";
import BeanCard from "../components/BeanCard";
import { Link } from "react-router-dom";
import BrewRecipeCard from "../components/BrewRecipeCard";

function BeansDetailsPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [bean, setBean] = useState([]);
  const [pageLoaded, setPageLoaded] = useState(false);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${SERVER_URL}/beans/${params.beanId}?_embed=brews`
      );
      setBean(response.data);
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
        <Navbar />
      </>
    );
  }

  const handleDeleteButton = () => {
    axios.delete(`${SERVER_URL}/beans/${bean.id}`);
    navigate("/beans");
  };

  return (
    <>
      <BeanCard
        key={bean.id}
        id={bean.id}
        name={bean.name}
        roaster={bean.roaster}
        origin={bean.origin}
        notes={bean.notes}        
        image={bean.imageUrl}
      />

      <p>process = {bean.process}</p>
      <p>origin = {bean.origin}</p>
      <p>Roast Level = {bean.roastLevel}</p>

      <h2>Brews</h2>

      {bean.brews.map((eachBrew) => {
        return (
          <BrewRecipeCard
            key={eachBrew.id}
            id={eachBrew.id}
            method={eachBrew.method}
            tastingNotes={eachBrew.tastingNotes}
            rating={eachBrew.rating}
            bean={eachBrew.beanId}
            coffee_g={eachBrew.coffee_g}
            output_g={eachBrew.output_g}
            grind={eachBrew.grind}
            temp_c={eachBrew.temp_c}
            time_s={eachBrew.time_s}
            improvementNotes={eachBrew.improvementNotes}
            date={eachBrew.createdAt}
          />
        );
      })}
      

      <button
        type="button"
        className="btn btn-danger"
        onClick={handleDeleteButton}
      >
        Delete
      </button>
      <Link to={`/beans/edit/${bean.id}`}>
        <Button>Edit</Button>
      </Link>

      <Navbar />
    </>
  );
}

export default BeansDetailsPage;
