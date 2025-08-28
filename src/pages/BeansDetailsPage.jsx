import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, ListGroup } from "react-bootstrap";
import Navbar from "../components/Navbar";
import LoadingCard from "../components/LoadingCard";
import BeanCard from "../components/BeanCard";
import BrewRecipeCard from "../components/BrewRecipeCard";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function BeansDetailsPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [bean, setBean] = useState(null);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `${SERVER_URL}/beans/${params.beanId}?_embed=brews`
        );
        setBean(data);
        setPageLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [params.beanId]);

  const handleDeleteButton = async () => {
    try {
      await axios.delete(`${SERVER_URL}/beans/${bean.id}`);
      navigate("/beans");
    } catch (error) {
      console.log(error);
    }
  };

  if (!pageLoaded || !bean) {
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
          <Card.Header as="h4">Bean Summary</Card.Header>
          <Card.Body className="text-center">
            <BeanCard
              key={bean.id}
              id={bean.id}
              name={bean.name}
              roaster={bean.roaster}
              origin={bean.origin}
              notes={bean.notes}
              image={bean.imageUrl}
            />
          </Card.Body>
        </Card>

        <Card className="mb-4 shadow-sm">
          <Card.Header as="h4">Bean Details</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>Origin:</strong> {bean.origin }
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Process:</strong> {bean.process }
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Roast level:</strong> {bean.roastLevel}
            </ListGroup.Item>
            {bean.notes && (
              <ListGroup.Item>
                <strong>Notes:</strong> {bean.notes}
              </ListGroup.Item>
            )}
          </ListGroup>
        </Card>

        <Card className="mb-4 shadow-sm">
          <Card.Header as="h4">Previous Brews</Card.Header>
          <Card.Body>
            {bean.brews?.length ? (
              <div className="d-grid gap-3">
                {bean.brews.map((eachBrew) => (
                  <BrewRecipeCard
                    key={eachBrew.id}
                    id={eachBrew.id}
                    method={eachBrew.method}
                    tastingNotes={eachBrew.tastingNotes}
                    rating={eachBrew.rating}
                    bean={eachBrew.beanId}
                    coffee_g={eachBrew.coffee_g}
                    output_g={eachBrew.output_g}
                    grind={eachBrew.grind}
                    temp_c={eachBrew.temp_c}
                    time_s={eachBrew.time_s}
                    improvementNotes={eachBrew.improvementNotes}
                    date={eachBrew.createdAt}
                  />
                ))}
              </div>
            ) : (
              <div className="text-muted">No brews yet for this bean.</div>
            )}
          </Card.Body>
        </Card>

        <div className="row g-2 mt-3">
          <div className="col-6">
            <Button variant="danger" className="w-100" onClick={handleDeleteButton}>
              Delete
            </Button>
          </div>
          <div className="col-6">
            <Link to={`/beans/edit/${bean.id}`} className="d-block w-100">
              <Button variant="secondary" className="w-100">
                Edit
              </Button>
            </Link>            
          </div>
        </div>
      </div>

      <Navbar />
    </>
  );
}

export default BeansDetailsPage;
