import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function Post({ token }) {
  const history = useHistory();


  const [post, setPost] = useState([]);
  const [NewPost, setNewPost] = useState("");
;

  useEffect(async () => {
    const res = await axios.get("http://localhost:5000/post");
    setPost(res.data);
  }, []);



  const changePost = (e) => {
    setNewPost(e.target.value);
  };


  const addPost = async () => {
console.log("its adding");
    try {
      const result = await axios.post("http://localhost:5000/post",{
          post: NewPost,
        });
      console.log(result.data);
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
    
    <div className="bigDiv">
      
        {post.map((element, i) => {

          return (

             <div id="map" key={element._id}> {" "}
             
              <p>{element.post}</p>
              
              <button onClick={() => {deletepost(element._id, i);}} > delete </button>

            </div>
          );
        })}

      <input placeholder="post" onChange={(e)=> {changePost(e);}}/>{" "}
      
      <button onClick={()=> {addPost();}}> Submit </button>

    </div>
    
  );
}
