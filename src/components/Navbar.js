import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {


    return (
      <>
        <ul>
          <li>
            <Link className="link" to="/login">login</Link>
          </li>
          <li>
            <Link className="link" to="/signUp">signUp</Link>
          </li> 
          <li>
            <Link className="link" to="/Video">Video</Link>
          </li>
          <li>
            <Link className="link" to="/post">post</Link>
          </li>
        </ul>
      </>
    );
}