import React, {useState,useEffect} from 'react'
import axios from 'axios';
import { BsFillHeartFill } from "react-icons/bs";
import "./Video.css"



export default function Favorite({token}) {
    const [favor, setFavor] = useState([""]);


    useEffect(async()=>{
        try {
            if(token){
                const result = await axios.get("http://localhost:5000/favoritee",{
                    headers:{authorization:"Bearer " + token},
                });
                setFavor(result.data);
                console.log(result.data);
            };
        } catch (error) {
            console.log(error.response.data);
        }
    },[token]); 



    const deletFav=async (id, index)=>{
                // console.log("its deleted fav");
      try{
        const result = await axios.delete(`http://localhost:5000/unfavor/${id}`,{
          headers:{authorization:"Bearer " + token},
        });
          const copied= [...favor];
          copied.splice(index,1);
          setFavor(copied);
      }catch (err){
        console.log("err");
      }
    };     
  


    return (
        <div>

            <div className="Video">

            {favor.map((element, i) => {
              
            return (
  
              <div className="Vid" key={element._id}>
                <p>{element.description}</p>
                
                 <iframe id="n" width="420" height="315" src={`https://www.youtube.com/embed/${element.video}`} ></iframe>
                
                <BsFillHeartFill className="HEART2" onClick={() => {deletFav(element._id) }}/>

              </div>
            );
          })}
          </div>
        </div>
    )
}
