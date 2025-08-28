import { Link } from "react-router-dom";

function BeanCard({ id, name, roaster, origin, notes, image }) {

  return (
    <div className="card bean-card h-100">
      <img
        src={image ? image : "/default-beans.jpg" }
        className="card-img-top"
        alt={`Image of ${roaster ?? "roaster"}`}
      />
      <div className="card-body d-flex flex-column">
        <Link to={`/beans/${id}`} className="text-decoration-none">
          <h5 className="card-title mb-2">{name ?? "Unknown bean"}</h5>
        </Link>
        <h6 className="mb-2 text-muted">{roaster ?? "Unknown roaster"}</h6>
        <p className="card-text flex-grow-1">{notes ?? ""}</p>
      </div>
      <div className="card-footer text-body-secondary">
        {origin ?? "Origin unknown"}
      </div>
    </div>
  );
}
export default BeanCard;
