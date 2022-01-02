import React, { useState, useEffect }  from 'react'
import axios from 'axios';
import "./Chat.css"

export default function Chat({ token }) {
    const [chats, setChats] = useState([])
    const [Names, setNames] = useState("")
    const [EmailMsgs, setEmailMsgs] = useState("")
    const [PhoneMsgs, setPhoneMsgs] = useState("")
    const [DoctorNames, setDoctorNames] = useState("")
    const [Titles, setTitles] = useState("")
    const [MasgeIss, setMasgeIss] = useState("")



    useEffect(async()=> {
      const res = await axios.get("http://localhost:5000/Amasege",{
        headers:{authorization:"Bearer " + token},
      });
      setChats(res.data);
      // console.log(res.data);
    }, []);


    


    const name = (e) => {
        setNames(e.target.value);
      };
      const emailMsg = (e) => {
        setEmailMsgs(e.target.value);
      };
      const phoneMsg = (e) => {
        setPhoneMsgs(e.target.value);
      };
      const doctorName = (e) => {
        setDoctorNames(e.target.value);
      };
      const title = (e) => {
        setTitles(e.target.value);
      };
      const masgeIs = (e) => {
        setMasgeIss(e.target.value);
      };

      const sendMasgesss = async () => {
        // console.log("its working");
        try {
          console.log("inter try");
          const result = await axios.post("http://localhost:5000/Amasege",{
              Names: Names,EmailMsgs: EmailMsgs,
              PhoneMsgs: PhoneMsgs,DoctorNames: DoctorNames,
              Titles: Titles,MasgeIss: MasgeIss,
            },{
              headers:{authorization:"Bearer " + token},
            });
          // console.log(result.data);
          const copied = [...chats];
          copied.push(result.data);
          setChats(copied);
        } catch (err) {
          console.log("err");
        }
      };




    
    return (
        <div className='bigMsg'>
            {/* <input placeholder='chating' onChange={(e)=> {sendCaht(e);}}/>{" "} */}
            
            <h1>تواصل معنا </h1>
            <div className='masegs'>

                <div className='top'>
                  <input onChange={(e)=>{doctorName (e)}} placeholder='اسم الاستشاري'></input>
                  <input onChange={(e)=>{title (e)}} placeholder='الموضوع'></input>
               </div>
                <div className='medel'>

                <input onChange={(e)=>{phoneMsg (e)}} placeholder='رقم الجوال'></input>
                <input onChange={(e)=>{emailMsg (e)}} placeholder='الايميل'></input>
                <input onChange={(e)=>{name (e)}} placeholder='الاسم'></input>

                </div>

                <div className='doun'>
                  <input onChange={(e)=>{masgeIs(e)}} placeholder='استشارتك'></input>
               </div>
               <div className='nn'>
               <button onClick={()=>{sendMasgesss()}}> ارسال </button>
               </div>
 
          </div>
   
        </div>
    )
}

