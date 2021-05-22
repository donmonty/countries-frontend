import React from 'react'
import check from "../../images/green-check.png"
import { Link } from 'react-router-dom';
import styles from "./PostSuccess.module.css"

function PostSuccess() {
  return (
    <React.Fragment>
      <header className={styles.header} ></header>
      <div className={styles.content} >
        <div className={styles.card} >
          <div  >
            <img className={styles.check} src={check}/>
          </div>
          <h2>Activity created successfully!</h2>
          <Link to={'/activities/add'}>
            <button className={styles.submitButton} >Add a new activity</button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  )
}

export default PostSuccess
