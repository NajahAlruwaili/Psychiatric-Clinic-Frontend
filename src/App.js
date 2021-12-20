import React ,{useState} from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import Video from "./components/Video"
import Post from "./components/Post"
import Consultants from "./components/Consultants"
import Favorite from "./components/Favorite"
import Chat from "./components/Chat";
import { Route } from "react-router";
import"./Style.css"
export default function App() {
  const [token, setToken] = useState()

  
  return (
    <div className="n">
      <Navbar token={token} setToken={setToken}/>
      <Route exact path="/login" render={()=>{return <Login setToken={setToken}/>}} />
      <Route exact path="/signUp" component={SignUp} />

      <Route exact path="/video" render={()=>{return <Video token={token}/>}}/>
      <Route exact path="/Post" render={()=>{return <Post token={token}/>}} /> 
      <Route exact path="/Consultants" render={()=>{return <Consultants token={token}/>}} /> 
      <Route exact path="/favorite" render={()=>{return <Favorite token={token}/>}} /> 
      <Route exact path="/Chat" render={()=>{return <Chat token={token}/>}} /> 


  
    </div>
  );
}
