import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCountries } from "../store/countries";

function Countries() {
  const dispatch = useDispatch();
  const countries = useSelector(countries => countries.list);

  const queryParams = {
    continent: 'Americas',
    activity: 'Ski'
  }

  useEffect(() => {
    dispatch(loadCountries(queryParams));
  }, []);

  return (
    <div>
      This is the Countries component!
      
    </div>
  )
}

export default Countries
