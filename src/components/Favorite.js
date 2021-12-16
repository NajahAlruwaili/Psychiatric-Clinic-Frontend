import React, {useState,useEffect} from 'react'
import axios from 'axios';
import { BsFillHeartFill } from "react-icons/bs";


export default function Favorite({token}) {
    const [favor, setFavor] = useState([]);


    useEffect(async()=>{
        try {
            if(token){
                const result = await axios.get("http://localhost:5000/favor/",{
                    headers:{authorization: "Bearer" + token},
                });
                setFavor(result.data);
                console.log(result.data);
            };
        } catch (error) {
            console.log(error.response.data);
        }
    },[token]);


    const deletFav = async(id)=>{
        const result = await axios.get("http://localhost:5000/favor/",{
                    headers:{authorization: "Bearer" + token},
                });
                setFavor(result.data);
                console.log(result.data);
            };


    return (
        <div>

            {favor.map((element, i) => {
              
            return (
  
              <div className="Vid" key={element._id}>
                <p>description: {element.description}</p>
                
                 <iframe id="n" width="420" height="315" src={`https://www.youtube.com/embed/${element.video}`} ></iframe>
                
                <BsFillHeartFill className="HEART" onClick={() => {deletFav(element._id) }}/>

              </div>
            );
          })}
        </div>
    )
}
