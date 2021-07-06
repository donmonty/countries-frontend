//import logo from './logo.svg';
import React from 'react'
import './App.css';

import { Route } from "react-router-dom";
import Home from './pages/Home/Home'
import Countries from './pages/Countries/Countries'
import CountryDetailPage from "./pages/CountryDetail/CountryDetail"
import AddActivity from "./pages/AddActivity/AddActivity"
import PostSuccess from "./pages/PostSuccess/PostSuccess"
import PostError from "./pages/PostError/PostError"

//const store = configureStore();

function App() {
  return (
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route exact path="/countries" component={Countries} />
      <Route path="/countries/:code" component={CountryDetailPage} />
      <Route path="/activities/add" component={AddActivity} />
      <Route path="/activities/success" component={PostSuccess} />
      <Route path="/activities/error" component={PostError} />
    </React.Fragment>
    
  );
}

export default App;
