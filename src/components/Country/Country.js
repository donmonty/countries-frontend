import React from 'react'
import styles from './Country.module.css'


function Country({ code, name, continent, flag }) {
  return (
    <div className={styles.container} >
      <div className={styles.flagContainer} >
        <img src={flag} className={styles.flag} alt="flag"/>
      </div>
      <div className={styles.countryInfo} >
        {/* <Link to={`/country/${code}`}></Link> */}
        <h3 className={styles.countryName} >{name}</h3>
        <p className={styles.continent} >{continent}</p>
      </div>
    </div>
  )
}

export default Country
