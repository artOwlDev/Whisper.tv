import React, { useContext, useState, useEffect } from 'react'
import { auth } from "../firebase/Firebase"

const AuthContext = React.createContext();


export function useAuth() {
    return useContext(AuthContext)
}



export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState()

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    useEffect(() => {
        //changing main user to whichever user signed in
        const unsubcribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
        return unsubcribe
    }, [])

    const value = {
        currentUser,
        signup
    }

    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}
