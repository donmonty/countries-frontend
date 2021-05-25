import React from 'react'
import Bar from '../../components/SearchBar/Bar';
import styles from './Countries.module.css';
import Country from '../../components/Country/Country'
import { Link } from 'react-router-dom';

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCountriesSearch } from "../../store/countries";
import { getCountries } from "../../store/countries";
import { selectSearchParams } from "../../store/countries";
import { selectPrevPage } from "../../store/countries";
import { selectNextPage } from "../../store/countries";


function Countries() {

  const dispatch = useDispatch()
  
  // Selectors
  const countries = useSelector(getCountries);
  const latestSearchParams = useSelector(selectSearchParams);
  const prevPage = useSelector(selectPrevPage);
  const nextPage = useSelector(selectNextPage);
  //const currentPage = useSelector(state => state.entities.countries.currentPage);

  //console.log("COUNTRIES", countries)
  
  // This page should load all the countries via loadCountries(), instead
  // of delegating this task to the Bar Component. The search bar only updates the
  // store state with a different set of countries via loadCountries()
  // when the SEARCH button is pressed

  useEffect(() => {
    dispatch(loadCountriesSearch(latestSearchParams))
  }, []);

  // useEffect(() => {
  //   dispatch(loadCountries({
  //     name: null,
  //     activity: null,
  //     continent: null,
  //     order: null
  //   }))
  // }, []);

  
  return (
    <>
    <div className={styles.container} >
      <header className={styles.header} >
        <nav className={styles.navbar} >
          <ul className={styles.navItems} >
            <Link className={styles.link} to={'/'}><li className={styles.navLink}><a>Home</a></li></Link>
            <Link className={styles.link} to={'/activities/add'}><li className={styles.navLink}>Add Activity</li></Link>
          </ul>
        </nav>
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

      <section className={styles.resultsNav} >
        {prevPage && <button className={styles.resultsButton} onClick={() => dispatch(loadCountriesSearch({...latestSearchParams, page: prevPage, limit: 10 }))} >Previous</button>}
        {nextPage && <button className={styles.resultsButton} onClick={() => dispatch(loadCountriesSearch({...latestSearchParams, page: nextPage, limit: 10 }))} >Next</button>}  
      </section>
    </div>
      
    </>
  )
}

export default Countries
