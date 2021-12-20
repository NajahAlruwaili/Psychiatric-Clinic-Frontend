import React, { useState, useEffect }  from 'react'
import axios from 'axios';

export default function Chat({ token }) {
    const [consultants, setConsultants] = useState(null)

    useEffect(async(id) => {
        try {
            const res = await axios.get(`http://localhost:5000/consultant${id}`,{
                headers: { authorization: "Bearer " + token },
              });
            setConsultants(res.data);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }, [])



    
    return (
        <div>
            
            
        </div>
    )
}

