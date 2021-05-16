import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Select from './Select';
import Input from './Input';
import styles from './Bar.module.css';

import { useDispatch, useSelector } from "react-redux";
import { loadCountries } from "../../store/countries";

function Bar () {

  const dispatch = useDispatch();
  //const countries = useSelector(countries => countries.list);
  const lastQuery = useSelector(countries => countries.lastQuery);

  const continentOptions = [
    { key: 'Select continent', value: null },
    // { key: 'Select an option', value: '' },
    { key: 'Americas', value: 'Americas' },
    { key: 'Europe', value: 'Europe' },
    { key: 'Asia', value: 'Asia' },
    { key: 'Africa', value: 'Africa' },
    { key: 'Oceania', value: 'Oceania' }
  ]

  const initialValues = {
    name: null,
    continent: null,
    
  }
  
  const onSubmit = values => {
    console.log('Form data', values)
    console.log('Saved data', JSON.parse(JSON.stringify(values)))
    dispatch(loadCountries({
      name: values.name,
      activity: values.activity,
      continent: values.continent,
      //order: sortOrder
    }))
  }

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => (
        <Form className={styles.container}>
          <Input
            label='Country name'
            name='name'
          />
          
          <Select
            label='Continent'
            name='continent'
            options={continentOptions}
          />
          
          
          <button className={styles.submitButton} type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  )
}

export default Bar