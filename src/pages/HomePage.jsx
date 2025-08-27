import Navbar from "../components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
const SERVER_URL = import.meta.env.VITE_SERVER_URL;



function HomePage() {
  return (
    <>
    <div>HomePage</div>
    <Navbar/>
  </>
  )
}
export default HomePage