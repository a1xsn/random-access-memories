import React from 'react'
import styled from 'styled-components'
import Totem from '../assets/03.png'

const Box = styled.div`
width: 120%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-shadow: 5px;

img{
  width: 80%;
  height: auto;
}

@media (max-width: 64em) {
  min-width: 40vh;
}
`

const CoverTotem = () => {
  return (
    <Box><img src={Totem} /> </Box>
  )
}

export default CoverTotem