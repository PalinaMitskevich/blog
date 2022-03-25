import React from 'react';
import { auth, provider } from '../firebase-config'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from "react-router-dom";
import './Login.css'

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate()

  const singInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem("isAuth", true)
        setIsAuth(true)
        navigate('/')
      })
  }

  return (
    <div className='login-page'>
      <p>Sign In With Google to Continue</p>
      <button className='login-with-google-btn' onClick={singInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default Login;