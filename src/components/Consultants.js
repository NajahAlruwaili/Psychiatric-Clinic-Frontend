import React, { useState, useEffect } from 'react';
import axios from 'axios' ;
import { GrBasket } from "react-icons/gr";
import "./Consultant.css"



export default function Consultants() {

    const [consultant, setConsultant] = useState([]);
    const [name, setName] = useState("");
    const [specialty, setSpecialty] = useState("");
    const [aboutYou, setAboutYou] = useState("");
    const [img, setImg] = useState("");


    useEffect( async() => {
        const response= await axios.get ("http://localhost:5000/consultant");
        setConsultant(response.data);
    }, [])


    const addConsultant = async() =>{
        try {
            const result = await axios.post("http://localhost:5000/consultant",{
            Name: name,
            specialty:specialty,
            aboutYou:aboutYou,
            img:img,
        });
            // console.log(result);
            // رجع لي الداتا اللي اضفتها على انها اوبجكت وفيها جميع المعلومات والايدي الخاص
            const copied = [...consultant];
            copied.push(result.data);
            setConsultant(copied);
    
        } catch (error) {
            console.log("error");
        }
    }

    const delConsultant = async (id, index) => {
        try {
          const deletepost = await axios.delete(
            `http://localhost:5000/consultant/${id}`,
          );
        //   console.log(deletepost);
        // تبع المحذوفات  idرجع لي ال 
        // ورجع لي ان 2 ارري والطول تبعها انه 2

          const copied = [...consultant];
          copied.splice(index, 1);
          setConsultant(copied);
        } catch (err) {
          console.log("err");
        }
      };


    const changeName=(e)=>{
        setName(e.target.value);
    };
    const changeSpecialty=(e)=>{
        setSpecialty(e.target.value);
    };
    const changeAboutYou=(e)=>{
        setAboutYou(e.target.value);
    };
    const changeImg=(e)=>{
        setImg(e.target.value);
    };


    return (
        <>
            <div className='addingg'>
            <input className="inpC" onChange={(e)=> {changeName(e)}}placeholder="Your Full Name" />{""}
            <input className="inpC" onChange={(e)=> {changeSpecialty(e)}} placeholder="Specialty"/>
            <input className="inpC" onChange={(e)=> {changeAboutYou(e)}}placeholder="AboutYou" />
            <input className="inpC" onChange={(e)=> {changeImg(e)}} placeholder="Your Img"/>

            <button className="butC" onClick={()=> {addConsultant()}}>add</button>
            </div>
            <div className='container'>
            {consultant.map((element, i) => {
              
              return (
    
                <div className="elemDiv" key={element._id}>
                    <img src={element.img} alt="no Img" />
                    <p className="chaildC chaildC1"> {element.Name} </p>
                    <p className="chaildC chaildC1"> {element.specialty} </p>
                    <p className="chaildC chaildC3" > {element.aboutYou} </p>
                  
                  <GrBasket className="chaildC chaildC2" onClick={()=>{delConsultant(element._id, i)}}/>
                  {/* <button onClick={()=>{GoChating()}}>chating</button> */}

  
                </div>
              );
            })}
            </div>
            
        </>
    )
}
