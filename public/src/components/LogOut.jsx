import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import {BiPowerOff} from 'react-icons/bi'
function LogOut() {
    const navigate=useNavigate()
    const handleClick=async ()=>{
        localStorage.clear()
        navigate('/login')
    }
  return (
    <Button onClick={handleClick}>
      <BiPowerOff/>
    </Button>
  )
}
const Button=styled.button`
display:flex;
justify-content:center;
align-items:center;
padding:0.5rem;
border-radius:0.5rem;
background-color:#9a86f3;
border:none;
cursor:pointer;
svg{
    font-size:1.3rem;
    color:#ebe7ff;
}
`
export default LogOut


