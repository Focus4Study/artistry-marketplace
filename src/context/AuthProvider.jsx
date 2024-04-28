import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";



export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const githubAuthProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);
    const [loading, setLoading]=useState(true)


    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserInfo = (name, image)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: image,
          })
    }

    const signIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut =()=>{
        setLoading(true)
        return signOut(auth);
    }

    const signInWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleAuthProvider)
    }
    const signInWithGithub = ()=>{
        setLoading(true)
        return signInWithPopup(auth, githubAuthProvider)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
          console.log('current user', currentUser);  
          setUser(currentUser)
          setLoading(false)
        })
        return()=>{unSubscribe()}
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        signInWithGoogle,
        signInWithGithub,
        updateUserInfo
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.object
};

export default AuthProvider;