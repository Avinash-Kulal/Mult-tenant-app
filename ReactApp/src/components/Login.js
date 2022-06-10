import React,{useState} from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
background-color:#eee;
height:300px;
padding:10px;
margin:5px;
font-family:arial;
`;
const Login = (props) =>{

 const [username,setUsername] = useState('');
 const [password,setPassword] = useState('');

 const handleLogin = (evt)=>{
  const urlParams = new URLSearchParams(window.location.search);
  const url = urlParams.get('server') || "http://localhost:3636/"
  console.log("SERVER URL ",url);
  evt.preventDefault();
  fetch(url)
  .then((res)=>res.json())
  .then(console.log)
  .catch(console.log)
 }
 return (
  <LoginContainer>
   <h3>Login</h3><hr/><br/>
   <form onSubmit={handleLogin}>
     <input type="text" name="username" value={username} placeholder="Username.." size="40" onChange={(evt)=>{ setUsername(evt.target.value)}}/><br/><br/>
     <input type="password" name="password" value ={password} placeholder="Password.." size="40"onChange={(evt)=>{setPassword(evt.target.value)}}/><br/><br/>
     <input type="submit" value="Login"/>
   </form>
  </LoginContainer>
 )
}
export default Login;