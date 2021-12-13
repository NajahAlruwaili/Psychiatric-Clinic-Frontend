import React  from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import Video from "./components/Video"
import Post from "./components/Post"
import { Route } from "react-router";
export default function App() {

  
  return (
    <div className="nav">
    
      <Navbar />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signUp" component={SignUp} />
      <Route exact path="/video" component={Video} />
      <Route exact path="/Post" component={Post} />


    
  
    </div>
  );
}
