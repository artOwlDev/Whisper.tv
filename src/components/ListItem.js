
import { Add, Favorite } from '@mui/icons-material';
import React, { useState } from 'react'
import "./listitem.scss"
import notfound from "../img/notfound.jpg"
import { Link } from 'react-router-dom';


const ListItem = ({ id, title, poster_path, overview, vote_average }) => {

    const IMAGES = "https://image.tmdb.org/t/p/w1280"

    const [isHovered, setIsHovered] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    const handleIsLiked = () => {
        if (!isLiked) {
            setIsLiked(true)
        }
        else {
            setIsLiked(false)
        }
    }



    return (
        <div className='list-item' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <Link to={'/details/' + id}><img src={IMAGES + poster_path} onerror="this.src='../img/notfound.jpg';" /></Link>

            <div className="info">

                <div className="icon">
                    <Add onClick={() => handleIsLiked()} className={isLiked ? "heart liked" : "heart"} />
                </div>

                <div className="name">
                    <p>{title}</p>
                </div>

                <div className={vote_average < 7 ? "rating-red" : vote_average < 8 ? "rating-yellow" : vote_average >= 8 ? "rating-green" : null}>
                    <h1>{vote_average}</h1>

                </div>
            </div>


        </div>
    )
}

export default ListItem