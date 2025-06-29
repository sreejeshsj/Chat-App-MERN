import React from 'react'
import styled from 'styled-components'
import robot from '../assets/robot.gif'
function Welcome({currentUser}) {
    
  return (
    
    <Container>
        
        <img src={robot} alt="robot" />
        <h1>Welcome,<span>{currentUser.username}</span>
        </h1>
        <h3>Please select a chat to start messaging</h3>
    </Container>
  )
}
const Container= styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
color:white;
img{
    height:20rem;
}
span{
    color:yellow;
}
`
export default Welcome
