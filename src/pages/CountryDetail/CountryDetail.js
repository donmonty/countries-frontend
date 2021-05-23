import React from 'react'
import CountryDetail from '../../components/CountryDetail/CountryDetail'
import Activity from '../../components/Activity/Activity'
import NavBar from "../../components/NavBar/NavBar"

import styles from './CountryDetail.module.css'
import { useParams } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Import selectors
//import { getCountryByCode, selectCountryDetail } from "../../store/countries";
import { getCountryByCode, selectCountryDetail, selectCountryActivities } from "../../store/countries";

function CountryDetailPage() {

  const dispatch = useDispatch();
  const country = useSelector(selectCountryDetail);
  const activities = useSelector(selectCountryActivities);

  const { code } = useParams();
  //console.log("Code", code)

  useEffect(() => {
    dispatch(getCountryByCode(code));
  }, [])

  // console.log("Country Detail:", country);
  // console.log("Activities", activities)

  return (
    <React.Fragment>
    {/* <header className={styles.header} ></header>   */}
      <NavBar />
      <div className={styles.content} >
        <section >
          <CountryDetail
            flag={country.flag}
            name={country.name}
            continent={country.continent}
            code={country.code}
            capital={country.capital}
            subregion={country.subregion}
            area={country.area}
            population={country.population}
          />
        </section>
        <section className={styles.activities}>
          <h1 className={styles.title} >Country Activities</h1>
          {/* {
            (country.Activities.length !== 0) ?
              country.Activities.map(activity => {
                return (
                  <Activity
                    name={activity.name}
                    difficulty={activity.difficulty}
                    duration={activity.duration}
                    season={activity.season}
                  />
                )
              })
            : (<h2>This country has no activities.</h2>)
          } */}
          {
            (activities.length !== 0) ?
              activities.map(activity => {
                return (
                  <Activity
                    key={activity.id}
                    name={activity.name}
                    difficulty={activity.difficulty}
                    duration={activity.duration}
                    season={activity.season}
                  />
                )
              })
            : (<h2>This country has no activities.</h2>)
          }
        </section>
      </div>
    </React.Fragment>
  )
}

export default CountryDetailPage
