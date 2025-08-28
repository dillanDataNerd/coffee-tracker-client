import axios from "axios";
import { useEffect, useState } from "react";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function FilterByRoaster({ roasteryToFilter, setRoasteryToFilter }) {
  const [roasters, setRoasters] = useState([]);

  useEffect(() => {
    const getRoasters = async () => {
      try {
        const response = await axios.get(`${SERVER_URL}/beans`);
        const uniqueRoasters = [...new Set(response.data.map((bean) => bean.roaster))]
          .sort((a, b) => a.localeCompare(b));
        setRoasters(uniqueRoasters);
      } catch (error) {
        console.log(error);
      }
    };
    getRoasters();
  }, []);

  return (
    <div className="mb-3">
      <select
        id="roasterSelect"
        className="form-select"
        value={roasteryToFilter}
        onChange={(e) => setRoasteryToFilter(e.target.value)}
      >
        <option value="">All roasters</option>
        {roasters.map((roaster) => (
          <option key={roaster} value={roaster}>{roaster}</option>
        ))}
      </select>
    </div>
  );
}

export default FilterByRoaster;
