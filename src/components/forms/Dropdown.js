import React, { useState } from 'react';

function Dropdown() {
  // Array of objects containing continent data
  let continents = [
    { label: "Americas", value: "Americas" },
    { label: "Europe", value: "Europe" },
    { label: "Oceania", value: "Oceania" },
    { label: "Africa", value: "Africa" },
    { label: "Asia", value: "Asia" },
]

// Using state to keep track of what the selected continent is
// let [continent, setContinent] = useState("Select a continent")

// Using this function to update the state of fruit
// whenever a new option is selected from the dropdown
// let handleContinentChange = (e) => {
//   setContinent(e.target.value)
// }

  return (
    <div>
      <select> 
      {/* <select onChange={handleContinentChange}>  */}
        <option value={null} > -- Select a continent -- </option>
              {/* Mapping through each fruit object in our continents array
            and returning an option element with the appropriate attributes / values.
          */}
        {continents.map((continent) => <option key={continent.label} value={continent.value}>{continent.label}</option>)}
      </select>
    </div>
  );
}

export default Dropdown;