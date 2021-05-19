import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
//import axios from "axios";
import { apiCallBegan } from "./api";
//import moment from "moment";

const slice = createSlice({
  name: 'countries',
  initialState: {
    list: [],
    lastQuery: {
      name: null,
      continent: 'Americas',
      activity: 'Ski',
      order: null
    },
    loading: false,
    lastFetch: null,
    countryDetail: {},
    countryActivities: [],
    countryNames: []
  },
  reducers: {

    countriesRequested: (countries, action) => {
      countries.loading = true;
    },

    countriesReceived: (countries, action) => {
      countries.list = action.payload.results.rows;
      countries.loading = false;
      //countries.lastFetch = Date.now();
    },

    countriesRequestFailed: (countries, action) => {
      countries.loading = false;
      countries.list = [];
    },

    countriesQueryReceived: (countries, action) => {
      countries.lastQuery = action.payload;
    },
    //////////////////////////////////////////////////

    detailRequested: (countries, action) => {
      countries.loading = true;
    },

    detailReceived: (countries, action) => {
      countries.countryDetail = action.payload.data;
      countries.countryActivities = action.payload.data.Activities;
      countries.loading = false;
    },

    detialRequestFailed: (countries, action) => {
      countries.loading = false;
      countries.countryDetail = [];
    },

    //////////////////////////////////////////////////

  }
});

// Export the mapped actions
export const {
  countriesRequested,
  countriesReceived,
  countriesRequestFailed,
  countriesQueryReceived,
  //////////////////////
  detailRequested,
  detailReceived,
  detialRequestFailed
} = slice.actions;

// Export the reducer
export default slice.reducer;

/////// Action Creators /////////////
//===============================================
const url = "/countries";

export const loadCountries = (params) => {
  return apiCallBegan({
    url,
    method: 'GET',
    params,
    onStart: countriesRequested.type,
    onSuccess: countriesReceived.type,
    onError: countriesRequestFailed.type
  })
}

export const getCountryByCode = (code) => {
  return apiCallBegan({
    url: url + '/' + code,
    method: 'GET',
    onStart: detailRequested.type,
    onSuccess: detailReceived.type,
    onError: detialRequestFailed.type
  })
}

///// SELECTORS //////
//===================================================
export const getCountries = createSelector(
  state => state.entities.countries,
  countries => countries.list
);

export const selectCountryDetail = createSelector(
  state => state.entities.countries,
  countries => countries.countryDetail
)

export const selectCountryActivities = createSelector(
  state => state.entities.countries,
  countries => countries.countryActivities
)

export const selectCountryNames = createSelector(
  state => state.entities.countries,
  countries => countries.list.map(country => {
    return { key: country.name, value: country.name }
  })
)


// export const loadCountries = (params) => (dispatch, getState) => {
//   //const { lastFetch } = getState().entities.countries;

//   return dispatch(
//     apiCallBegan({
//       url,
//       params,
//       onStart: countriesRequested.type,
//       onSuccess: countriesReceived.type,
//       onError: countriesRequestFailed.type
//     })
//   );
// }






