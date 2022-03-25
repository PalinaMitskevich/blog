import React from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "../../firebase-config"
import { paths } from "../../constants";
import "./login.css"

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate()

  const singInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        localStorage.setItem("isAuth", true)
        setIsAuth(true)
        navigate(paths.HOME)
      })
  }

  return (
    <div className="login-page">
      <p>Sign In With Google to Continue</p>
      <button className="login-with-google-btn" onClick={singInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default Login;