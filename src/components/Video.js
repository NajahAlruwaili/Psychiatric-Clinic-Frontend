import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Video.css"
import { GrBasket } from "react-icons/gr";
import { BsFillHeartFill } from "react-icons/bs";




export default function Video() {

    const [Video, setVideo] = useState([]);
    const [description, setDescription] = useState("")
    const [vid, setVid] = useState("")


    useEffect(async () => {
         const res = await axios.get("http://localhost:5000/Video");
         setVideo(res.data);
      },  []);
    

         const changeDescVal = (e) => {
          setDescription(e.target.value);
      };

        const changeVideo = (e) => {
            setVid(e.target.value);
      };

    
      const addVideo=async ()=>{
          const result = await axios.post("http://localhost:5000/Video", {
            description:description,
            video:vid,
          });
          setVideo(result.data)
      }
    
      const deleteVideo=async (id, index)=>{
    
        const deletedVideo = await axios.delete(`http://localhost:5000/Video/${id}`);
        const copiedArr= [...Video];
        copiedArr.splice(index,1);
        setVideo(copiedArr);
      }

      const fav = async (id) => {
        try {
          const result = await axios.post(
            `http://localhost:5000/favorite/${id}`,
            {},
          );
        } catch (error) {
          console.log(error.response.data);
        }
      };

    return (
        <>
        <div className="addingV">
        <input className="inp1" onChange={(e)=> {changeDescVal(e)}}placeholder="describtion" />{" "}
        <input className="inp1" onChange={(e)=> {changeVideo(e)}} placeholder="video"/>

        <button className="but1" onClick={()=> {addVideo()}}>add video </button>
        </div>
        <div className="Video">
       
          {Video.map((element, i) => {
              
            return (
  
              <div className="Vid" key={element._id}>
                <p>description: {element.description}</p>
                
                 <iframe id="n" width="420" height="315" src={`https://www.youtube.com/embed/${element.video}`} ></iframe>
                 <br></br>

                <GrBasket className="button" onClick={()=>{deleteVideo(element._id, i)}}/>
                
                <BsFillHeartFill className="HEART" onClick={() => {fav(element._id) }}/>

              </div>
            );
          })}

        </div>

      </>
    );
  }