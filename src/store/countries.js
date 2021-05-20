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
      continent: null,
      activity: null,
      order: null
    },
    loading: false,
    lastFetch: null,
    countryDetail: {},
    countryActivities: [],
    countryNames: [],
    ////////////////////////
    prevPage: null,
    nextPage: 2,
    currentPage: 1,
    pages: null,
    limit: 10,
    searchParams: {
      name: null,
      continent: null,
      activity: null,
      order: null
    }
  },
  reducers: {

    countriesRequested: (countries, action) => {
      countries.loading = true;
    },

    countriesReceived: (countries, action) => {
      countries.list = action.payload.results.rows;
      countries.loading = false;
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
    searchQuerySet: (countries, action) => {
      countries.searchParams = action.payload;
    },

    paginationInfoSet: (countries, action) => {
      console.log("////////////////////////////////")
      console.log("Inside the pagination reducer!")
      console.log("Payload: ", action.payload)

      countries.prevPage = action.payload.prevPage;
      countries.nextPage = action.payload.nextPage;
      countries.currentPage = action.payload.currentPage;
      countries.pages = action.payload.pages;
      countries.limit = action.payload.limit;
    } 
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
  detialRequestFailed,
  ///////////////////
  searchQuerySet,
  paginationInfoSet
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

export const loadCountriesSearch = (params) => {
  return apiCallBegan({
    url,
    method: 'GET',
    params,
    onStart: countriesRequested.type,
    onSuccess: countriesReceived.type,
    onError: countriesRequestFailed.type,
    source: 'search'
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

export const selectSearchParams = createSelector(
  state => state.entities.countries,
  countries => countries.searchParams
)

export const selectPrevPage = createSelector(
  state => state.entities.countries,
  countries => countries.prevPage
)

export const selectNextPage = createSelector(
  state => state.entities.countries,
  countries => countries.nextPage
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






