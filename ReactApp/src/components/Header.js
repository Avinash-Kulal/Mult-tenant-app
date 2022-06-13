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
const Navigation = styled.div`
    font-family:arial;
    margin:10px;
`;
const Header = ()=>{

 return (
<React.Fragment>
  <Head>
   <hr/>
   Demo App <br/>
  </Head>
    <Navigation>
        <a href="/">Home</a> &nbsp;
        <a href="?module=login">Login</a> &nbsp;
        <a href="?module=register">Register</a>
    </Navigation>
  </React.Fragment>
 )
}
export default Header;