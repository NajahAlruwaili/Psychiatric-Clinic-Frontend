import React, { useState, useEffect } from "react";
import axios from "axios";
import { GrBasket } from "react-icons/gr";
import { FaRetweet } from "react-icons/fa";
import { MdAddCircle } from "react-icons/md";
import "./Post.css";

export default function Post({ token }) {
  const [post, setPost] = useState([]);
  const [NewPost, setNewPost] = useState("");
  const [newPostss, setNewPostss] = useState("");
  const [togle, setTogle] = useState(false);
  const [togleee, setTogleee] = useState(false);


  useEffect(async () => {
    const res = await axios.get("http://localhost:5000/post", {
      headers: { authorization: "Bearer " + token },
    });
    setPost(res.data);
    // console.log(res.data);
  }, []);

  const changePost = (e) => {
    setNewPost(e.target.value);
  };

  const addPost = async () => {
    try {
      const result = await axios.post(
        "http://localhost:5000/post",
        {
          post: NewPost,
        },
        {
          headers: { authorization: "Bearer " + token },
        }
      );

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
        {
          headers: { authorization: "Bearer " + token },
        }
      );
      const copied = [...post];
      copied.splice(index, 1);
      setPost(copied);
    } catch (err) {
      console.log("err");
    }
  };

  //  انبوت التعديل
  const changeePosts = (e) => {
    setNewPostss(e.target.value);
  };

  // فنكشن + بوتون  للتعديل
  const updatePost = async (id) => {
    try {
      // console.log(id,"id");
      const postUpdate = await axios.put(
        `http://localhost:5000/post/${id}`,
        {
          post: newPostss,
        },
        {
          headers: { authorization: "Bearer " + token },
        }
      );
      setPost(postUpdate.data);
      // console.log(postUpdate.data,"postUpdate");
    } catch (error) {
      console.log("err");
    }
  };

  // بوتون التوقل   للابديت
  const changeTogle=(id,i)=>{
    setTogle(true)
  }

  ///  هذي بوتون التوقيل  للاضافة
  ///بالبداية تكون فولس
  /// اذا ضغطت على البوتون تتغير قيمة الستيت وتصير ترو 
  /// اذا تغيرت الستيت تصير قيمه التوقيل ترو ويطلع لي بوكس الاضافة 
  const showAdd = ()=>{
    setTogleee(true)
  }

  return (
    <div className="bigCont">
      
        {togleee? (<div className="adding">
          <input
          className="inp"
          placeholder="... أكتب هنا"
          onChange={(e) => {
            changePost(e);
          }}
        />{" "}
        <button
          className="but"
          onClick={() => {
            addPost();
          }}
        >
          {" "}
          ارسل{" "}
        </button>
      </div>
        ):(<div ><MdAddCircle className="md" onClick={()=>{showAdd()}}/></div>)}
        

      <div className="bigDiv">
        {post.map((element, i) => {
          return (
            <div className="postBox" key={element._id}>
              {" "}
              <p className="pst">{element.post}</p>
              <div className="inpDiv">
                <GrBasket
                  className="delbtn"
                  onClick={() => {
                    deletepost(element._id, i);
                  }}
                />


                {togle ? (
                  <div>
                  <input
                    onChange={(e) => {
                      changeePosts(e);
                    }}
                  ></input>
                  <FaRetweet onClick={()=>{updatePost(element._id)}} />
                  </div>
                ) : (
                  <FaRetweet
                  onClick={() => {
                    changeTogle(element._id,i);
                  }}
                />
                )}
               
                
              </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
}
