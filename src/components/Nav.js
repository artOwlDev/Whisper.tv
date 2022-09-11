import { KeyboardArrowDown, Search, Settings } from '@mui/icons-material'
import React, { useState, useEffect } from 'react'
import "./nav.scss"
import luci from "../img/Luci.jpg"

const Nav = () => {





    const [dropDownIsClicked, setDropDownIsClicked] = useState(false);


    const handleDropDownButton = () => {
        if (!dropDownIsClicked) {
            setDropDownIsClicked(true);
        }
        else {
            setDropDownIsClicked(false);
        }
    }







    return (
        <div className='container'>
            <div className="navbar">
                <div className="left-side">
                    <a href="/home"><h1>Whisper</h1></a>
                    <a href="/movies"><span className='links'><span>1.</span>Movies</span></a>
                    <a href='/tv-shows'><span className='links'><span>2.</span>TV Shows</span></a>
                    <span className='links'><span>3.</span>Lists</span>
                    <span className='links'><span>4.</span>Reviews</span>
                </div>

                <div className="right-side">

                    <a href="/search"><Search className='icon' /></a>
                    <h1>ArtuniPuni</h1>
                    <img src={luci} alt="profile picture" />
                    <KeyboardArrowDown className='icon' onClick={() => handleDropDownButton(true)} />



                </div>
            </div>
            <hr />

            {dropDownIsClicked && <div className="dropdown">
                <span>Signed in as:</span>
                <p>ArtuniPuni</p>

                <hr />
                <span className='span-element'>Your profile</span>
                <span className='span-element'>Your reviews</span>
                <span className='span-element'>Want to play</span>
                <hr />
                <span className='span-element'>Settings</span>
                <span className='span-element'>Sign out</span>
            </div>}


        </div>
    )
}

export default Nav