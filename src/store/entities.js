import { combineReducers } from "redux";
import countriesReducer from "./countries";
import activitiesReducer from "./activities";

export default combineReducers({
  countries: countriesReducer,
  activities: activitiesReducer,
});