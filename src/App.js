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
import Home from "./components/Home";
import AboutUs from "./components/AboutUs"
import CallUs from './components/CallUs'
// import OntvangerMsg from "./components/OntvangerMsg"
import"./Style2.css"


export default function App() {

  const [token, setToken] = useState()
  const [admin, setAdmin] = useState(null)


  
  return (
    <div className="n">
      {/* <section className="nn" ></section> */}
      <Navbar token={token} setToken={setToken} admin={admin}/>
      <Route exact path="/Home" element={<Home/>} /> 
      {/* <Route exact path="/aboutUs" component={<AboutUs/>} />  */}
      <Route exact path="/AboutUs" render={()=>{return <AboutUs token={token}/>}}/>
      <Route exact path="/CallUs" render={()=>{return <CallUs token={token}/>}}/>


      <Route exact path="/login" render={()=>{return <Login setAdmin={setAdmin} setToken={setToken}/>}} />
      <Route exact path="/signUp" component={SignUp} />

      <Route exact path="/video" render={()=>{return <Video token={token} admin={admin}/>}}/>
      <Route exact path="/Post" render={()=>{return <Post token={token}/>}} /> 
      <Route exact path="/Consultants" render={()=>{return <Consultants token={token}/>}} /> 
      <Route exact path="/favorite" render={()=>{return <Favorite token={token}/>}} /> 
      <Route exact path="/Chat" render={()=>{return <Chat token={token} admin={admin}/>}} /> 
      {/* <Route exact path="/OntvangerMsg" render={()=>{return <OntvangerMsg token={token} />}} />  */}


{/* <h1 className="hh">hi here</h1> */}
  
    </div>
  );
}
