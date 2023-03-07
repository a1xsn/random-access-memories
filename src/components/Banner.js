import React from 'react'
import styled from 'styled-components'

import Button from './Button'
import img1 from '../assets/thinkpink_w.png'

const JoinNow = styled.button`
display: inline-block;
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
outline: none;
border: none;
font-weight: 600;
font-size: ${props => props.theme.fontlg};
padding: 1.5rem 3rem;
border-radius: 50px;
cursor: pointer;
transition: all 0.2s ease;
position: relative;
border-bottom: 0;
text-decoration: none;

@media (max-width: 48em){
  padding: 1rem 2rem;
}
@media (max-width: 30em){
  padding: 0.5rem 2rem;
  font-size: ${props => props.theme.fontsm};
}

&:hover{
  transform: scale(0.9);
}

&::after{
  content: ' ';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale (0);
  border: 2px soild ${props => props.theme.body};
  width: 100%;
  height: 100%;
  border-radius: 50px;
  transition: all 0.2s ease;
}

&:hover::after{
  transform: translate(-50%, -50%) scale (1);
  padding: 0.3rem;
}
`

const Section = styled.section`
width: 100vw;
height: 25rem;
position: relative;

background-color: ${props => `rgba(${props.theme.textRgba}, 0.9)`};

display: flex;
justify-content: center;
align-items: center;

overflow: hidden;

@media (max-width: 48em) {
    height: 15rem;
    flex-direction: column;
}
`

const ImgContainer = styled.div`
width: 100%;
position: absolute;
top: 50%;
left: 56%;
transform: translate(-50%, -50%);

display: flex;
justify-content: center;
align-items: center;
opacity: 0.2;

img{
    width: 15rem;
    height: auto;
}

@media (max-width: 48em) {
  img{
    width: 10rem;
    height: auto;
}
}
`

const Title = styled.h1`
font-size: ${props => props.theme.fontxxxl};
color: ${props => props.theme.text};
padding: 1rem 2rem;
z-index: 10;
width: 35%;
text-transform: capitalize;
text-shadow: 1px 1px 2px ${props => props.theme.body};

@media (max-width: 64em) {
  width: 40%;
  font-size: ${props => props.theme.fontxxl};
  text-align: center;
}
@media (max-width: 48em) {
  width: 100%;
  padding: 2rem 0;
  font-size: ${props => props.theme.fontxl};
}
`

const BtnContainer = styled.div`
width: 35%;
display: flex;
justify-content: flex-end;

@media (max-width: 48em){
  width: 100%;
  justify-content: center;
}

`

const Banner = () => {
  return (
    <Section>
        <ImgContainer>
        <img src={img1} alt="" />
        </ImgContainer>
        <Title>We Are <br /> THINKPINK</Title>
        <BtnContainer>
        <JoinNow as="a" href="https://www.thinkwithpink.com/bilitampash">
            About Us
        </JoinNow>
        </BtnContainer>
    </Section>
  )
}

export default Banner