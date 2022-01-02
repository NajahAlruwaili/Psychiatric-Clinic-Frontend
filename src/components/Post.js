import React, { useState, useEffect } from "react";
import axios from "axios";
import { GrBasket } from "react-icons/gr";
import { FaRetweet } from "react-icons/fa";
import "./Post.css"

export default function Post({token}) {

  const [post, setPost] = useState([]);
  const [NewPost, setNewPost] = useState("");
  const [newPostss, setNewPostss] = useState("");


  useEffect(async()=> {
    const res = await axios.get("http://localhost:5000/post",{
      headers:{authorization:"Bearer " + token},
    });
    setPost(res.data);
    // console.log(res.data);
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
      const deletepost = await axios.delete( `http://localhost:5000/post/${id}`,{
          headers:{authorization:"Bearer " + token},
        });
      const copied = [...post];
      copied.splice(index, 1);
      setPost(copied);
    } catch (err) {
      console.log("err");
    }
  };


  // حق انبوت التعديل 
  const changeePosts = (e) => {
    setNewPostss(e.target.value);
  };
  
// فنكشن  للتعديل   
  const updatePost= async (id)=>{
    try {
      // console.log(id,"id");
      const postUpdate = await axios.put(`http://localhost:5000/post/${id}`,{
        post:newPostss
      },{
        headers:{authorization:"Bearer " + token},
      },);
      setPost(postUpdate.data)
      // console.log(postUpdate.data,"postUpdate");
    } catch (error) {
      console.log("err");
    }
  };

  const showUbdate = ()=>{

  }

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
    
    <div className="bigCont">
      
      <div className="adding">
      <input className="inp" placeholder="... أكتب هنا" onChange={(e)=> {changePost(e);}}/>{" "}
      <button className="but" onClick={()=> {addPost();}}> ارسل </button>  
        </div> 


      <div className="bigDiv">
        {post.map((element, i) => {

          return (

             <div className="postBox" key={element._id}> {" "}
             
              <p className="pst">{element.post}</p>
              

              <div className="inpDiv">
              <GrBasket className="delbtn" onClick={() => {deletepost(element._id, i);}} /> 
              {/* <input onChange={(e)=>{changeePosts(e)}}></input>
              <button onClick={()=>{updatePost(element._id)}}>تعديل</button> */}
              <FaRetweet onClick={()=>{showUbdate()}}/>
              {/* {token ? toggle ? "" : <FaRetweet  onClick={()=>{showUbdate(toggle)}}>ADD Post</FaRetweet> : ""} */}

              </div>

              {/* {forminput ? <form onSubmit={updateItem} className='d-flex justify-content-around mx-1 mt-1'>
                                        <input className=' form-control border-none ' onChange={setValue} type="text"  />
                                        <button className='rounded-1 p-1 fw-bold bg-danger text-light border-0'> change </button>
                                    </form> : ''} */}



            </div>
          );
        })}

       </div>       

    </div>
    
  );
}
