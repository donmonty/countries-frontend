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
    lastFetch: null
  },
  reducers: {

    countriesRequested: (countries, action) => {
      countries.loading = true;
    },

    countriesReceived: (countries, action) => {
      countries.list = action.payload;
      countries.loading = false;
      //countries.lastFetch = Date.now();
    },

    countriesRequestFailed: (countries, action) => {
      countries.loading = false;
    },

    countriesQueryReceived: (countries, action) => {
      countries.lastQuery = action.payload;
    }

  }
});

// Export the mapped actions
export const {
  countriesRequested,
  countriesReceived,
  countriesRequestFailed,
  countriesQueryReceived
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

///// SELECTORS //////
//===================================================
export const getCountries = createSelector(
  state => state.entities.countries,
  countries => countries.list.results.rows
);


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






