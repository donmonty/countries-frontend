import React from 'react'
import Bar from '../../components/SearchBar/Bar';
import styles from './Countries.module.css';
import Country from '../../components/Country/Country'

function Countries() {
  return (
    <>
    <div className={styles.container} >
      <header>
        <Bar />
      </header>
      <section className={styles.countriesContainer} >
        <Country />
        <Country />
        <Country />
        <Country />
      </section>
    </div>
      
    </>
  )
}

export default Countries
