import React from 'react'
import "./movies.scss"
import Nav from '../components/Nav'
import List from '../components/ListMovies'
import ListMovies from '../components/ListMovies'


const Movies = () => {



    return (
        <div className='movies'>
            <Nav />
            <ListMovies />
        </div>
    )
}

export default Movies