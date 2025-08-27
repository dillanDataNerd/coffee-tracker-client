import { Form } from "react-bootstrap";
import Navbar from "../components/Navbar";
import { useNavigate,useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const SERVER_URL = import.meta.env.VITE_SERVER_URL;



function BeanEditPage() {
  const navigate = useNavigate();
  const params = useParams();

  const [name, setName] = useState("");
  const [roaster, setRoaster] = useState("");
  const [origin, setOrigin] = useState("");
  const [process, setProcess] = useState("washed");
  const [roastLevel, setRoastLevel] = useState("light");
  const [notes, setNotes] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    // get value of current bean and set them as default values
    axios
      .get(`${SERVER_URL}/beans/${params.beanId}`)
      .then((response) => {
        let bean = response.data;

        setName(bean.name);
        setRoaster(bean.roaster);
        setOrigin(bean.origin);
        setProcess(bean.process);
        setRoastLevel(bean.roastLevel);
        setNotes(bean.Notes);
        setImageUrl(bean.imageUrl);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedBean = {
      name: name,
      roaster: roaster,
      origin: origin,
      process,
      roastLevel,
      notes: notes,
      imageUrl: imageUrl,
      createdAt: Date.now(),
    };

    axios
      .patch(`${SERVER_URL}/beans/${id}`, updatedBean)
      .then(() => {
        console.log("bean submission successful");
        navigate(-1);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nameInput">Name</label>
          <input
            id="nameInput"
            className="form-control"
            type="text"
            placeholder="Bean name on the bag"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="roasterInput">Roaster</label>
          <input
            id="roasterInput"
            className="form-control"
            type="text"
            placeholder="Roastery name"
            value={roaster}
            onChange={(e) => setRoaster(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="originInput">Origin</label>
          <input
            id="originInput"
            className="form-control"
            type="text"
            placeholder="e.g., Ethiopia, Colombia"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="processSelect">Process</label>
          <select
            id="processSelect"
            className="form-control"
            value={process}
            onChange={(e) => setProcess(e.target.value)}
          >
            <option value="washed">Washed</option>
            <option value="natural">Natural</option>
            <option value="honey">Honey</option>
            <option value="anaerobic">Anaerobic</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="roastLevelSelect">Roast level</label>
          <select
            id="roastLevelSelect"
            className="form-control"
            value={roastLevel}
            onChange={(e) => setRoastLevel(e.target.value)}
          >
            <option value="light">Light</option>
            <option value="medium">Medium</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="notesInput">Notes</label>
          <textarea
            id="notesInput"
            className="form-control"
            rows={4}
            placeholder="Freeform notes about the bean"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="imageUrlInput">Image URL (optional)</label>
          <input
            id="imageUrlInput"
            className="form-control"
            type="url"
            placeholder="https://example.com/bag.jpg"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>

        <div className="form-group" style={{ marginTop: 12 }}>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate(-1)}
          >
            Back
          </button>{" "}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </Form>

      <Navbar />
    </>
  );
}

export default BeanEditPage;
