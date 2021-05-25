import React from 'react'
import { Field } from 'formik'
import styles from './Input.module.css';
// import TextError from './TextError'

function Input (props) {
  const { label, name, ...rest } = props
  return (
    <div className={styles.container}>
      {/* <label htmlFor={name}>{label}</label> */}
      {/* <span className={styles.searchIcon} ></span> */}
      <Field 
        className={styles.field}
        placeholder='Enter country name'
        id={name}
        name={name}
        {...rest} 
      />
      {/* <ErrorMessage component={TextError} name={name} /> */}
    </div>
  )
}

export default Input