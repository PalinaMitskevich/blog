import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import { useState } from "react";
import { signOut } from 'firebase/auth'
import { auth } from './firebase-config'

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));

  const signUserOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.clear();
        setIsAuth(false);
        window.location.pathname = '/login';
      });
  };

  return (
    <Router>
      <nav className='navigation'>
        <Link to='/'>Home</Link>

        {!isAuth ? (
          <Link to='/login'>Login</Link>
        ) : (
          <div>
            <Link to='/createpost'>Create Post</Link>
            <button onClick={signUserOut} className='log-out-button'>Log out</button>
          </div>
        )}
      </nav>
      <Routes>
        <Route path='/' element={<Home isAuth={isAuth}/>} />
        <Route path='/createpost' element={<CreatePost isAuth={isAuth}/>} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth}/>} />
      </Routes>
    </Router>
  );
}

export default App;