import React from "react";
import styled from "styled-components";

const Head  = styled.div`
 background-color:#999;
 height:50px;
 font-size:20px;
 font-family:arial;
 text-align:center;
 font-weight:bold;
 margin:5px;
 color:white;
 `

const Header = ()=>{

 return (
  <Head>
   <hr/>
   Demo App
  </Head>
 )
}
export default Header;