import React from 'react'
import styles from "./NavBar.module.css"
import world from "../../images/world.png"
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className={styles.container} >
      <nav className={styles.nav} >
        <Link to={'/countries'}>
          <img src={world} className={styles.logo} />
        </Link>
      </nav>
    </div>
  )
}

export default NavBar
