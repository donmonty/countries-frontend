import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
//import reducer from './countries';
import reducer from './reducer';
import api from './middleware/api';
import paginatedNav from './middleware/paginatedNav';

export default function configStore () {
  return configureStore({
    reducer,
    middleware: [ ...getDefaultMiddleware(), api, paginatedNav ]
  })
  
};