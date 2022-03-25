import React from 'react';
import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth"
import { auth } from "../../firebase-config"
import { paths } from "../../constants";
import "./logoutButton.css"

const LogoutButton = ({ setIsAuth }) => {
  const navigate = useNavigate()

  const signUserOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.clear();
        setIsAuth(false);
        navigate(paths.LOGIN);
      });
  }

  return (
    <button className="log-out-button" onClick={signUserOut}>
      Log out
    </button>
  );
};

export default LogoutButton;