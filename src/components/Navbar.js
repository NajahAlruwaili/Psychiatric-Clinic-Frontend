import React from 'react'
import { Link } from "react-router-dom";


export default function Navbar() {


    return (
      <div className="nav">
        <h1>Happiness Life</h1>
        <ul>
          <li>
            <Link className="link" to="/signUp">SignUp</Link>
          </li>
          <li>
            <Link className="link" to="/login">Login</Link>
          </li> 
          <li>
            <Link className="link" to="/Video">Video</Link>
          </li>
          <li>
            <Link className="link" to="/post">Post</Link>
          </li>
          <li>
            <Link className="link" to="/Consultants">Consultants</Link>
          </li>
          <li>
            <Link className="link" to="/favorite">favorite</Link>
          </li>
          
          
        </ul>
      </div>
    );
}