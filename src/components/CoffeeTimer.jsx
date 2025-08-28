import { Link } from "react-router-dom";
function CoffeeTimer({ brew }) {
  console.log(brew[0]);
  let timeSinceLastCoffee = (Date.now() - brew[0].createdAt) / 60000;
  console.log(brew[0].createdAt);
  console.log(timeSinceLastCoffee);

  if (timeSinceLastCoffee < 60) {
    return (
      <div className="coffee-header">
        <div className="coffee-circle">
          <h1>{Math.floor(timeSinceLastCoffee)}</h1>
        </div>
        <h3>Minutes since your last coffee</h3>
      </div>
    );
  } else if (timeSinceLastCoffee < 3600) {
    return (
      <div className="coffee-header">
        <div className="coffee-circle">
        <h1>{Math.floor(timeSinceLastCoffee / 60)}</h1>
        <p>Hours since your last coffee</p>
      </div>
      </div>
    );
  } else if (timeSinceLastCoffee > 3600) {
    return (
      <div className="coffee-header">
        <div className="coffee-circle">
        <h1>{Math.floor(timeSinceLastCoffee / (60 * 24))}</h1>
        <p>Days since your last coffee</p>
      </div>
      </div>
    );
  } else {
    return (
      <Link to="/brews/new">
        <div className="coffee-circle">Time for your first coffee</div>
      </Link>
    );
  }
}

export default CoffeeTimer;
