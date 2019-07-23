import React, { useState } from 'react';
import './App.css';
import Nav from './Components/Nav';
import MovieCard from './Components/MovieCard';
import { Route, Switch } from 'react-router-dom';


function App() {

  return (
    <>
      <Route exact path="/" component={Nav} />
      <Route path="/movies" component={MovieCard} />
    </>
  );
}

export default App;
