import React, { useState } from "react";
import {useHistory} from "react-router-dom"
import axios from "axios";

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


  // const addUser= async ()=> {

  //   const response= await axios.post("http://localhost:5000/signUp", {
  //     UserName: UserName,
  //     Email: Email,
  //     Pass: Pass,
  //   });

  //   if (response.status === 201){
  //       history.push("/login")
  //   }
  // };

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

      <input onChange={(e)=> {changeUserName(e) }} placeholder="enter your name"/>

      <input onChange={(e)=> {changeEmail(e) }} placeholder="enter your Email"/>

      <input onChange={(e)=> {changePass(e) }} type="password" placeholder="enter your password"/>

      <button onClick={()=> {addUser() }}> sign up</button>

    </div>

  );
}