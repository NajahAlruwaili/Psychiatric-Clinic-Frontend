import React , {useState} from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Route } from "react-router";
export default function App() {
const [token,setToken]=useState("");
  
  return (
    <div className="nav">
    
      <Route exact path="/login" render={()=>{return <Login setToken={setToken}/>}} />
      <Route exact path="/signUp" component={SignUp} /> 
    

      
  
    </div>
  );
}
