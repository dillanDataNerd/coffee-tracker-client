import { Form } from "react-bootstrap";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function CreateBrew() {
  const navigate = useNavigate();

  const [bean, setBean] = useState("");
  const [method, setMethod] = useState("Espresso");
  const [grind, setGrind] = useState(""); // keep as string so empty is allowed
  const [coffee_g, setCoffee_g] = useState(""); // same here; convert on submit
  const [output_g, setOutput_g] = useState("");
  const [time_s, setTime_s] = useState("");
  const [rating, setRating] = useState(0);
  const [tastingNotes, setTastingNotes] = useState("");
  const [improvementNotes, setImprovementNotes] = useState("");
  const [allBeans, setAllBeans] = useState([]);

  useEffect(() => {
    let beanList = [];

    axios
      .get("http://localhost:5005/beans")
      .then((response) => {
        response.data.map((eachBean) => {
          beanList.push({ id:eachBean.id, roaster: eachBean.roaster, name: eachBean.name });
        });
        setAllBeans(beanList);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); // stop full page reload
    // Convert number fields to numbers (NaN-safe) at submission time
    const newBrew = {
      bean,
      method,
      grind,
      coffee_g,
      output_g,
      time_s,
      rating,
      tastingNotes,
      improvementNotes,
      createdAt: Date.now()
    };

    axios
      .post(`http://localhost:5005/brews/`, newBrew)
      .then(() => {
        console.log("brew submission successful");
        navigate(-1)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="beanInput">Bean</label>
          <select
            className="form-control"
            id="beanInput"
            placeholder="bean"
            value={bean}
            onChange={(e) => setBean(e.target.value)}
          >
            <option value="" disabled >Choose a bean</option>
            {allBeans.map((eachBean) => {
              return(
              <option
                key={eachBean.id}
                value={eachBean.id}
              >{`${eachBean.roaster} - ${eachBean.name}`}</option>);
            })}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="method">Method</label>
          <select
            className="form-control"
            id="method"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
          >
            <option value={"espresso"}>Espresso</option>
            <option value={"flatwhite"}>Flat white</option>
            <option value={"moka"}>Moka</option>
            <option value={"aeropress"}>Aeropress</option>
            <option value={"frenchPress"}>French press</option>
            <option value={"pourOver"}>Pour over</option>
            <option value={"coldBrew"}>Cold Brew</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="grindInput">Grind setting</label>
          <input
            type="number"
            className="form-control"
            id="grindInput"
            placeholder=""
            value={grind}
            onChange={(e) => setGrind(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="coffee_gInput">Grind coffee amount</label>
          <input
            type="number"
            className="form-control"
            id="coffee_gInput"
            placeholder="grams"
            value={coffee_g}
            onChange={(e) => setCoffee_g(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="output_gInput">Coffee yield</label>
          <input
            type="number"
            className="form-control"
            id="output_gInput"
            placeholder="mL of coffee you got from the process"
            value={output_g}
            onChange={(e) => setOutput_g(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="time_sInput">Brew time</label>
          <input
            type="number"
            className="form-control"
            id="time_sInput"
            placeholder="seconds water touched the coffee"
            value={time_s}
            onChange={(e) => setTime_s(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>How good was this coffee?</label>
          <div>
            <input
              type="radio"
              id="rating_1"
              name="rating"
              value={1}
              checked={rating === 1}
              onChange={(e) => setRating(Number(e.target.value))}
            />
            <label htmlFor="rating_1"> ⭐ </label>

            <input
              type="radio"
              id="rating_2"
              name="rating"
              value={2}
              checked={rating === 2}
              onChange={(e) => setRating(Number(e.target.value))}
            />
            <label htmlFor="rating_2"> ⭐ ⭐ </label>

            <input
              type="radio"
              id="rating_3"
              name="rating"
              value={3}
              checked={rating === 3}
              onChange={(e) => setRating(Number(e.target.value))}
            />
            <label htmlFor="rating_3"> ⭐ ⭐ ⭐ </label>

            <input
              type="radio"
              id="rating_4"
              name="rating"
              value={4}
              checked={rating === 4}
              onChange={(e) => setRating(Number(e.target.value))}
            />
            <label htmlFor="rating_4"> ⭐ ⭐ ⭐ ⭐ </label>

            <input
              type="radio"
              id="rating_5"
              name="rating"
              value={5}
              checked={rating === 5}
              onChange={(e) => setRating(Number(e.target.value))}
            />
            <label htmlFor="rating_5"> ⭐ ⭐ ⭐ ⭐ ⭐ </label>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="tastingNotes">What did it taste like?</label>
          <textarea
            className="form-control"
            id="tastingNotes"
            placeholder=""
            rows={5}
            value={tastingNotes}
            onChange={(e) => setTastingNotes(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="improvementNotes">What will you try next time?</label>
          <textarea
            className="form-control"
            id="improvementNotes"
            rows={5}
            placeholder="e.g., longer pre-infusion, coarser grind"
            value={improvementNotes}
            onChange={(e) => setImprovementNotes(e.target.value)}
          />
        </div>

        <div className="form-group">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </Form>

      <Navbar />
    </>
  );
}

export default CreateBrew;
