import React  from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import Video from "./components/Video"
import Post from "./components/Post"
import Consultants from "./components/Consultants"
import Favorite from "./components/Favorite"
import { Route } from "react-router";
import"./Style.css"
export default function App() {

  
  return (
    <div className="n">
    
      <Navbar />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signUp" component={SignUp} />
      <Route exact path="/video" component={Video} />
      <Route exact path="/Post" component={Post} />
      <Route exact path="/Consultants" component={Consultants} />
      <Route exact path="/favorite" component={Favorite} />



  
    </div>
  );
}
