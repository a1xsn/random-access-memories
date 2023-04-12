import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect'
import Button from  './Button'

const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: uppercase;
width: 88%;
color: ${props => props.theme.text};
align-self: flex-start;
font-synthesis: none;

span{
    text-transform: lowercase;
    font-family: "Aboreto", cursive;
}
.text-1{
    color: pink;
}
.text-2{
    color: pink;
}
.text-3{
    color: pink;
}

@media (max-width: 70em) {
    font-size: ${props => props.theme.fontxl};
}
@media (max-width: 48em) {
    align-self: center;
    text-align: center;
}
@media (max-width: 40em) {
    width: 90%;
}

`
const SubTitle = styled.p`
font-size: ${props => props.theme.fontmd};
color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
font-weight: 600;
margin-top: 1rem;
margin-bottom: 1rem;
width: 80%;
align-self: flex-start;
font-synthesis: none;

@media (max-width: 40em) {
    font-size: ${props => props.theme.fontmd};
    
}
@media (max-width: 48em) {
    align-self: center;
    text-align: center;
}
`

const ButtonContainer = styled.div`
align-self: flex-start;
text-rendering: optimizeLegibility;

@media (max-width: 48em) {
    align-self: center;
    text-align: center;

    button{
        margin: 0 auto;
    }
}
`

const TypeWriterText = () => {
  return (
 <>
    <Title>
        The Island of <br className="sm:block hidden" /> Bilita Mpash is LIVE 
        <Typewriter
        options={{
            autoStart: true,
            loop: true,
        }}
  onInit={(typewriter) => {
    typewriter.typeString('<span class="text-1">get the totem</span>')
  .pauseFor (2000)
  .deleteAll()
  .typeString('<span class="text-2">get the totem</span>')
  .pauseFor (2000)
  .deleteAll()
  .typeString('<span class="text-3">get the totem</span>')
  .pauseFor (2000)
  .deleteAll()
  .start()

  }}
/>
    </Title>
    <SubTitle>The Island is welcoming you. You are about to enter an event hidden from the outside world. To participate in Bilita Mpash, get The Totem and become a member of The Tribe.</SubTitle>
    <ButtonContainer>
    <Button as="a" text="How To Join" link="https://mirror.xyz/a1xsn.eth/wmzzScgv8Jmv7gJhiWAc_LLhg9AasNZHFEIU71Rmj58" target={'_blank'} rel="noopener noreferrer"/>
    </ButtonContainer>
 </>
  )
}

export default TypeWriterText