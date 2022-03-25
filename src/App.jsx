import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Home from "./pages/HomePage"
import CreatePost from "./pages/CreatePostPage";
import Login from "./pages/LoginPage";
import LogoutButton from './components/LogoutButton'
import { paths } from "./constants";
import "./App.css";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <Router>
      <nav className="navigation">
        <Link to={paths.HOME}>Home</Link>
        {!isAuth ? (
          <Link to={paths.LOGIN}>Login</Link>
        ) : (
          <>
            <Link to={paths.CREATE_POST}>Create Post</Link>
            <LogoutButton setIsAuth={setIsAuth} />
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
