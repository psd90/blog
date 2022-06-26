import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import face from './images/face.png';
import gface from './images/glitch_face.png';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <Router className="wrapper">
      <nav>
        <a className="face" href="https://pdhillon.netlify.app/" target="_blank" without rel="noreferrer">
        <img className="face" src={face} alt="my face"/>
        <img className="face" src={gface} alt="my face"/> 
        </a>

        {!isAuth ? (
          <Link className="log" to="/login"></Link>
        ) : (
          <>
            <Link to="/createpost"> + </Link>
            <button class="logout" onClick={signUserOut}> Log Out</button>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
      <span>© {new Date().getFullYear()} Perminder</span>
    </Router>
  );
}

export default App;