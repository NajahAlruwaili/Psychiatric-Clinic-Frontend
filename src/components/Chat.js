import React, { useState, useEffect }  from 'react'
import axios from 'axios';

export default function Chat({ token }) {
    const [chats, setChats] = useState([])
    const [sendCh, setSendCh] = useState("")

    // useEffect(async(id) => {
    //     try {
    //         const res = await axios.get(`http://localhost:5000/Chat${id}`,{
    //             headers: { authorization: "Bearer " + token },
    //           });
    //           setChats(res.data);
    //         // console.log(res.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }, [])

    // const sendCaht =(e)=>{
    //     setSendCh(e.target.value);
    // };




    
    return (
        <div>
            {/* <input placeholder='chating' onChange={(e)=> {sendCaht(e);}}/>{" "} */}
            <div>

            <input placeholder='استشارتك'></input>
            <input placeholder='الايميل'></input>
            <input placeholder='الاسم:اختياري'></input>


            </div>
            
        </div>
    )
}

