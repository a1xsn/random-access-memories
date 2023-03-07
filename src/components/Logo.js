import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import LOGO from '../assets/Logo.svg'

const LogoText = styled.div`
width: 10%;
transition: all 0.2s ease;

img{
  border: 0px solid #ddd;
  border-radius: 0px;
  padding: 5px;
  width: 100px;
}

&:hover{
  transform: scale(1.1);
}

@media (max-width: 64em) {
  min-width: 40vh;
}

`

const Logo = () => {
  return (
    <LogoText>
        <img src={LOGO} /> 
    </LogoText>
  )
}

export default Logo