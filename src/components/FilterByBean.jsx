import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function FilterByBean({ beanToFilter, setBeanToFilter }) {
  const [allBeans, setAllBeans] = useState([]);

  useEffect(() => {
    // get list of all bean options to populate beans filter dropdown
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
  }, []);

  return (
    <div className="input-group">
      <select
        className="form-select"
        id="beanIdInput"
        value={beanToFilter}
        onChange={(e) => setBeanToFilter(e.target.value)}
      >
        <option value="">
          All Beans
        </option>
        {allBeans.map((eachBean) => (
          <option key={eachBean.id} value={eachBean.id}>
            {`${eachBean.roaster} - ${eachBean.name}`}
          </option>
        ))}
      </select>
    </div>
  );
}
export default FilterByBean;
