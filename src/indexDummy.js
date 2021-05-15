import configureStore from './store/configureStore.js';

const store = configureStore();

import { loadCountries } from './store/countries';

store.dispatch(loadCountries({
  continent: 'Americas',
  activity: 'Ski'
}))