

import React, { useEffect, useState } from 'react'
import "./details.scss"
import Nav from '../components/Nav'
import { useParams } from 'react-router'
import ListItem from '../components/ListItem'


const Details = () => {


    const [itemDetails, setItemDetails] = useState([]);

    const movieID = useParams();

    const detailAPI = `https://api.themoviedb.org/3/movie/616037?api_key=e04f3c7713a6e4684e77e1e5c66c4908`

    useEffect(() => {
        fetch(detailAPI)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setItemDetails(data);
            });
    }, []);







    return (
        <div className='details'>
            <Nav />
            {itemDetails.length > 0 && itemDetails.map((movie) => {
                <p>hiiiiiiiiiiiiiiii</p>
            })}
        </div>
    )
}

export default Details