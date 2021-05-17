import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Select from './Select';
import Input from './Input';
import styles from './Bar.module.css';

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCountries } from "../../store/countries";
import { loadActivities, getActivities } from "../../store/activities";

function Bar () {

  // Fecth activities from the API on load
  useEffect(() => {
    dispatch(loadActivities())
  }, []);

  const dispatch = useDispatch();
  //const lastQuery = useSelector(countries => countries.lastQuery);
  const activities = useSelector(getActivities);

  const continentOptions = [
    { key: 'All continents', value: null },
    { key: 'Americas', value: 'Americas' },
    { key: 'Europe', value: 'Europe' },
    { key: 'Asia', value: 'Asia' },
    { key: 'Africa', value: 'Africa' },
    { key: 'Oceania', value: 'Oceania' }
  ];

  const sortOptions = [
    { key: 'Name ASC', value: 'alphaUp' },
    { key: 'Name DESC', value: 'alphaDown' },
    { key: 'Most populated', value: 'popUp' },
    { key: 'Least populated', value: 'popDown' }
  ];

  const initialValues = {
    name: null,
    continent: null,
    activity: null
  }
  
  const onSubmit = values => {
    console.log('Form data', values)
    //console.log('Saved data', JSON.parse(JSON.stringify(values)))
    dispatch(loadCountries({
      name: values.name,
      activity: values.activity,
      continent: values.continent,
      order: values.order
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

          <Select
            label='Activity'
            name='activity'
            options={activities}
            // defaultValue={{ key: "All activities", value: null }}
          />

          <Select
            label='Sort by'
            name='order'
            options={sortOptions}
          />
          
          
          <button className={styles.submitButton} type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  )
}

export default Bar