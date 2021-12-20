import React, { useState, useEffect } from "react";
import axios from "axios";
import { GrBasket } from "react-icons/gr";
// import { BsFillHeartFill } from "react-icons/bs";
import "./Post.css"

export default function Post({token}) {


  const [post, setPost] = useState([]);
  const [NewPost, setNewPost] = useState("");
;

  useEffect(async()=> {
    const res = await axios.get("http://localhost:5000/post",{
      headers:{authorization:"Bearer " + token},
    });
    setPost(res.data);
  }, []);



  const changePost = (e) => {
    setNewPost(e.target.value);
  };


  const addPost = async () => {
    try {
      const result = await axios.post("http://localhost:5000/post",{
          post: NewPost,
        },{
          headers:{authorization:"Bearer " + token},
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
        `http://localhost:5000/post/${id}`,{
          headers:{authorization:"Bearer " + token},
        }
      );
      
      const copied = [...post];
      copied.splice(index, 1);
      setPost(copied);
    } catch (err) {
      console.log("err");
    }
  };

  // const favv = async (id) => {
  //   try {
  //     const resultt = await axios.post(
  //       `http://localhost:5000/favor/${id}`,
  //       {},
  //       {
  //         headers: { authorization: "Bearer " + token },
  //       }
  //     );
  //     console.log(resultt.data);
  //   } catch (error) {
  //     console.log(error.response.data);
  //   }
  // };



  return (
    
    <div>
      
      <div className="adding">
      <input className="inp" placeholder="... أكتب هنا" onChange={(e)=> {changePost(e);}}/>{" "}
      
      <button className="but" onClick={()=> {addPost();}}> ارسل </button>  
        </div> 


      <div className="bigDiv">
        {post.map((element, i) => {

          return (

             <div id="map" key={element._id}> {" "}
             
              <p className="chaild chaild1">{element.post}</p>
              
              <GrBasket className="chaild chaild2" onClick={() => {deletepost(element._id, i);}} /> 
              {/* <BsFillHeartFill className=" chaild HEART" onClick={() => {favv(element._id) }}/> */}


            </div>
          );
        })}

       </div>       

    </div>
    
  );
}
