import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Navbar from "../components/Navbar";

function ErrorPage() {
  return (
    <>
      <div className="min-vh-100 d-flex flex-column align-items-center justify-content-center text-center">
        <div className="display-4 fw-bold text-primary mb-2">404</div>
        <p className="text-muted mb-4">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>

        <img
          src="/error-page.gif"
          alt="404 error message fry shaking"
          className="img-fluid mb-4 rounded-3"
          style={{ maxHeight: 260, objectFit: "cover" }}
        />

        <Link to="/">
          <Button variant="primary">Go Home</Button>
        </Link>
      </div>

      <Navbar />
    </>
  );
}

export default ErrorPage;
