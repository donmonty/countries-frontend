import axios from "axios";
import * as actions from "../api";

const api = ({ dispatch, getState }) => next => async action => {
  if (action.type !== actions.apiCallBegan.type) return next(action);

  const { params, url, method, data, onStart, onSuccess, onError } = action.payload;

  // Check if submited search params equal the last search query stored in the Redux store
  // If they are different, we must make a new query to the database
  const latestQuery = getState().lastQuery;
  console.log("GET STATE", latestQuery)
  //const submitedQuery = {...lastQuery, ...params };
  if (latestQuery === params) return next(action);
  
  if (onStart) dispatch({ type: onStart });

  next(action);

  // NOTES:
  //=======================
  // We must use separate axios api calls for different purposes:
  // - Fetching countries
  // - Posting activities

  // CASE 1: FETCH COUNTRIES
  if (method === 'GET') {

    try {
      const response = await axios.get(
        "http://localhost:3003" + url,  
        {
          params: {
            name: params.name,
            continent: params.continent,
            activity: params.activity,
            order: params.order
          }
        }
      );
  
      // General
      dispatch(actions.apiCallSuccess(response.data));
      dispatch({ type: 'countries/countriesQueryReceived', payload: params });
      // Specific
      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      // General
      dispatch(actions.apiCallFailed(error.message));
      // Specific
      if (onError) dispatch({ type: onError, payload: error.message });
    }
  }
}

export default api;