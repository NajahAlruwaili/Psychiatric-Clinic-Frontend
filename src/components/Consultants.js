import React, { useState, useEffect } from 'react';
import axios from 'axios' ;
// import {useHistory} from "react-router-dom"
// import { GrBasket } from "react-icons/gr";
import "./Consultant.css"



export default function Consultants({token}) {

    const [consultant, setConsultant] = useState([]);
    // const [name, setName] = useState("");
    // const [specialty, setSpecialty] = useState("");
    // const [aboutYou, setAboutYou] = useState("");
    // const [img, setImg] = useState("");
    // const history = useHistory();


    useEffect( async() => {
        const response= await axios.get ("http://localhost:5000/consultant",{
          headers:{authorization:"Bearer " + token},
        });
        setConsultant(response.data);
    }, [])


    // const addConsultant = async() =>{
    //     try {
    //         const result = await axios.post("http://localhost:5000/consultant",{
    //         Name: name,
    //         specialty:specialty,
    //         aboutYou:aboutYou,
    //         img:img,
    //     },{
    //       headers:{authorization:"Bearer " + token},
    //     });
    //         // console.log(result);
    //         // رجع لي الداتا اللي اضفتها على انها اوبجكت وفيها جميع المعلومات والايدي الخاص
    //         const copied = [...consultant];
    //         copied.push(result.data);
    //         setConsultant(copied);
    
    //     } catch (error) {
    //         console.log("error");
    //     }
    // }

    // const delConsultant = async (id,i) => {
    //     try {
    //       const deletepost = await axios.delete(
    //         `http://localhost:5000/consultant/${id}`,{
    //           headers:{authorization:"Bearer " + token},
    //         });
    //     //   console.log(deletepost);
    //     // تبع المحذوفات  idرجع لي ال 
    //     // ورجع لي ان 2 ارري والطول تبعها انه 2
    //       const copied = [...consultant];
    //       copied.splice(i, 1);
    //       setConsultant(copied);
    //     } catch (err) {
    //       console.log("err");
    //     }
    //   };




      // const Chating= async ()=> {
      //   try {
      //     const response= await axios.post("http://localhost:5000/Chat", {
      //       Email: Email,
      //       Pass: Pass,
      //     });
      //     setToken(response.data.token);
      //     history.push("/Chat") ;
      //   } catch (error) {
      //   console.log(error);
      //   }
      // };



    //   const GoToChat = (id) => {
    //     history.push(`/Chat/${id}`);
    //   };


    // const changeName=(e)=>{
    //     setName(e.target.value);
    // };
    // const changeSpecialty=(e)=>{
    //     setSpecialty(e.target.value);
    // };
    // const changeAboutYou=(e)=>{
    //     setAboutYou(e.target.value);
    // };
    // const changeImg=(e)=>{
    //     setImg(e.target.value);
    // };


    return (
        <>
            {/* <div className='addingg'>
            <input className="inpC" onChange={(e)=> {changeName(e)}}placeholder="الأسم الثلاثي" />{""}
            <input className="inpC" onChange={(e)=> {changeSpecialty(e)}} placeholder="التخصص"/>
            <input className="inpC" onChange={(e)=> {changeAboutYou(e)}}placeholder="نبذة عنك" />
            <input className="inpC" onChange={(e)=> {changeImg(e)}} placeholder="الصورة الشخصية"/>

            <button className="butC" onClick={()=> {addConsultant()}}>اضف</button>
            </div> */}
            <div className='container'>
            {consultant.map((element, i) => {
              
              return (
    
                <div className="elemDiv" key={element._id}>
                  <div className='imgg'><img className='img1' src={element.img} alt='اضف صورة'/></div>
                    
                    <p className="chaildC chaildC1"> {element.Name} </p>
                    <p className="chaildC chaildC1"> {element.specialty} </p>
                    <p className="chaildC chaildC3" > {element.aboutYou} </p>
                  
                  {/* <GrBasket className="chaildC chaildC2" onClick={()=>{delConsultant(element._id, i)}}/> */}
                  {/* <button className="chaildC chaildC4" onClick={()=>{GoToChat()}}>استشارة </button> */}

  
                </div>
              );
            })}
            </div>
            
        </>
    )
}
