import React from 'react'
import styles from './CountryDetail.module.css'


function CountryDetail(props) {

  const formatNumber = (number, description) => {
    return Number(parseFloat(number).toFixed(2)).toLocaleString('en', { minimumFractionDigits: 0 }) + " " + description;
  }

  const km2 = formatNumber(props.area, "km2");
  const habitants = formatNumber(props.population, '');


  return (

    <div className={styles.container} >
      <section className={styles.countryContainer} >
        <div className={styles.flagContainer} >
          <img className={styles.flag} src={props.flag} alt="flag" />
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
            <h4 className={styles.title}>{km2}</h4>
          </div>

          <div className={styles.countrySpec} >
            <h6 className={styles.subtitle}>POPULATION</h6>
            <h4 className={styles.title}>{habitants}</h4>
          </div>
        </div>

      </section>
    </div>
  )
}

export default CountryDetail
