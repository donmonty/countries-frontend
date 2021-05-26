import React from 'react'
import serverError from "../../images/server-error.jpg"
import { Link } from 'react-router-dom';
import NavBar from "../../components/NavBar/NavBar"
import styles from "./PostError.module.css"

function PostError() {
  return (
    <React.Fragment>
      <NavBar />
      <div className={styles.content} >
        <div className={styles.card} >
          <div  >
            <img className={styles.server} src={serverError} alt="check"/>
          </div>
          <h2>Something went wrong!</h2>
          <Link to={'/activities/add'}>
            <button className={styles.submitButton} >Go back</button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  )
}

export default PostError
