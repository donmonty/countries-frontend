import React from 'react'
import styles from './Activity.module.css'
import spring from '../../images/spring.png'
import summer from '../../images/summer.png'
import autumn from '../../images/autumn.png'
import winter from '../../images/winter.png'

function Activity({ name, difficulty, duration, season }) {
  return (
    <div className={styles.container} >

      <h2 className={styles.title}>{name}</h2>

      <div className={styles.details}>
        <div className={styles.specText}>
          <h6>DIFFICULTY</h6>
          <h2>{difficulty}</h2>
        </div>
        <div className={styles.specText}>
          <h6>DURATION</h6>
          <h2>{duration}</h2>
        </div>
        <div className={styles.specImage}>
          <h6>SEASON</h6>
          <img src={winter} />
        </div>
      </div>

    </div>
  )
}

export default Activity
