

import React from 'react'
import "./signup.scss"
import Nav from "../components/Nav"
import { useRef } from 'react'

const Signup = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    return (

        <div className='signup'>
            <div className='nav'>
                <h1>Whisper.tv</h1>
            </div>

            <div className='sign-up'>
                <img src="https://img.helpnetsecurity.com/wp-content/uploads/2020/03/23143409/netflix-collection.jpg" alt="" />
                <div className="wrapper">
                    <div className="email">
                        <h1>Email</h1>
                        <input type="email" required ref={emailRef} />
                    </div>
                    <div className="password">
                        <h1>Password</h1>
                        <input type="password" required ref={passwordRef} />

                    </div>
                    <div className="password-confirmation">
                        <h1>Password confirmation</h1>
                        <input type="password" required ref={passwordConfirmRef} />

                    </div>
                    <div className="sign-up-button">
                        <button type='submit'>Sign Up</button>

                    </div>
                </div>
            </div>
        </div>


    )
}

export default Signup