//import logo from './logo.svg';
import React from 'react'
import './App.css';

import configureStore from "./store/configureStore";
//import { Provider } from "react-redux";
//import { BrowserRouter } from 'react-router-dom';
//import Countries from './components/Countries';
//import Bar from './components/SearchBar/Bar'
import { Route } from "react-router-dom";
import Home from './pages/Home/Home'
import Countries from './pages/Countries/Countries'
import CountryDetailPage from "./pages/CountryDetail/CountryDetail"
import AddActivity from "./pages/AddActivity/AddActivity"
import PostSuccess from "./pages/PostSuccess/PostSuccess"

//const store = configureStore();

function App() {
  return (
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route path="/countries" component={Countries} />
      <Route path="/countries/:code" component={CountryDetailPage} />
      <Route path="/activities/add" component={AddActivity} />
      <Route path="/activities/success" component={PostSuccess} />
    </React.Fragment>
    
  );
}

export default App;
