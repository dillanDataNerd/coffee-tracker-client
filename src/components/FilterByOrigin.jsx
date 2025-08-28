function FilterByOrigin({ originToFilter, setOriginToFilter }) {
  return (
    <div className="input-group">
      <select
        className="form-select"
        id="beanIdInput"
        value={originToFilter}
        onChange={(e) => setOriginToFilter(e.target.value)}
      >
        <option value="">All countries</option>
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
  );
}
export default FilterByOrigin;
