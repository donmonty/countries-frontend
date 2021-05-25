import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.container} >
      <div className={styles.overlay} ></div>
      <div className={styles.section} >
        <h1 className={styles.title} >The Countries Project</h1>
        <p className={styles.subtitle} >The web's most useless, but highly didactic web app.</p>
        <Link to={'/countries'} className={styles.link} >
          <button className={styles.actionButton} >I understand the risks. Let me in!</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
