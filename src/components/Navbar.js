import React from 'react'
import { Link,useHistory } from "react-router-dom";


export default function Navbar({ token, setToken }) {
  const history = useHistory();


    return (
      <div className="nav">

         <h1>"مرحباً بكم في "بــالانـــس</h1>
        
        
         

        {token ? (
        <ul> 
          <li>
            <Link className="link"  to="/login" onClick={()=>{setToken("");}}>
              تسجيل خروج </Link>
          </li>
          <li>
            <Link className="link" to="/chat">الرسائل</Link>
          </li>
          <li>
            <Link className="link" to="/favorite">التفضيلات</Link>
          </li>
          <li>
            <Link className="link" to="/post">طمنا عنك</Link>
          </li>
          <li>
            <Link className="link" to="/Consultants">الأستشاريون</Link>
          </li>
          <li>
            <Link className="link" to="/Video">فيديو تحفيزي</Link>
          </li>
        
        </ul>
        ):(
        <ul>
          {/* <li>
          <Link className="link"  to="/Home">Home</Link>
          </li> */}
          <li>
            <Link className="link" to="/signUp">تسجيل جديد</Link>
          </li>
          <li>
            <Link className="link" to="/login">تسجيل دخول</Link>
          </li>
        </ul>
        ) }   

        {/* <div className='nnn'>
          <img className='imgnn' src='https://ammannet.net/sites/default/files/styles/news_landing/public/2019-05/146339882400.jpg?itok=dlfV-gPM' width="490" height="450"/>
          </div>      */}
      </div>
    );
}