


import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import "./search.scss"
import ListItem from './ListItem'

const Search = () => {



    const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=e04f3c7713a6e4684e77e1e5c66c4908&query=";
    const FEATURED = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e04f3c7713a6e4684e77e1e5c66c4908&page=1"
    const NEW = "https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=e04f3c7713a6e4684e77e1e5c66c4908&page=1";



    const [searchTerm, setSearchTerm] = useState("");
    const [featured_movies, setFeaturedMovies] = useState([]);
    const [isSearched, setIsSearched] = useState(false);



    useEffect(() => {
        fetch(FEATURED)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setFeaturedMovies(data.results);
            });
    }, []);









    const handleOnSubmit = (e) => {
        e.preventDefault()

        fetch(SEARCH_API + searchTerm)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setFeaturedMovies(data.results);
            });

        setIsSearched(true);
    }

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value)
    }


    return (
        <div className="search-class">
            <Nav />
            <div className="welcome">
                <p>Search your favorite movies and tv shows...</p>

            </div>

            <div className="search-bar">
                <form onSubmit={handleOnSubmit}><input className='search' type="search" placeholder='Search...' onChange={handleOnChange} value={searchTerm} /></form>
            </div>


            <div className="results">
                {featured_movies.length > 0 && isSearched && featured_movies.map((movie) => {
                    return <ListItem id={movie.id} title={movie.title} poster_path={movie.poster_path} overview={movie.overview} vote_average={movie.vote_average} />
                })}
            </div>
        </div>
    )
}

export default Search