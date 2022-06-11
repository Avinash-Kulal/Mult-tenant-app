import React,{ useState,useEffect } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Register from "./components/register";

const App = () => {
  const [urlParam,setUrlParam] = useState('');
 
  useEffect(()=>{
    setUrlParamsState()
  },[])

  const setUrlParamsState = () =>{
      const urlParams = new URLSearchParams(window.location.search);
      setUrlParam({module:urlParams.get('module') })   
  }

  return (   
  <div>
    <Header/>
    { ((urlParam && urlParam.module === 'login') && <Login/> )
      ||
    ( (urlParam && urlParam.module === 'register') && <Register/>)
     ||
    <Welcome/>}
              
  </div>
   
  )
}

export default App;