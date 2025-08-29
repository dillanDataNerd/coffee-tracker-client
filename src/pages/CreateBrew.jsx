import { Form } from "react-bootstrap";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const SERVER_URL = import.meta.env.VITE_SERVER_URL;


function CreateBrew() {
  const navigate = useNavigate();
  const [beanId, setBeanId] = useState("");
  const [method, setMethod] = useState("");
  const [grind, setGrind] = useState("");
  const [coffee_g, setCoffee_g] = useState("");
  const [output_g, setOutput_g] = useState("");
  const [time_s, setTime_s] = useState("");
  const [temp_c, setTemp_c] = useState("");
  const [rating, setRating] = useState(0);
  const [tastingNotes, setTastingNotes] = useState("");
  const [improvementNotes, setImprovementNotes] = useState("");
  const [allBeans, setAllBeans] = useState([]);
  const params = useParams();

  useEffect(() => {
    // get list of all bean options to populate beans dropdown
    let beanList = [];

    axios
      .get(`${SERVER_URL}/beans`)
      .then((response) => {
        response.data.map((eachBean) => {
          beanList.push({
            id: eachBean.id,
            roaster: eachBean.roaster,
            name: eachBean.name,
          });
        });
        setAllBeans(beanList);
      })
      .catch((error) => {
        console.log(error);
      });

    // If the user is recreating a brew, get details of that brew and pre-set state accordingly
    if (params.brewId) {
      getData();
    }
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${SERVER_URL}/brews/${params.brewId}?_expand=bean`
      );
      const previousSettings = response.data;
      setBeanId(previousSettings.bean.id);
      setMethod(previousSettings.method);
      setGrind(previousSettings.grind);
      setCoffee_g(previousSettings.coffee_g);
      setOutput_g(previousSettings.output_g);
      setTime_s(previousSettings.time_s);
      setTemp_c(previousSettings.temp_c);
      setRating(previousSettings.rating);
      setTastingNotes(previousSettings.tastingNotes);
      setImprovementNotes(previousSettings.improvementNotes);
    } catch (error) {
      console.log(error);
    }
  };
  
  // push newest brew
  const handleSubmit = (e) => {
    e.preventDefault(); 

    const newBrew = {
      beanId,
      method,
      grind,
      coffee_g,
      output_g,
      time_s,
      temp_c,
      rating,
      tastingNotes,
      improvementNotes,
      createdAt: Date.now(),
    };

    axios
      .post(`${SERVER_URL}/brews/`, newBrew)
      .then(() => {
        navigate(-1);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1>Log your brew</h1>
      <Form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label htmlFor="beanIdInput" className="form-label">
            Beans
          </label>

          <div className="input-group">
            <select
              className="form-select"
              id="beanIdInput"
              value={beanId}
              onChange={(e) => setBeanId(e.target.value)}
              required
            >
              <option value="" disabled>
                Please select or create a bean
              </option>
              {allBeans.map((eachBean) => (
                <option key={eachBean.id} value={eachBean.id}>
                  {`${eachBean.roaster} - ${eachBean.name}`}
                </option>
              ))}
            </select>

            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => navigate("/beans/new")}
            >
              New
            </button>
          </div>
        </div>

        <div className="form-group ">
          <label htmlFor="method">Brewing method</label>
          <select
            className="form-control"
            id="method"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            required
          >
            <option value="" disabled>
              Please pick a method
            </option>
            <option value={"espresso"}>Espresso</option>
            <option value={"flatwhite"}>Flat white</option>
            <option value={"moka"}>Moka</option>
            <option value={"aeropress"}>Aeropress</option>
            <option value={"frenchPress"}>French press</option>
            <option value={"pourOver"}>Pour over</option>
            <option value={"coldBrew"}>Cold Brew</option>
            <option value={"other"}>Other</option>
          </select>
        </div>

        <div className="row g-2 my-2">
          <div className="col-6">
            <Form.Group controlId="coffeeG">
              <Form.Label>Coffee weight(g)</Form.Label>
              <Form.Control
                type="number"
                inputMode="decimal"
                min="0"
                max="2000"
                step="0.1"
                value={coffee_g}
                onChange={(e) => setCoffee_g(e.target.value)}
                required
              />
            </Form.Group>
          </div>

          <div className="col-6">
            <Form.Group controlId="outputG">
              <Form.Label>Output (g/ml)</Form.Label>
              <Form.Control
                type="number"
                inputMode="decimal"
                min="0"
                step="0.1"
                value={output_g}
                onChange={(e) => setOutput_g(e.target.value)}
                required
              />
            </Form.Group>
          </div>

          <div className="col-6">
            <Form.Group controlId="timeS">
              <Form.Label>Brew time</Form.Label>
              <Form.Control
                type="number"
                inputMode="numeric"
                min="0"
                max="1000"
                step="1"
                value={time_s}
                onChange={(e) => setTime_s(e.target.value)}
                required
              />
            </Form.Group>
          </div>

          <div className="col-6">
            <Form.Group controlId="tempC">
              <Form.Label>Brew temp (°C)</Form.Label>
              <Form.Control
                type="number"
                inputMode="numeric"
                min="0"
                max="100"
                step="1"
                value={temp_c}
                onChange={(e) => setTemp_c(e.target.value)}
                required
              />
            </Form.Group>
          </div>
        </div>

        <div className="form-group">
          <label>How good was this coffee?</label>
          <select
            className="form-control"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value={"1"}>⭐</option>
            <option value={"2"}>⭐ ⭐</option>
            <option value={"3"}>⭐ ⭐ ⭐</option>
            <option value={"4"}>⭐ ⭐ ⭐ ⭐</option>
            <option value={"5"}>⭐ ⭐ ⭐ ⭐ ⭐</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="tastingNotes">What did it taste like?</label>
          <textarea
            className="form-control"
            id="tastingNotes"
            placeholder="e.g., stone fruit, chocolate, balanced acidity…"
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
            placeholder="eg finer grind, longer bloom, higher temp"
            value={improvementNotes}
            onChange={(e) => setImprovementNotes(e.target.value)}
          />
        </div>

        <div className="row g-2">
          <div className="col-6">
            <button
              type="button"
              className="btn btn-outline-secondary w-100"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
          </div>
          <div className="col-6">
            <button type="submit" className="btn btn-primary w-100">
              Save Brew
            </button>
          </div>
        </div>
      </Form>

      <Navbar />
    </>
  );
}

export default CreateBrew;
