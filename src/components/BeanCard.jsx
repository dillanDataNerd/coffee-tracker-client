function BeanCard({name,roaster,origin,notes,image}) {
  return (
        <>
      <div className="card" style={{width:"18rem"}}>
        <img src={image} className="card-img-top" alt={"image of roaster"} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h3>{origin} - {roaster}</h3>
          <p className="card-text">
            {notes}
          </p>
        </div>
      </div>
    </>


)
}
export default BeanCard;
