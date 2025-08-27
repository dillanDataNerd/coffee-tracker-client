import { Link } from "react-router-dom";

function BeanCard({ id, name, roaster, origin, notes, image }) {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt={"image of roaster"} />
        <div className="card-body">
          <Link to={`/beans/${id}`}>
            <h4 className="card-title">{name}</h4>
          </Link>
          <h6>{roaster}</h6>
          <p className="card-text">{notes}</p>
        </div>
      </div>
    </>
  );
}
export default BeanCard;
