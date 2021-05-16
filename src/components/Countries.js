import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCountries } from "../store/countries";

function Countries() {
  const dispatch = useDispatch();
  const countries = useSelector(countries => countries.list);

  const lastQuery = useSelector(countries => countries.lastQuery);

  const [country, setCountry] = useState(lastQuery.name);
  const [activity, setActivity] = useState(lastQuery.activity);
  const [continent, setContinent] = useState(lastQuery.continent);
  const [sortOrder, setSortOrder] = useState(lastQuery.order)


  useEffect(() => {
    dispatch(loadCountries({
      name: country,
      activity,
      continent,
      order: sortOrder
    }))
  }, [country, activity, continent, sortOrder]);

  // const queryParams = {
  //   continent: 'Americas',
  //   activity: 'Ski'
  // }

  // useEffect(() => {
  //   dispatch(loadCountries(queryParams));
  // }, []);

  return (
    <div>
      This is the Countries component!
      {/* {
        countries.results.rows ? 
        (<div>Here go the country cards!</div>)
        : (<div>No countries to show!</div>)
      } */}
      <button onClick={prev => setActivity('Soccer')}> Americas </button>
    </div>
  )
}

export default Countries
