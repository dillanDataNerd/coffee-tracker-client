import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import Navbar from "../components/Navbar"


function ErrorPage() {
  return (
    <>

    <h1>404</h1>
    <img src="src/assets/error-page.gif" alt="404 error image" />
    <h3> This page you are trying to access doesn't exist anymore or has been moved </h3>
    <Link to={"/"}><Button>Go to Home</Button></Link>

    <Navbar/>
  </>
  )
}
export default ErrorPage