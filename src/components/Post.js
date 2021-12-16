import React, { useState, useEffect } from "react";
import axios from "axios";
import { GrBasket } from "react-icons/gr";
import "./Post.css"

export default function Post( ) {


  const [post, setPost] = useState([]);
  const [NewPost, setNewPost] = useState("");
;

  useEffect(async()=> {
    const res = await axios.get("http://localhost:5000/post");
    setPost(res.data);
  }, []);



  const changePost = (e) => {
    setNewPost(e.target.value);
  };


  const addPost = async () => {
    try {
      const result = await axios.post("http://localhost:5000/post",{
          post: NewPost,
        });

      const copied = [...post];
      copied.push(result.data);
      setPost(copied);
    } catch (err) {
      console.log("err");
    }
  };

  const deletepost = async (id, index) => {
    try {
      const deletepost = await axios.delete(
        `http://localhost:5000/post/${id}`,
      );
      
      const copied = [...post];
      copied.splice(index, 1);
      setPost(copied);
    } catch (err) {
      console.log("err");
    }
  };



  return (
    
    <div>
      
      <div className="adding">
      <input className="inp" placeholder="Post Here ..." onChange={(e)=> {changePost(e);}}/>{" "}
      
      <button className="but" onClick={()=> {addPost();}}> Submit </button>  
        </div> 


      <div className="bigDiv">
        {post.map((element, i) => {

          return (

             <div id="map" key={element._id}> {" "}
             
              <p className="chaild chaild1">{element.post}</p>
              
              <GrBasket className="chaild chaild2" onClick={() => {deletepost(element._id, i);}} /> 

            </div>
          );
        })}

       </div>       

    </div>
    
  );
}
