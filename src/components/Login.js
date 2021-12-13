import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";

export default function Login() {

  const [Email ,setEmail] = useState ("");
  const [Pass ,setPass] = useState ("");

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
      history.push("/video") 
    } catch (error) {
      console.log(error.response.data);
    }
  };




  return (


    <div className="login">

      <input onChange={(e)=> {changEmail(e)}} placeholder="enter your Email"/>

      <input onChange={(e)=> {changePass(e)}} type="Password" placeholder="enter your Password"/>

      <button onClick={()=> {checkLogin()}}> Login </button>

    </div>

  );
}
