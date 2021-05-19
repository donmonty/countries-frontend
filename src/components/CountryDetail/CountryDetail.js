import React from 'react'
import styles from './CountryDetail.module.css'
// import { useParams } from "react-router-dom";

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// Import selectors
//import { getCountryByCode, selectCountryDetail } from "../../store/countries";


function CountryDetail(props) {

  // const dispatch = useDispatch();
  // const country = useSelector(selectCountryDetail);
  // const { code } = useParams();

  // useEffect(() => {
  //   dispatch(getCountryByCode(code));
  // }, [])

  // console.log("Country Detail:", country);


  return (

    <div className={styles.container} >
      <section className={styles.countryContainer} >
        <div className={styles.flagContainer} >
          <img className={styles.flag} src={props.flag} />
        </div>

        <div className={styles.countryInfo} >
          <h2 className={styles.countryName} >{props.name}</h2>

          <div className={styles.countrySpec} >
            <h6 className={styles.subtitle}>CONTINENT</h6>
            <h4 className={styles.title}>{props.continent}</h4>
          </div>

          <div className={styles.countrySpec} >
            <h6 className={styles.subtitle}>COUNTRY CODE</h6>
            <h4 className={styles.title}>{props.code}</h4>
          </div>

          <div className={styles.countrySpec} >
            <h6 className={styles.subtitle}>CAPITAL</h6>
            <h4 className={styles.title}>{props.capital}</h4>
          </div>

          <div className={styles.countrySpec} >
            <h6 className={styles.subtitle}>SUBREGION</h6>
            <h4 className={styles.title}>{props.subregion}</h4>
          </div>

          <div className={styles.countrySpec} >
            <h6 className={styles.subtitle}>AREA</h6>
            <h4 className={styles.title}>{props.area}</h4>
          </div>

          <div className={styles.countrySpec} >
            <h6 className={styles.subtitle}>POPULATION</h6>
            <h4 className={styles.title}>{props.population}</h4>
          </div>
        </div>

      </section>
    </div>
  )
}

export default CountryDetail
