

import React, { useEffect, useState } from 'react'
import ListItem from './ListItem';
import "./listTV.scss"


const ListTV = () => {

    const NEW = "https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=e04f3c7713a6e4684e77e1e5c66c4908&page=1";
    const POPULAR = "https://api.themoviedb.org/3/discover/tv?sort_by=vote_count.desc&api_key=e04f3c7713a6e4684e77e1e5c66c4908&page=1";

    const [newTV, setNewTV] = useState([]);
    const [popularTV, setPopularTV] = useState([]);



    useEffect(() => {
        fetch(NEW)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setNewTV(data.results);
            });
    }, []);

    useEffect(() => {
        fetch(POPULAR)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPopularTV(data.results);
            });
    }, []);

    return (
        <div class="list-tv">
            <div className="wrapper">
                <div className="container">
                    <div className="new">

                        <h1>New releases</h1>
                        <div className="list-items">
                            {newTV.length > 0 && newTV.map((tv) => {
                                return <ListItem id={tv.id} title={tv.name} poster_path={tv.poster_path} overview={tv.overview} vote_average={tv.vote_average} />
                            })}

                        </div>
                    </div>

                    <div className="popular">

                        <h1>Popular</h1>

                        <div className="list-items">
                            {popularTV.length > 0 && popularTV.map((tv) => {
                                return <ListItem id={tv.id} title={tv.name} poster_path={tv.poster_path} overview={tv.overview} vote_average={tv.vote_average} />
                            })}
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ListTV