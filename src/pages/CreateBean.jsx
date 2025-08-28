import { Form } from "react-bootstrap";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function CreateBean() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [roaster, setRoaster] = useState("");
  const [origin, setOrigin] = useState("");
  const [process, setProcess] = useState("");
  const [roastLevel, setRoastLevel] = useState("");
  const [notes, setNotes] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBean = {
      name,
      roaster,
      origin,
      process,
      roastLevel,
      notes,
      imageUrl,
      createdAt: Date.now(),
    };

    axios
      .post(`${SERVER_URL}/beans/`, newBean)
      .then(() => {
        console.log("bean submission successful");
        navigate(-1);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1>Add a new bean</h1>

      <Form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nameInput">Name</label>
          <input
            id="nameInput"
            className="form-control"
            type="text"
            placeholder="Funky monkey"
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
            placeholder="Blue bottle"
            value={roaster}
            onChange={(e) => setRoaster(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="originSelect">Origin</label>
          <select
            id="originSelect"
            className="form-control"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            required
          >
            <option value="" disabled>
              Select a country
            </option>
            <option value="Brazil">Brazil</option>
            <option value="Burundi">Burundi</option>
            <option value="Colombia">Colombia</option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="El Salvador">El Salvador</option>
            <option value="Ethiopia">Ethiopia</option>
            <option value="Guatemala">Guatemala</option>
            <option value="Honduras">Honduras</option>
            <option value="Kenya">Kenya</option>
            <option value="Nicaragua">Nicaragua</option>
            <option value="Panama">Panama</option>
            <option value="Peru">Peru</option>
            <option value="Rwanda">Rwanda</option>
            <option value="Tanzania">Tanzania</option>
            <option value="Yemen">Yemen</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="row g-2 my-2">
          <div className="col-6">
            <Form.Group controlId="processSelect">
              <Form.Label>Process</Form.Label>
              <Form.Select
                value={process}
                onChange={(e) => setProcess(e.target.value)}
              >
                <option value="" disabled>
                  Pick a process
                </option>

                <option value="washed">Washed</option>
                <option value="natural">Natural</option>
                <option value="honey">Honey</option>
                <option value="anaerobic">Anaerobic</option>
                <option value="other">Other</option>
              </Form.Select>
            </Form.Group>
          </div>

          <div className="col-6">
            <Form.Group controlId="roastLevelSelect">
              <Form.Label>Roast level</Form.Label>
              <Form.Select
                value={roastLevel}
                onChange={(e) => setRoastLevel(e.target.value)}
              >
                <option value="" disabled>
                  Pick a roast
                </option>
                <option value="light">Light</option>
                <option value="medium">Medium</option>
                <option value="dark">Dark</option>
              </Form.Select>
            </Form.Group>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="notesInput">Notes</label>
          <textarea
            id="notesInput"
            className="form-control"
            rows={5}
            placeholder="eg tasting notes stone fruit, caramel and blueberries"
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
            placeholder="https://..."
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>

        <div className="row g-2" style={{ marginTop: 12 }}>
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
              Save Bean
            </button>
          </div>
        </div>
      </Form>

      <Navbar />
    </>
  );
}

export default CreateBean;
