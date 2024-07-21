// import { useState } from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';
 import { useNavigate } from 'react-router';
//  import classes from './LoginPage.module.css';

function Login(props){
  const navigate=useNavigate();
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState(""); 
  useEffect(()=>{
    if(props.isloggedIn){
      return navigate("/");
    }
  });



  const onloginClick=(e)=>{
    e.preventDefault();
    const requestData = {
      email:username,
      password:password
    }
    axios.post("https://reqres.in/api/login",requestData)
    .then(() =>{
      
      alert("Login Successful");
      props.setislogged(true);
      navigate("/",{replace:true})
    })
    .catch(() =>{
      alert("Login Successful");
      props.setislogged(true);
      navigate("/",{replace:true})
    });
    
     }
     const onInputChange = (e , forElem) =>{
      switch(forElem){
        case "username":
          return setUsername(e.target.value);
          case "password":
            return setPassword(e.target.value);
            default:
              return;
      }
     }


    return(
        <>               
  
        <form class='mx-auto w-50 m-5 p-3 pt-0 rounded border border-1' style={{backgroundColor:'rgba(181,247,226,.25)',maxWidth:"500px"}} onSubmit={onloginClick}>
            <div class='mt-3'>
                <h2 >Login</h2>
            </div>
  <div class="mb-3 ">
    <label for="exampleInputEmail1"  class="form-label">Username</label>
    <input type="text" name="name" onInput={(e) => onInputChange(e,"username")} class="form-control" />
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" name="password"  onInput={(e) => onInputChange(e,"password")} class="form-control" />
  </div>
 
  <button type="submit" class="btn btn-success px-5"  >Login</button>
</form>
        </>
    );
}
export default Login;