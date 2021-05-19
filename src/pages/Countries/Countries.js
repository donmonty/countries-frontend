import React from 'react'
import Bar from '../../components/SearchBar/Bar';
import styles from './Countries.module.css';
import Country from '../../components/Country/Country'
import { Link } from 'react-router-dom';

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCountries } from "../../store/countries";
import { getCountries } from "../../store/countries";

function Countries() {

  const dispatch = useDispatch()
  const countries = useSelector(getCountries);
  
  //console.log("COUNTRIES", countries)
  
  // This page should load all the countries via loadCountries(), instead
  // of delegating this task to the Bar Component. The search bar only updates the
  // store state with a different set of countries via loadCountries()
  // when the SEARCH button is pressed

  useEffect(() => {
    dispatch(loadCountries({
      name: null,
      activity: null,
      continent: null,
      order: null
    }))
  }, []);

  
  return (
    <>
    <div className={styles.container} >
      <header>
        <Bar />
      </header>
      <section className={styles.countriesContainer} >
        {console.log("Countries inside render", countries)}
        { (countries.length !== 0)  ?
          countries.map(country => {
            return (
              <Link to={`/countries/${country.code}`}>
                <Country
                  key={country.id}
                  id={country.code}
                  name={country.name}
                  continent={country.continent}
                  flag={country.flag}
                />
              </Link>
            )
          }) : (<h3>No results found!</h3>)
        }
      </section>
    </div>
      
    </>
  )
}

export default Countries
