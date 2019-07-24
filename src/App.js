import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import MovieCards from './Components/MovieCards';
import Results from './Components/Results';
import { Route, Switch } from 'react-router-dom';
import Favorites from './Components/Favorites';

import axios from 'axios';

function App(props) {

  let [favorites, setFavorites] = useState([]);
  const [searched, setSearched] = useState([])

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

  const search = (input) => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f24f2adccef9e40187e73a2223da546c&language=en-US&page=1&include_adult=false&query=${input}`)
      .then(res => {
        console.log('res.data', res.data)
        setSearched(res.data.results);
        props.history.push('/search-results');
      })
      .catch(err => console.error(err));
  }

  console.log('searched', searched);

  return (
    <div className="app">
      <Nav search={search} searchResults={searched} />
      <Route path="/favorites" render={(props) => <Favorites {...props} favorites={favorites} addFav={addFav} removeFav={removeFav} />} />
      <Route exact path="/" render={props => <MovieCards {...props} addFav={addFav} />} />
      <Route exact path="/search-results" render={props => <Results {...props} results={searched} addFav={addFav} />} />
    </div>
  );
}

export default withRouter(App);
