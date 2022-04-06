import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'

import {mobile} from "../Responsive";
import { register} from '../redux/apiCall';

const Container=styled.div`
width: 100vw;
height: 100vh;
background: 
  url("https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?cs=srgb&dl=pexels-tim-douglas-6567607.jpg&fm=jpg")
    center no-repeat;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`;


const Wrapper=styled.div`
width:40%;
padding:20px;
background-color:;
box-shadow: 10px 10px blue;
border: solid 1px blue;
box-shadow: 10px -10px 5px  rgba(0,0,0,0.6);
-moz-box-shadow: 10px -10px 5px  rgba(0,0,0,0.6);
  -webkit-box-shadow: 10px -10px 5px  rgba(0,0,0,0.6);
  -o-box-shadow: 10px -10px 5px  rgba(0,0,0,0.6);
  border-radius:25px;
  ${mobile({ width: "75%" })}`;



const Title=styled.h1`
font-size:24px;
font-weight:300;
padding:20px;
color:#d3db91
;`;

const Input=styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0px 0px;`;

const Form=styled.div`
flex-direction:column;
flex-wrapp:wrapp`;

const Agreement=styled.h1`
font-size:12px;
margin:20px 0px;
color:white;

;`;

const Button=styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;
`;

export const Register = () => {
  const dispatch=useDispatch()
  const [username,setUname]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const {isFetching,error}=useSelector(state=>state.user)
  
  const HandileClick =(e)=>{
e.preventDefault();

register(dispatch,{username,email,password})
console.log(email,password)
  }
    return (
        <Container>
            <Wrapper>
                <Form>
                <Title>Create an Account</Title>
                <Input placeholder="Name" onChange={(e)=>setUname(e.target.value)}/>
                <Input placeholder="Email"  onChange={(e)=>setEmail(e.target.value)}/>
                <Input placeholder="Password"  onChange={(e)=>setPassword(e.target.value)}/>
                <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={HandileClick}>CREATE</Button>
                </Form>
            </Wrapper>
            
        </Container>
    )
}