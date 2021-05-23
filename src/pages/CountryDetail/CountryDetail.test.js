import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Link, MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from "redux-mock-store";

import CountryDetail from '../../components/CountryDetail/CountryDetail'
import Activity from '../../components/Activity/Activity'
import CountryDetailPage from './CountryDetail'

configure({adapter: new Adapter()});

describe('<CountryDetailPage />', () => {
  let wrapper;
  let store;
  const state = {

    entities: {
      countries: {
        countryDetail: {
          "id": 43,
          "name": "Canada",
          "continent": "Americas",
          "code": "CAN",
          "capital": "Ottawa",
          "subregion": "Americas",
          "area": 9984670,
          "population": 36155487,
          "flag": "https://restcountries.eu/data/can.svg",
        },
        countryActivities: [
          {
            "id": 2,
            "name": "Ski",
            "difficulty": 5,
            "duration": 120,
            "season": "winter"
          }
        ] 

      }
    }
     
  }
  const mockStore = configureStore();
  store = mockStore(state);
  
  beforeEach(() => {
    wrapper = mount(<Provider store={store}>
                      <MemoryRouter initialEntries={[ '/' ]}>
                        <CountryDetailPage />
                      </MemoryRouter>
                    </Provider>)
  });

  it('should map the number of activities in the store and render an <Activity /> for each', () => {
    expect(wrapper.find(Activity)).toHaveLength(1);
  })

  it("should pass activity 'name' as props to <Activity /> component", () => {
    expect(wrapper.find(Activity).at(0).prop('name')).toBe("Ski");
  })

  it("should pass activity 'difficulty' as props to <Activity /> component", () => {
    expect(wrapper.find(Activity).at(0).prop('difficulty')).toBe(5);
  })

  it("should pass activity 'duration' as props to <Activity /> component", () => {
    expect(wrapper.find(Activity).at(0).prop('duration')).toBe(120);
  })

  it("should pass activity 'season' as props to <Activity /> component", () => {
    expect(wrapper.find(Activity).at(0).prop('season')).toBe("winter");
  })

  it("should render the <CountryDetail /> component", () => {
    expect(wrapper.find(CountryDetail)).toHaveLength(1);
  })

  it("should pass country 'name' as props to <CountryDetail /> component", () => {
    expect(wrapper.find(CountryDetail).at(0).prop('name')).toBe("Canada");
  })

  it("should pass country 'flag' as props to <CountryDetail /> component", () => {
    expect(wrapper.find(CountryDetail).at(0).prop('flag')).toBe("https://restcountries.eu/data/can.svg");
  })

  it("should pass country 'continent' as props to <CountryDetail /> component", () => {
    expect(wrapper.find(CountryDetail).at(0).prop('continent')).toBe("Americas");
  })

  it("should pass country 'code' as props to <CountryDetail /> component", () => {
    expect(wrapper.find(CountryDetail).at(0).prop('code')).toBe("CAN");
  })

  it("should pass country 'capital' as props to <CountryDetail /> component", () => {
    expect(wrapper.find(CountryDetail).at(0).prop('capital')).toBe("Ottawa");
  })

  it("should pass country 'subregion' as props to <CountryDetail /> component", () => {
    expect(wrapper.find(CountryDetail).at(0).prop('subregion')).toBe("Americas");
  })

  it("should pass country 'area' as props to <CountryDetail /> component", () => {
    expect(wrapper.find(CountryDetail).at(0).prop('area')).toBe(9984670);
  })

  it("should pass country 'population' as props to <CountryDetail /> component", () => {
    expect(wrapper.find(CountryDetail).at(0).prop('population')).toBe(36155487);
  })

});