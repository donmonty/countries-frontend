import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import { createSelector } from "reselect";

const slice = createSlice({
  name: 'activities',
  initialState: {
    list: ['Pyramids', 'Stargazing', 'Rapids'],
    loading: false
  },
  reducers: {

    activitiesRequested: (activities, action) => {
      activities.loading = true
    },

    activitiesReceived: (activities, action) => {
      activities.list = action.payload;
      activities.loading = false;
    },

    activitiesRequestFailed: (activities, action) => {
      activities.loading = false;
    },
  }

});

// Export the mapped actions
export const {
  activitiesRequested,
  activitiesReceived,
  activitiesRequestFailed
} = slice.actions;

// Export the reducer
export default slice.reducer;

/////// Action Creators /////////////
//===============================================
const url = "/activity";

export const loadActivities = () => {
  return apiCallBegan({
    url,
    method: 'GET',
    onStart: activitiesRequested.type,
    onSuccess: activitiesReceived.type,
    onError: activitiesRequestFailed.type
  })
}

/////// Selectors /////////////
//===============================================
export const getActivities = createSelector(
  state => state.entities.activities,
  (activities) => activities.list.map(activity => {
    return { key: activity.name, value: activity.name }
  })
);