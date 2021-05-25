import React from 'react'
import { Formik, Form } from 'formik'
//import * as Yup from 'yup'
import Select from './Select';
import Input from './Input';
import world from "../../images/world.png"
import styles from './Bar.module.css';

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCountriesSearch } from "../../store/countries";
import { loadActivities, getActivities } from "../../store/activities";

const continentOptions = [
  { key: 'All continents', value: "" },
  { key: 'Americas', value: 'Americas' },
  { key: 'Europe', value: 'Europe' },
  { key: 'Asia', value: 'Asia' },
  { key: 'Africa', value: 'Africa' },
  { key: 'Oceania', value: 'Oceania' }
];

const sortOptions = [
  { key: 'Name ASC', value: 'nameUp' },
  { key: 'Name DESC', value: 'nameDown' },
  { key: 'Most populated', value: 'popDown' },
  { key: 'Least populated', value: 'popUp' }
];

const initialValues = {
  name: "",
  continent: "",
  activity: ""
}


function Bar () {

  const dispatch = useDispatch();
  //const lastQuery = useSelector(countries => countries.lastQuery);
  const activities = useSelector(getActivities);

  const onSubmit = values => {
    console.log('Form data', values)
    //console.log('Saved data', JSON.parse(JSON.stringify(values)))
    dispatch(loadCountriesSearch({
      name: values.name,
      activity: values.activity,
      continent: values.continent,
      order: values.order,
      source: 'search'
    }))
  }

  // Fecth activities from the API on load
  useEffect(() => {
    dispatch(loadActivities())
  }, []);


  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => (
        <Form className={styles.container}>

          <img className={styles.logo} src={world} alt="logo" />

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
            defaultValue={{ key: "All activities", value: "" }}
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