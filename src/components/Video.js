import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useParams } from 'react-router-dom';
import { GrBasket } from "react-icons/gr";
import { BsFillHeartFill } from "react-icons/bs";
import "./Video.css"


export default function Video({ token , admin}) {

    const [video, setVideo] = useState([]);
    const [description, setDescription] = useState("")
    const [vid, setVid] = useState("")

    // console.log(token, "token");


    useEffect(async () => {
      
        // console.log(token);
         const res = await axios.get("http://localhost:5000/Video",{
           headers:{authorization:"Bearer " + token},
         });
         setVideo(res.data);
      
      }, []);
    

         const changeDescVal = (e) => {
          setDescription(e.target.value);
      };

        const changeVideo = (e) => {
            setVid(e.target.value);
      };

    
      const addVideo=async ()=>{
        console.log("okkkkk");
        try{
          const result = await axios.post("http://localhost:5000/Video", {
            description:description,
            video:vid,
          },
          {
            headers:{authorization:"Bearer " + token},
          });
          console.log(result.data);
          const copied = [...video];
          copied.push(result.data)
          setVideo(copied)
        }catch (err){
          console.log("err");
        }
          // console.log(result.data);
      }

      
    
      const deleteVideo=async (id, index)=>{
        // console.log("its work");
        try{
        const deletedVideo = await axios.delete(`http://localhost:5000/Video/${id}`,{
          headers:{authorization:"Bearer " + token},
        });
        const copied= [...video];
        copied.splice(index,1);
        setVideo(copied);

      }catch (err){
        console.log("err");
      }
      }

      const fav = async (id) => {
        try {
          const result = await axios.post(
            `http://localhost:5000/favor/${id}`,
            {},
            {
              headers: { authorization: "Bearer " + token },
            }
          );
          console.log(result.data);
        } catch (error) {
          console.log(error.response.data);
        }
      };

      

  //     const changeComment=(e)=>{
  //       setInput(e.target.value)
  //     }


  //     const postCommint=async()=>{
  //       try {
  //         const result = await axios.post(
  //             `http://localhost:5000/commint/${id}`,
  //             { commint:input },
  //             { headers: { authorization: "Bearer " + token } }
  //           );
  //           setVideo({...video , commint: result.data.commint})
  //       } catch (err) {
  //           console.log(err);
  //       }
  //   }

  // const deletcommint =async (commint)=>{
  //     try {
  //         const result = await axios.put(`http://localhost:5000/commint/${id}`,
  //     {commint:commint},
  //     {headers: { authorization: "Bearer " + token }})
  //     setVideo({...video , commint: result.data.commint})
  //     } catch (err) {
  //         console.log(err,"error");
  //     }
  // }

    return (
        <>
{/* <div className="addingV">
       
        </div> */}
{admin==true?(  <div className="Video">
  <div className="addingV" >
        <input className="inp1" onChange={(e)=> {changeDescVal(e)}}placeholder="الوصف" />{" "}
        <input className="inp1" onChange={(e)=> {changeVideo(e)}} placeholder="رابط الفيديو"/>

        <button className="but1" onClick={()=> {addVideo()}}> اضافة فيديو</button>
        </div>
          {video.map((element, i) => {
              
            return (
  
              <div className="Vid" key={element._id}>
                
                <div>
                <p> {element.description}</p>
                      
                       <iframe id="n" width="420" height="315" src={`https://www.youtube.com/embed/${element.video}`} ></iframe>
                       <br></br>
      
                      <GrBasket className="button" onClick={()=>{deleteVideo(element._id, i)}}/>
                      
                      <BsFillHeartFill className="HEART" onClick={() => {fav(element._id) }}/>
                      
              </div>
        
                

              </div>
            );
          })}

        </div> ):( <div className="Video">
        
        {video.map((element, i) => {
            
          return (

            <div className="Vid" key={element._id}>
              
              <div>
              <p> {element.description}</p>
                    
                     <iframe id="n" width="420" height="315" src={`https://www.youtube.com/embed/${element.video}`} ></iframe>
                     <br></br>
    
                    {/* <GrBasket className="button" onClick={()=>{deleteVideo(element._id, i)}}/> */}
                    
                    <BsFillHeartFill className="HEART" onClick={() => {fav(element._id) }}/>
                    
            </div>
      
              

            </div>
          );
        })}

      </div> )}
        


      </>
    );
  }