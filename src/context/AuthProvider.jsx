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

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserInfo = (name, image)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: image,
          })
    }

    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut =()=>{
        return signOut(auth);
    }

    const signInWithGoogle = ()=>{
        return signInWithPopup(auth, googleAuthProvider)
    }
    const signInWithGithub = ()=>{
        return signInWithPopup(auth, githubAuthProvider)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
          console.log('current user', currentUser);  
          setUser(currentUser)
        })
        return()=>{unSubscribe()}
    },[])

    const authInfo = {
        user,
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