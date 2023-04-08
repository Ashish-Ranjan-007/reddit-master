import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  return (
    <nav>
       <Link to="/"> <div>Home </div></Link>
       <Link to="/posts"> <div>Feed </div></Link>
       <Link to="/login"> <div>Login </div></Link>
       <Link to="/register"> <div>Register </div></Link>
    </nav>
  )
}

export default Navbar

