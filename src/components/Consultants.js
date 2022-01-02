import React, { useState, useEffect } from 'react';
import axios from 'axios' ;

import "./Consultant.css"



export default function Consultants({token}) {

    const [consultant, setConsultant] = useState([]);


    useEffect( async() => {
        const response= await axios.get ("http://localhost:5000/consultant",{
          headers:{authorization:"Bearer " + token},
        });
        setConsultant(response.data);
    }, [])



    return (
        <>
           
            <div className='container'>
            {consultant.map((element, i) => {
              
              return (
    
                <div className="elemDiv" key={element._id}>
                  <div className='imgg'><img className='img1' src={element.img} alt='اضف صورة'/></div>
                  <hr></hr>
                    
                    <p className="chaildC chaildC1"> {element.Name} </p>
                    <p className="chaildC chaildC1"> {element.specialty} </p>
                    <p className="chaildC chaildC3" > {element.aboutYou} </p>

  
                </div>
              );
            })}
            </div>
            
        </>
    )
}
