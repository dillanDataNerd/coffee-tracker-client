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
        <h3>Mins since your last coffee. </h3>
        <p>I can smell it on your breath</p>
      </div>
    );
  } else if (timeSinceLastCoffee < 3600) {
    return (
      <div className="coffee-header">
        <div className="coffee-circle">
          <h1>{Math.floor(timeSinceLastCoffee / 60)}</h1>
        </div>
        <h3>Hours since your last coffee. </h3>
        <p>Brew yourself a pick me up</p>
      </div>
    );
  } else if (timeSinceLastCoffee > 3600) {
    return (
      <div className="coffee-header">
        <div className="coffee-circle">
          <h1>{Math.floor(timeSinceLastCoffee / (60 * 24))}</h1>
        </div>
        <h3>Days since your last coffee</h3>
        <p>Your withdrawl symptoms must be brutal</p>
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
