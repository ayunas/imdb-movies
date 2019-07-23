import React from 'react'
import Button from '@material-ui/core/Button'
// import magnifyGlass from '../assets/magnifyGlass.png'

export default function Search() {
    return (
        <form>
            <input placeholder="Find a Movie" />
            <Button id='yellow-box'>search</Button>
            {/* <img src={magnifyGlass} alt="search">Search</img> */}
        </form>
    )
}
