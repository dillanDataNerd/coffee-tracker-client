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
      alt = "french press";
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
      alt = "cold brew";
      break;
    case "pourOver":
      img = pouroverImg;
      alt = "pour over";
      break;
    case "flatWhite":
      img = flatwhiteImg;
      alt = "flat white";
      break;
    default:
      break;
  }

  const dateString = new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="card brew-card h-100">
      <img src={img} className="card-img-top" alt={alt} />
      <div className="card-body">
        <Link to={`/brews/${id}`} className="text-decoration-none">
          <h5 className="card-title mb-2">{bean}</h5>
        </Link>
        <h6 className="mb-2">
          Rating:
          {rating == 1
            ? "⭐"
            : rating == 2
            ? "⭐⭐"
            : rating == 3
            ? "⭐⭐⭐"
            : rating == 4
            ? "⭐⭐⭐⭐"
            : rating == 5
            ? "⭐⭐⭐⭐⭐"
            : "No rating"}
        </h6>
        <p className="card-text mb-0">{tastingNotes ?? ""}</p>
      </div>
      <div className="card-footer text-body-secondary">{dateString}</div>
    </div>
  );
}

export default BrewCard;
