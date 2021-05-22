import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import { createSelector } from "reselect";

const slice = createSlice({
  name: 'activities',
  initialState: {
    list: ['Pyramids', 'Stargazing', 'Rapids'],
    loading: false,
    activityCreated: false,
    activityPostError: false
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

    /////////////////////////////////////////////

    activityAddedRequested: (activities, action) => {
      activities.loading = true;
    },

    activityAdded: (activities, action) => {
      //activities.list.push(action.payload.name);
      activities.activityCreated = true;
    },

    activityAddedFailed: (activities, action) => {
      activities.activityCreated = false;
      activities.activityPostError = true;
    },

    activityAddedReset: (activities, action) => {
      activities.activityCreated = false;
    },

    activityPostErrorReset: (activities, action) => {
      activities.activityPostError = false;
    }
  }

});

// Export the mapped actions
export const {
  activitiesRequested,
  activitiesReceived,
  activitiesRequestFailed,
  activityAddedRequested,
  activityAdded,
  activityAddedFailed,
  activityAddedReset,
  activityPostErrorReset
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

export const createActivity = (data) => {
  return apiCallBegan({
    url,
    method: 'POST',
    data,
    onStart: activityAddedRequested.type,
    onSuccess: activityAdded.type,
    onError: activityAddedFailed.type
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

export const selectActivityCreatedStatus = createSelector(
  state => state.entities.activities,
  activities => activities.activityCreated
)

export const selectActivityPostError = createSelector(
  state => state.entities.activities,
  activities => activities.activityPostError
)