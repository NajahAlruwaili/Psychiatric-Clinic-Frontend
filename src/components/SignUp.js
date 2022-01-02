import React, { useState } from "react";
import {useHistory} from "react-router-dom"
import axios from "axios";
import "./SignUp.css"


export default function SignUp() {

  const [UserName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [Pass, setPass] = useState("");
  const history = useHistory();



  const changeUserName= (e)=> {
    setUserName(e.target.value);
  };

  const changeEmail= (e)=> {
    setEmail(e.target.value);
  };

  const changePass= (e)=> {
    setPass(e.target.value);
  };


  const addUser = async () => {
  try {
    const response = await axios.post("http://localhost:5000/signUp", {
      UserName: UserName,
      Email: Email,
      Pass: Pass,
  });
  if (response.status === 200){
      history.push("/login")
  }
  } catch (error) {
    console.log("err");
  }
};


  
  return (

<div className="signUp">
  <div className="signBox">
    
    <div>
      <input id="input1" onChange={(e)=> {changeUserName(e) }} placeholder="enter your name"/>
    </div>

    <div>
      <input id="input1" onChange={(e)=> {changeEmail(e) }} placeholder="enter your Email"/>
    </div>

    <div>
      <input id="input1" onChange={(e)=> {changePass(e) }} type="password" placeholder="enter your password"/>
    </div>

    <div>
      <button id="button1" onClick={()=> {addUser() }}> <h2>sign up</h2> </button>
    </div>

  </div>
</div>

  );
}