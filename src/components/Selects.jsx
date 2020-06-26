import React from "react";

const Selects = (props) => {

  const {
    handleSelectChange,
    selectInfoFrom,
    selectInfoTo,
    handleSearch,
  } = props;
  return (
    <div className="destinations" >

      <select onChange={(e) => handleSelectChange(e, "from")} value={selectInfoFrom}>
      <option>Select Origin</option>
        <option value="TXL">Berlin</option>
        <option value="PED">Pardubice</option>
        <option value="PRG">Prague</option>
        <option value="WAW">Warsaw</option>
      </select>
      <br/>

      <select onChange={(e) => handleSelectChange(e, "to")} value={selectInfoTo}>
      <option>Select Destination</option>
        <option value="ATH">Athens</option>
        <option value="BCN">Barcelona</option>
        <option value="MAD">Madrid</option>
        <option value="MXP">Milano</option>
        <option value="VLC">Valencia</option>
      </select>
      <br/><br/>

      <label on>
        <input type="checkbox" value="direct_flights"></input>
        Direct flights only
      </label>
      <br/>

      <button onClick={handleSearch}>Search</button>
    </div>

    
  );
};

export default Selects;