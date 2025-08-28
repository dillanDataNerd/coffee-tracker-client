function FilterByMethod({ methodToFilter, setMethodToFilter }) {

  return (
    <div className="input-group ">
      <select
        className="form-select"
        id="method"
        value={methodToFilter}
        onChange={(e) => setMethodToFilter(e.target.value)}
      >
        <option value={""}>All Methods</option>
        <option value={"espresso"}>Espresso</option>
        <option value={"flatwhite"}>Flat white</option>
        <option value={"moka"}>Moka</option>
        <option value={"aeropress"}>Aeropress</option>
        <option value={"frenchPress"}>French press</option>
        <option value={"pourOver"}>Pour over</option>
        <option value={"coldBrew"}>Cold Brew</option>
      </select>
    </div>
  );
}
export default FilterByMethod;
