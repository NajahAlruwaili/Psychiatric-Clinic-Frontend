import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import "./SignUp.css"


export default function Login({setAdmin, setToken }) {
  const [Email ,setEmail] = useState ("");
  const [Pass ,setPass] = useState ("");
  // const [admin, setAdmin] = useState(null)
  const history = useHistory();



  const changePass= (e)=> {
    setPass(e.target.value);
  };


  const changEmail= (e)=> {
    setEmail(e.target.value);
  };
  


  const checkLogin= async ()=> {
    try {
      const response= await axios.post("http://localhost:5000/login", {
        Email: Email,
        Pass: Pass,
      });
      console.log(response.data);
      setToken(response.data.token);
      setAdmin(response.data.payload.admin);

      // console.log(admin,"it adddddddmin");
      
      history.push("/video") ;
    } catch (error) {
    console.log(error);
    }
  };


  return (


    <div className="signUp">

      <input id="input2" onChange={(e)=> {changEmail(e)}} placeholder="enter your Email"/>

      <input id="input2" onChange={(e)=> {changePass(e)}} type="Password" placeholder="enter your Password"/>

      <button id="button2" onClick={()=> {checkLogin()}}><h2>Login</h2> </button>

    </div>

  );
}
