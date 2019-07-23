import React, { useState } from 'react';
import './App.css';
import Nav from './Components/Nav';
import MovieCards from './Components/MovieCards';
import { Route, Switch } from 'react-router-dom';
import Favorites from './Components/Favorites';


function App() {

  let [favorites, setFavorites] = useState([]);

  const addFav = (movie) => {
    console.log('favorite function triggered, movie: ', movie);
    setFavorites([...favorites, movie]);
  }

  const removeFav = (movie) => {
    console.log('remove favorites triggered, movie: ', movie);
    const removed = favorites.filter(fav => movie !== fav);
    console.log('removed', removed);
    setFavorites(removed);
  }

  return (
    <div className="app">
      <Nav />
      <Route path="/favorites" render={(props) => <Favorites {...props} favorites={favorites} addFav={addFav} removeFav={removeFav} />} />
      <div className="movies">
        <Route exact path="/" render={props => <MovieCards {...props} addFav={addFav} />} />
      </div>
    </div>
  );
}

export default App;
