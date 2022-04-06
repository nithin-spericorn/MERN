import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { login } from '../redux/apiCall';

import {mobile} from "../Responsive";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled{
    color:green;
    cursor:not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error=styled.span`
color:red;
`;

export const Login = () => {
  const dispatch=useDispatch()
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const {isFetching,error}=useSelector(state=>state.user)
  
  const HandileClick =(e)=>{
e.preventDefault();

login(dispatch,{email,password})
console.log(email,password)
  }
    return (
        <Container>
            <Wrapper>
                <Form>
                <Title>Login To an Account</Title>
                
                <Input placeholder="email" type="email" onChange={(e)=>setEmail(e.target.value)}/>
              
                <Input placeholder="password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
               
                
          <Button onClick={HandileClick} disabled={isFetching}>Login</Button>
          {error&&<Error>Something Went wrong..</Error>}
          <a href="/register">
          <Link >DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
          </a>
                </Form>
            </Wrapper>
            
        </Container>
    )
}
