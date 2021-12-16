import React from 'react'
import { Link,useHistory } from "react-router-dom";


export default function Navbar({ token, setToken }) {
  const history = useHistory();


    return (
      <div className="nav">

         <h1>Happiness Life</h1>

        {token ? (
        <ul> 
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
          <li>
            <Link className="link"  to="/login" onClick={()=>{setToken("");}}>
              log out </Link>
          </li>
          
          
        </ul>
        ):(
        <ul>
          <li>
            <Link className="link" to="/signUp">SignUp</Link>
          </li>
          <li>
            <Link className="link" to="/login">Login</Link>
          </li>
        </ul>
        ) }        
      </div>
    );
}