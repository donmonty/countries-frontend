import axios from "axios";
//import axiosMock from "../../__mocks__/axios";
import MockAdapter from "axios-mock-adapter";

// import actions
import { loadActivities, createActivity, activitiesReceived } from "../activities";
import configureStore from "../configureStore";

describe("activitiesSlice", () => {
  let fakeAxios;
  let store;

  beforeEach(() => {
    fakeAxios = new MockAdapter(axios, { onNoMatch: "throwException" });
    store = configureStore();
  });

  // Helper functions
  const activitiesSlice = () => store.getState().entities.activities;
  const createState = () => ({
    entities: {
      activities: {
        list: [],
        activityCreated: false,
        activityPostError: false
      }
    }
  });

  ////////////////////////////////////
  describe("Loading activities", () => {
    
    it("Activities shoud be fecthed from the server and put in the store", async () => {
      fakeAxios.onGet("/activity").reply(200, [{ id: 1, name: "soccer" }]);
      // axiosMock.get.mockResolvedValueOnce({ id: 1, name: "soccer" })
      // await store.dispatch(loadActivities());
      await store.dispatch(activitiesReceived([{ id: 1, name: "soccer" }]));
      expect(activitiesSlice().list).toHaveLength(1);
    });
  });



})
