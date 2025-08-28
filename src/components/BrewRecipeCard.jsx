import { Accordion, ListGroup, Card } from "react-bootstrap";
import { Link } from "react-router-dom";


function BrewRecipeCard({
  method,
  tastingNotes,
  rating,
  coffee_g,
  output_g,
  id,
  date,
  grind,
  temp_c,
  time_s,
  improvementNotes,
}) {

return (
    <Accordion className="mb-3 shadow-sm" defaultActiveKey="">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <div className="d-flex justify-content-between align-items-center w-100">
            <span className="h6 mb-0"><Link to={`/brews/${id}`} >
{method}</Link> {rating == 1 ? "⭐" : rating == 2 ? "⭐⭐" : rating == 3 ? "⭐⭐⭐" : rating == 4 ? "⭐⭐⭐⭐" : rating == 5 ? "⭐⭐⭐⭐⭐" : "No rating"}</span>            
          </div>
        </Accordion.Header>

        <Accordion.Body className="p-0">
          <ListGroup variant="flush">
            <ListGroup.Item><strong>Grind amount:</strong> {coffee_g} g</ListGroup.Item>
            <ListGroup.Item><strong>Grind setting:</strong> {grind}</ListGroup.Item>
            <ListGroup.Item><strong>Temperature:</strong> {temp_c} °C</ListGroup.Item>
            <ListGroup.Item><strong>Brew time:</strong> {time_s} s</ListGroup.Item>
            <ListGroup.Item><strong>Yield:</strong> {output_g} g</ListGroup.Item>
            {tastingNotes && (
              <ListGroup.Item><strong>Tasting notes:</strong> {tastingNotes}</ListGroup.Item>
            )}
            {improvementNotes && (
              <ListGroup.Item><strong>Next time:</strong> {improvementNotes}</ListGroup.Item>
            )}
          </ListGroup>

          <Card.Footer className="text-body-secondary">
            {new Date(date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </Card.Footer>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BrewRecipeCard;
