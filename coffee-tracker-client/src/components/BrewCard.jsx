import { useState } from "react";
import frenchpressImg from "../assets/frenchpress.webp";
import mokaImg from "../assets/moka.jpg";
import espressoImg from "../assets/espresso.jpeg";
import aeropressImg from "../assets/aeropress.jpg";
import coldbrewImg from "../assets/coldbrew.webp";
import pouroverImg from "../assets/pourover.jpg";
import flatwhiteImg from "../assets/flatwhite.jpg";
import defaultImg from "../assets/nav-brew.svg";
import { Link } from "react-router-dom";

function BrewCard({ method, tastingNotes, rating, bean, id, date }) {
  let img = defaultImg;
  let alt = "default image of coffee";

  switch (method) {
    case "frenchPress":
      img = frenchpressImg;
      alt = "frenchress";
      break;
    case "moka":
      img = mokaImg;
      alt = "moka";
      break;
    case "espresso":
      img = espressoImg;
      alt = "espresso";
      break;
    case "aeropress":
      img = aeropressImg;
      alt = "aeropress";
      break;
    case "coldBrew":
      img = coldbrewImg;
      alt = "coldbrew";
      break;
    case "pourOver":
      img = pouroverImg;
      alt = "pourover";
      break;
    case "flatWhite":
      img = flatwhiteImg;
      alt = "flatwhite";
      break;
    default:
      break;
  }

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt={alt} />
        <div className="card-body">
          <Link to={`/brews/${id}`}>
            <h5 className="card-title">{bean}</h5>
          </Link>
          <h5>Rating: {rating}</h5>
          <p className="card-text">{tastingNotes}</p>
          <div className="card-footer text-body-secondary">
            {new Date(date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default BrewCard;
