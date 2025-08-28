import { Navigate, useNavigate, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";
const SERVER_URL = import.meta.env.VITE_SERVER_URL;


import Navbar from "../components/Navbar";
import LoadingCard from "../components/LoadingCard";
import BrewCard from "../components/BrewCard";
import { Button } from "react-bootstrap";
import BeanCard from "../components/BeanCard";
import { Link } from "react-router-dom";

function BrewDetailsPage() {
  const params = useParams();
const navigate=useNavigate()
  const [brew, setBrew] = useState([]);
  const [pageLoaded, setPageLoaded] = useState(false);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${SERVER_URL}/brews/${params.brewId}?_expand=bean`
      );
      setBrew(response.data);
      setPageLoaded(true);
      console.log(brew)
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

  const handleDeleteButton = ()=>{
    axios.delete(`${SERVER_URL}/brews/${brew.id}`)
    navigate("/brews")

  }

  return (
    <>
      <BrewCard
        key={brew.id}
        id={brew.id}
        method={brew.method}
        tastingNotes={brew.tastingNotes}
        rating={brew.rating}
        bean={brew.bean.name}
        date={brew.createdAt}
      />

      <h3>Brew Settings</h3>
      <p>Method: {brew.method}</p>
      <p>Grind setting: {brew.grind}</p>
      <p>Grind amount:{brew.coffee_g}g</p>
      <p>Brewing temperature: {brew.temp_c}C</p>
      <p>Brewing time: {brew.time_s}s</p>
      <p>Yield: {brew.output_g}g</p>
      <p>Improvement notes: {brew.improvementNotes}</p>

      <BeanCard
        key={brew.bean.id}
        id={brew.bean.id}
        name={brew.bean.name}
        roaster={brew.bean.roaster}
        origin={brew.bean.origin}
        notes={brew.bean.notes}
        image={brew.bean.imageUrl}
      />

      <button type="button" className="btn btn-danger" onClick={handleDeleteButton}>
        Delete
      </button>
      <Link to={`/brews/edit/${brew.id}`}>
        <Button>Edit</Button>
      </Link>

      <Navbar />
    </>
  );
}
export default BrewDetailsPage;
