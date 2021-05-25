import React from 'react'
import styles from './Activity.module.css'


function Activity({ name, difficulty, duration, season }) {
  return (
    <div className={styles.container} >

      <h2 className={styles.title}>{name}</h2>

      <div className={styles.details}>
        <div className={styles.specText}>
          <h6 className={styles.specTextSmall}>DIFFICULTY</h6>
          <h2 className={styles.specTextBig}>{difficulty}</h2>
        </div>
        <div className={styles.specText}>
          <h6 className={styles.specTextSmall}>DURATION</h6>
          <h2 className={styles.specTextBig}>{duration}</h2>
        </div>
        <div className={styles.specText}>
          <h6 className={styles.specTextSmall}>SEASON</h6>
          <h2 className={styles.specTextBig}>{season}</h2>
        </div>
      </div>

    </div>
  )
}

export default Activity
