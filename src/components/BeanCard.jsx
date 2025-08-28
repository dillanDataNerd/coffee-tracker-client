import { Link } from "react-router-dom";

function BeanCard({ id, name, roaster, origin, notes, image }) {

  return (
    <div className="card bean-card h-100">
      <img
        src={image ? image : "/default-beans.jpg" }
        className="card-img-top"
        alt={`Image of ${roaster}`}
      />
      <div className="card-body d-flex flex-column">
        <Link to={`/beans/${id}`} className="text-decoration-none">
          <h5 className="card-title mb-2 d-flex justify-content-between align-items-center"><span>{name}</span> <span className="text-muted">{roaster}</span> </h5>
        </Link>
        <h6 ></h6>
        <p className="card-text flex-grow-1">{notes ?? ""}</p>
      </div>
      <div className="card-footer text-body-secondary">
        {origin ?? "Origin unknown"}
      </div>
    </div>
  );
}
export default BeanCard;
