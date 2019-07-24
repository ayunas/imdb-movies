
import React from 'react'
import Search from './Search';
import imdb from '../assets/imdb_logo.png';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default function Nav(props) {
    return (
        <>
            <nav>
                <Link to='/'>
                    <img id="logo" src={imdb} alt='imdb' />
                </Link>
                <Search search={props.search} />
                <Link to="/favorites">
                    <button size="medium" id="favorites">Favorites</button>
                </Link>
            </nav>
        </>
    )
}
