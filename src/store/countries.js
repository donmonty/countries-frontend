import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
//import axios from "axios";
import { apiCallBegan } from "./api";
//import moment from "moment";

const slice = createSlice({
  name: 'countries',
  initialState: {
    list: [],
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

  }
});

// Export the mapped actions
export const {
  countriesRequested,
  countriesReceived,
  countriesRequestFailed
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


///// SELECTORS //////
//===================================================



