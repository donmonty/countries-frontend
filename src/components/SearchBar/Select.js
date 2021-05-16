import React from 'react'
import { Field } from 'formik'
//import TextError from './TextError'

function Select (props) {
  const { label, name, options, ...rest } = props
  return (
    <div>
    {/* <div className='form-control'> */}
      <label htmlFor={name}>{label}</label>
      <Field as='select' id={name} name={name} {...rest}>
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