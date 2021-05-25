import React from 'react'
import { Formik, Form, FieldArray, ErrorMessage, Field } from 'formik'
import * as Yup from 'yup'
import Select from '../../components/SearchBar/Select';
import NavBar from "../../components/NavBar/NavBar"
import { Redirect } from "react-router-dom";
import styles from './AddActivity.module.css'

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Country actions and selector
import { loadCountries } from "../../store/countries";
import { selectCountryNames } from "../../store/countries";

// Activity actions and selectors
import { createActivity } from "../../store/activities";
//import { activityAdded } from "../../store/activities";
import { activityAddedReset } from "../../store/activities";
import { activityPostErrorReset } from "../../store/activities";
import { selectActivityCreatedStatus } from "../../store/activities";
//import { selectActivityPostError } from "../../store/activities";


///////////////////////////////////////////

const difficultyOptions = [
  { key: '1', value: 1 },
  { key: '2', value: 2 },
  { key: '3', value: 3 },
  { key: '4', value: 4 },
  { key: '5', value: 5 },
];

const seasonOptions = [
  { key: 'Spring', value: 'spring' },
  { key: 'Summer', value: 'summer' },
  { key: 'Autumn', value: 'autumn' },
  { key: 'Winter', value: 'winter' }
];

const initialValues = {
  name: '',
  difficulty: '1',
  duration: '',
  season: 'spring',
  countries: ['Afghanistan']
}


const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  difficulty: Yup.number().required('Required').min(1).max(5),
  duration: Yup.number().required('Required').positive().integer(),
})

function TextError (props) {
  return <div className={styles.error} >{props.children}</div>
}

////////////////////////////////
////////////////////////////////
////////////////////////////////

function AddActivity() {

  const dispatch = useDispatch();
  const countryNames = useSelector(selectCountryNames);
  const activityCreatedStatus = useSelector(selectActivityCreatedStatus);
  //const activityApiErrorStatus = useSelector(selectActivityPostError);

  const handleSubmit = (values) => {
    console.log('Form data', values)
    // Dispatch the action to make the API call
    dispatch(createActivity(values));
    //dispatch(activityAdded());
  }

  useEffect(() => {
    dispatch(loadCountries({
      name: '',
      activity: '',
      continent: '',
      order: '',
      page: 1,
      limit: 250
    }));
    dispatch(activityAddedReset());
    dispatch(activityPostErrorReset());
  }, []);

  return (
    <div>
    {activityCreatedStatus ? <Redirect to="/activities/success" /> : null}  
    <NavBar />
    <div className={styles.content} >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {formik =>{
          return (
            <Form className={styles.cardForm} >
              <div className={styles.formTitle} >Add an Activity</div>

              <div className={styles.rowWrapper} >
                <div className={styles.row}>
                  <p className={styles.label} >Name</p>
                  <Field type='text' id='name' name='name'/>
                  <ErrorMessage name='name' component={TextError} />
                </div>
              </div>

              <div className={styles.rowWrapper} >
                <div className={styles.row}>
                  <p className={styles.label} >Difficulty</p>
                    <Select
                      className={styles.select}
                      label='Difficulty'
                      name='difficulty'
                      options={difficultyOptions}
                    />
                </div>
              </div>

              <div className={styles.rowWrapper} >
                <div className={styles.row}>
                  <p className={styles.label} >Duration</p>
                  <Field type='text' id='duration' name='duration'/>
                  <ErrorMessage name='duration' component={TextError} />
                </div>
              </div>

              <div className={styles.rowWrapper} >
                <div className={styles.row}>
                  <p className={styles.label} >Season</p>
                  <Select
                    className={styles.select}
                    label='Season'
                    name='season'
                    options={seasonOptions}
                  />
                </div>
              </div>

              <div>
                {/* <label>Countries</label> */}
                <FieldArray name='countries'>
                  {
                    fieldArrayProps => {
                      const { push, remove, form } = fieldArrayProps;
                      const { values } = form;
                      const { countries } = values;
                      // console.log('fieldArrayProps', fieldArrayProps)
                      // console.log('Form errors', form.errors)
                      return (
                        <div className={styles.row} >
                          <p className={styles.label} >Countries</p>
                          {countries.map((country, index) => (
                            <div classname={styles.country} >
                              <Select
                                name={`countries[${index}]`}
                                options={countryNames} // CHECK SELECTOR!!!!
                              />
                              
                              {index > 0 && (<button className={styles.actionButton} type='button' onClick={() => remove(index)}> - </button>)}
                              
                            
                            {/* <div className={styles.row}>
                              {index > 0 && (<button type='button' onClick={() => remove(index)}> - </button>)}
                            </div> */}
                            </div>
                            
                          ))}
                          <div className={styles.row}>
                            <button className={styles.actionButton} type='button' onClick={() => push('')}> + Add extra country </button>
                          </div>
                        </div>
                      )
                    }
                  }
                </FieldArray>
              </div>

              <div className={styles.rule} ></div>
              
              <div className={styles.row}>
                <button
                  type='submit'
                  className={styles.submitButton}
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  Save
                </button>
              </div>

            </Form>
          )
        }}

      </Formik>
    </div>
    </div>

  )
}

export default AddActivity
