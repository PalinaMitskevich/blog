import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import { signOut } from "firebase/auth"
import Home from "./pages/HomePage/Home"
import CreatePost from "./pages/CreatePostPage/CreatePost";
import Login from "./pages/LoginPage/Login";
import { auth } from "./firebase-config"
import { paths } from "./constants";
import "./App.css";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.clear();
        setIsAuth(false);
        window.location.pathname = paths.LOGIN;
      });
  };

  return (
    <Router>
      <nav className="navigation">
        <Link to={paths.HOME}>Home</Link>
        {!isAuth ? (
          <Link to={paths.LOGIN}>Login</Link>
        ) : (
          <>
            <Link to={paths.CREATE_POST}>Create Post</Link>
            <button onClick={signUserOut} className="log-out-button">Log out</button>
          </>
        )}
      </nav>
      <Routes>
        <Route path={paths.HOME} element={<Home isAuth={isAuth}/>} />
        <Route path={paths.CREATE_POST} element={<CreatePost isAuth={isAuth}/>} />
        <Route path={paths.LOGIN} element={<Login setIsAuth={setIsAuth}/>} />
      </Routes>
    </Router>
  );
}

export default App;
