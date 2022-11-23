import React from 'react';
import { Link, Route,  Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import NoMatch from './pages/NoMatch';
import Registration from './pages/Registration/Registration';


const RouterNavigation = () => {
  return (
    <>
    <nav>
        <ul className="router-element">
            <li> <Link to="/home">Home</Link></li>
            <li> <Link to="/login">Connexion</Link> </li> 
            <li> <Link to="/register">Inscription</Link></li> 
        </ul>
    </nav>

    <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={< Login/>} />
          <Route path="register" element={< Registration/>} />
          <Route path="*" element={<NoMatch />} />
    </Routes>

    </>

  )
}

export default RouterNavigation ;