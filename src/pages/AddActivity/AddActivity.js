import React from 'react'
import { Formik, Form, FieldArray, ErrorMessage, Field } from 'formik'
import * as Yup from 'yup'
import Select from '../../components/SearchBar/Select';
//import Input from './Input';

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCountries } from "../../store/countries";
import { selectCountryNames } from "../../store/countries";

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
  season: 'Spring',
  countries: ['Afghanistan']
}

const handleSubmit = (values) => {
  console.log('Form data', values)
}

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  difficulty: Yup.number().required('Required').min(1).max(5),
  duration: Yup.number().required('Required').positive().integer(),
})

function TextError (props) {
  return <div className='error'>{props.children}</div>
}

function AddActivity() {

  const dispatch = useDispatch();
  const countryNames = useSelector(selectCountryNames);

  useEffect(() => {
    dispatch(loadCountries({
      name: null,
      activity: null,
      continent: null,
      order: null,
      page: 1,
      limit: 250
    }))
  }, []);

  return (
    
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {formik =>{
          return (
            <Form>
              <div>
                <label htmlFor='name'>Name</label>
                <Field type='text' id='name' name='name' />
                <ErrorMessage name='name' component={TextError} />
              </div>

              <div>
                <Select
                  label='Difficulty'
                  name='difficulty'
                  options={difficultyOptions}
                />
              </div>

              <div>
                <label htmlFor='duration'>Duration</label>
                <Field type='text' id='duration' name='duration' />
                <ErrorMessage name='duration' component={TextError} />
              </div>

              <div>
                <Select
                  label='Season'
                  name='season'
                  options={seasonOptions}
                />
              </div>

              <div>
                <label>Countries</label>
                <FieldArray name='countries'>
                  {
                    fieldArrayProps => {
                      const { push, remove, form } = fieldArrayProps;
                      const { values } = form;
                      const { countries } = values;
                      // console.log('fieldArrayProps', fieldArrayProps)
                      // console.log('Form errors', form.errors)
                      return (
                        <div>
                          {countries.map((country, index) => (
                            <div>
                              <Select
                                name={`countries[${index}]`}
                                options={countryNames} // CHECK SELECTOR!!!!
                              />
                              {index > 0 && (<button type='button' onClick={() => remove(index)}> - </button>)}
                            </div>
                          ))}
                          <button type='button' onClick={() => push('')}> + </button>
                        </div>
                      )
                    }
                  }
                </FieldArray>
              </div>

              <button
                type='submit'
                disabled={!formik.isValid || formik.isSubmitting}
              >
                Submit
              </button>
            </Form>
          )
        }}

      </Formik>
    

  )
}

export default AddActivity
