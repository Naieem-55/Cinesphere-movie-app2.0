import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'

export default function Header(props) {

  const navigate = useNavigate();

  return (
    <Container className='flex a-center j-between'>
       <div className="logo">
        <img src={logo} alt='logo' style={{width:'14vw' , height:'12vh'}}></img>
       </div> 
       <button onClick={() => navigate(props.login ? "/login" : "/signup")}>
        {props.login ? "Login" : "Signup"}
       </button>
    </Container>
  )
}

const Container = styled.div`
  padding: 0 4rem;
  .logo{
    img{
      height:5rem;
      background:transparent;
    }
  }
  button{
    padding: 0.5rem 1rem;
    background-color:#e50914;
    border: none;
    cursor:pointer;
    color: #fff;
    border-radius:0.3rem;
    font-weight:bold;
    font-size:1.05rem;
  }
`;




