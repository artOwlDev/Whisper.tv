
import React, { useEffect, useState, useRef } from 'react'
import "./listMovies.scss"
import ListItem from './ListItem'
import { ArrowBackIosNewOutlined, ArrowBackIosOutlinedIcon, ArrowForwardIosOutlined } from '@mui/icons-material';

const ListMovies = () => {

    const FEATURED = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e04f3c7713a6e4684e77e1e5c66c4908&page=1"
    const HIGH_VOTED = "http://api.themoviedb.org/3/discover/movie?sort_by=vote_count.desc&api_key=e04f3c7713a6e4684e77e1e5c66c4908&page=1"
    const ACTION_DRAMA = "https://api.themoviedb.org/3/discover/movie?api_key=e04f3c7713a6e4684e77e1e5c66c4908&with_genres=12"


    const [featured_movies, setFeaturedMovies] = useState([]);
    const [rated_movies, setRatedMovies] = useState([]);
    const [drama_movies, setDramaMovies] = useState([]);


    const newReleaseRef = useRef();
    const popularRef = useRef();
    const actionDramaRef = useRef();

    let countNew = 0;
    let countPop = 0;
    let countAction = 0;


    useEffect(() => {
        fetch(FEATURED)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setFeaturedMovies(data.results);
            });
    }, []);



    useEffect(() => {
        fetch(HIGH_VOTED)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setRatedMovies(data.results);
            });
    }, []);

    useEffect(() => {
        fetch(ACTION_DRAMA)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setDramaMovies(data.results);
            });
    }, []);



    let handleSlider = (direction, listRef) => {

        let distance;


        if (listRef === "new") {
            distance = newReleaseRef.current.getBoundingClientRect().x - 100;

            if (direction === "left" && countNew > 0) {
                newReleaseRef.current.style.transform = `translateX(${270 + distance}px)`
                newReleaseRef.current.style.transition = `all 0.5s ease`
                countNew--;
            }

            else if (direction === "right" && countNew < 13) {
                newReleaseRef.current.style.transform = `translateX(${-242 + distance}px)`
                newReleaseRef.current.style.transition = `all 0.5s ease`
                countNew++;


            }

        }

        else if (listRef === "popular") {

            distance = popularRef.current.getBoundingClientRect().x - 100;


            if (direction === "left" && countPop > 0) {
                popularRef.current.style.transform = `translateX(${270 + distance}px)`
                popularRef.current.style.transition = `all 0.5s ease`
                countPop--;
            }

            if (direction === "right" && countPop < 13) {
                popularRef.current.style.transform = `translateX(${-242 + distance}px)`
                popularRef.current.style.transition = `all 0.5s ease`
                countPop++;

            }

        }

        else if (listRef === "action") {

            distance = actionDramaRef.current.getBoundingClientRect().x - 100;


            if (direction === "left" && countAction > 0) {
                actionDramaRef.current.style.transform = `translateX(${270 + distance}px)`
                actionDramaRef.current.style.transition = `all .5s ease`
                countAction--;
            }

            if (direction === "right" && countAction < 13) {
                actionDramaRef.current.style.transform = `translateX(${-242 + distance}px)`
                actionDramaRef.current.style.transition = `all .5s ease`
                countAction++;

            }

        }
    }



    return (
        <div className='list'>


            <div className="wrapper">
                <div className="container">
                    <div className="new">

                        <h1>New Releases</h1>

                        <div className="list-items" ref={newReleaseRef}>
                            {featured_movies.length > 0 && featured_movies.map((movie) => {
                                return <ListItem id={movie.id} title={movie.title} poster_path={movie.poster_path} overview={movie.overview} vote_average={movie.vote_average} />
                            })}
                        </div>


                        <div className="sliders" >
                            <ArrowBackIosNewOutlined className='slider back' onClick={() => handleSlider("left", "new")} />
                            <ArrowForwardIosOutlined className='slider forward' onClick={() => handleSlider("right", "new")} />
                        </div>

                    </div>

                    <div className="indie">

                        <h1>Popular</h1>

                        <div className="list-items" ref={popularRef}>
                            {rated_movies.length > 0 && rated_movies.map((movie) => {
                                return <ListItem id={movie.id} title={movie.title} poster_path={movie.poster_path} overview={movie.overview} vote_average={movie.vote_average} />
                            })}
                        </div>

                        <div className="sliders">
                            <ArrowBackIosNewOutlined className='slider back' onClick={() => handleSlider("left", "popular")} />
                            <ArrowForwardIosOutlined className='slider forward' onClick={() => handleSlider("right", "popular")} />
                        </div>
                    </div>

                    <div className="action">
                        <h1>Action / Drama</h1>
                        <div className="list-items" ref={actionDramaRef}>
                            {drama_movies.length > 0 && drama_movies.map((movie) => {
                                return <ListItem id={movie.id} title={movie.title} poster_path={movie.poster_path} overview={movie.overview} vote_average={movie.vote_average} />
                            })}
                        </div>

                        <div className="sliders">
                            <ArrowBackIosNewOutlined className='slider back' onClick={() => handleSlider("left", "action")} />
                            <ArrowForwardIosOutlined className='slider forward' onClick={() => handleSlider("right", "action")} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ListMovies