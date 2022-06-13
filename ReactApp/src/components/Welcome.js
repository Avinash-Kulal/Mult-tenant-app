import React from "react";
import styled from "styled-components";

const Home = styled.div`
    margin:20px;
    height:300px;
    font-family:arial;
    text-align:center;
    padding-top:150px;
    font-size:50px;
    color:#999;
`;


const Welcome = () => {
    return (
        <Home>
            Demo app
        </Home>
    )
}

export default Welcome;