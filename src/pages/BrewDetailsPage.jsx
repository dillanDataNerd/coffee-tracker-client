import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, ListGroup } from "react-bootstrap";
import Navbar from "../components/Navbar";
import LoadingCard from "../components/LoadingCard";
import BrewCard from "../components/BrewCard";
import BeanCard from "../components/BeanCard";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function BrewDetailsPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [brew, setBrew] = useState(null);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `${SERVER_URL}/brews/${params.brewId}?_expand=bean`
        );
        setBrew(response.data);
        setPageLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [params.brewId]);

  const handleDeleteButton = async () => {
    try {
      await axios.delete(`${SERVER_URL}/brews/${brew.id}`);
      navigate("/brews");
    } catch (error) {
      console.log(error);
    }
  };

  if (!pageLoaded) {
    return (
      <>
        <LoadingCard />
        <Navbar />
      </>
    );
  }

  return (
    <>
      <div className="container py-4">
        <Card className="mb-4 shadow-sm">
          <Card.Header as="h4">Brew Summary</Card.Header>
          <Card.Body className="text-center">
            <BrewCard
              key={brew.id}
              id={brew.id}
              method={brew.method}
              tastingNotes={brew.tastingNotes}
              rating={brew.rating}
              bean={brew.bean.name}
              date={brew.createdAt}
              imageUrl={brew.bean?.imageUrl}
            />
          </Card.Body>
        </Card>

        <Card className="mb-4 shadow-sm">
          <Card.Header as="h4">Brew Settings</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>Method:</strong> {brew.method}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Grind setting:</strong> {brew.grind}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Coffee:</strong> {brew.coffee_g} g
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Temperature:</strong> {brew.temp_c} °C
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Time:</strong> {brew.time_s} s
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Yield:</strong> {brew.output_g} g
            </ListGroup.Item>
            {brew.improvementNotes && (
              <ListGroup.Item>
                <strong>Next time:</strong> {brew.improvementNotes}
              </ListGroup.Item>
            )}
          </ListGroup>
        </Card>

        <Card className="mb-4 shadow-sm">
          <Card.Header as="h4">Bean Details</Card.Header>
          <Card.Body>
            <BeanCard
              key={brew.bean.id}
              id={brew.bean.id}
              name={brew.bean.name}
              roaster={brew.bean.roaster}
              origin={brew.bean.origin}
              notes={brew.bean.notes}
              image={brew.bean.imageUrl}
            />
          </Card.Body>
        </Card>

        <div className="row g-2 mt-3">
          <div className="col-4">
            <Button
              variant="danger"
              className="w-100"
              onClick={handleDeleteButton}
            >
              Delete
            </Button>
          </div>
          <div className="col-4">
            <Link to={`/brews/edit/${brew.id}`} className="w-100 d-block">
              <Button variant="secondary" className="w-100">
                Edit
              </Button>
            </Link>
          </div>
          <div className="col-4">
            <Link to={`/brews/new/${brew.id}`} className="w-100 d-block">
              <Button variant="success" className="w-100">
                Brew again
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Navbar />
    </>
  );
}

export default BrewDetailsPage;
