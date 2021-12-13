import React, { useState, useEffect } from "react";
import axios from "axios";


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

    return (
        <>
        <div className="Video">
       
          {Video.map((element, i) => {
              
            return (
  
              <div className="Video" key={element._id}>
                <p>description: {element.description}</p>
                
                {/* <video  width="100%" height="500px" controls autoplay > <source src={element.video} /> 
                 </video> */}
                 {/* <video src={element.video} width="320" height="240" controls ></video> */}
                 <iframe width="420" height="315" src={`https://www.youtube.com/embed/${element.video}`} ></iframe>

                <button onClick={()=>{deleteVideo(element._id, i)}}>delete</button>

              </div>
            );
          })}

        </div>

        <input onChange={(e)=> {changeDescVal(e)}}placeholder="describtion" />{" "}


        <input onChange={(e)=> {changeVideo(e)}} placeholder="vid"/>

        <button onClick={()=> {addVideo()}}>add vid </button>


      </>
    );
  }