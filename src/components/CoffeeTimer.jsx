function CoffeeTimer({ brew }) {
  console.log(brew);

  let timeSinceLastCoffee =
    (Date.parse(brew[0].createdAt) - Date.now()) / 60000;

  if (timeSinceLastCoffee < 3600) {
    return (
      <div>
        <h1>{Math.floor(timeSinceLastCoffee)} minutes</h1>
         <p>Since your last coffee</p>
      </div>
    );
} else if (timeSinceLastCoffee < 360000) {
    return (
        <div>
        <h1>{Math.floor(timeSinceLastCoffee / 60)} hours</h1>
          <p>Since your last coffee</p>
      </div>
    );
} else if (timeSinceLastCoffee > 360000) {
    return (
        <div>
        <h1>{Math.floor(timeSinceLastCoffee / (60 * 24))} hours</h1>
        <p>Since your last coffee</p>
      </div>
    );
  } else {
    return (<div>Time for your first coffee</div>)
  }
}

export default CoffeeTimer;
