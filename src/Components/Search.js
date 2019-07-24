import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import axios from 'axios';
// import magnifyGlass from '../assets/magnifyGlass.png'

export default function Search(props) {

    // const [searched, setSearched] = useState([])

    // const search = (input) => {
    //     axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f24f2adccef9e40187e73a2223da546c&language=en-US&page=1&include_adult=false&query=${input}`)
    //         .then(res => {
    //             console.log('res.data', res.data)
    //             setSearched(res.data.results);
    //         })
    //         .catch(err => console.error(err));
    // }

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            const query = e.target[0].value;
            e.target[0].value = '';
            props.search(query);
        }}>
            <input name='movie' placeholder="Find a Movie" />
            <button id='yellow-box'>Search</button>
            {/* <img src={magnifyGlass} alt="search">Search</img> */}
        </form>
    )
}
