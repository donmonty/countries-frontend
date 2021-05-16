import React from 'react'
import { Field } from 'formik'
import styles from './Select.module.css';
//import TextError from './TextError'

function Select (props) {
  const { label, name, options, ...rest } = props
  return (
    <div>
    {/* <div className='form-control'> */}
      {/* <label htmlFor={name}>{label}</label> */}
      <Field className={styles.field} as='select' id={name} name={name} {...rest}>
        {options.map(option => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          )
        })}
      </Field>
    </div>
  )
}

export default Select