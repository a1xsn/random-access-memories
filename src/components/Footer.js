import React from 'react'
import styled from 'styled-components'
import Banner from './Banner'
import Logo from './Logo'

import Twitter from '../Icons/Twitter'
import Instagram from '../Icons/Instagram'
import OpenSea from '../Icons/OpenSea'
import Discord from '../Icons/Discord'

const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;
color: ${props => props.theme.text};

display: flex;
/* justify-content: center; */
/* align-items: center; */
flex-direction: column;
`

const Container = styled.div`
width: 75%;
margin: 2rem auto;
display: flex;
justify-content: space-between;
align-items: center;

border-bottom: 1px solid ${(props) => props.theme.text};

@media (max-width: 48em){
  width: 90%;

  h1{
    font-size: ${props => props.theme.fontsm};
  }
}
`

const Left = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 48em){
  width: 100%;
}
`

const IconList = styled.div`
display: flex;
align-items: center;
margin: 1rem auto;

&>*{
  padding-right: 0.5rem;
  transition: all 0.2s ease;

  &:hover{
    transform: scale(1.2);
  }
}
`

const MenuItems = styled.li`
list-style: none;
width: 50%;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-gap: 1rem;

@media (max-width: 48em){
  display: none;
}
`

const Item = styled.li`
width: fit-content;
cursor: pointer;

&::after{
  content: ' ';
  display: block;
  width: 0%;
  height: 2px;
  background: ${props => props.theme.text};
  transition: width 0.3s ease;
}
&:hover ::after{
  width: 100%;
}
`
const Bottom = styled.div`
width: 75%;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;

a{
  text-decoration: underline;
}
@media (max-width: 48em){
  flex-direction: column;
  width: 100%;

  span{
    margin-bottom: 1rem;
  }
}
`

const Footer = () => {
  const scrollTo = (id) => {

    let element = document.getElementById (id);

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })
  }
  return (
    <Section>
      <Banner />
      <Container>
        <Left> 
          <Item><Logo /></Item>
          <IconList>
            <a href="https://discord.gg/Z4BmvZs973" target={'_blank'} rel="noopener noreferrer">
              <Discord />
            </a>
            <a href="https://twitter.com/bilitampash_xyz" target={'_blank'} rel="noopener noreferrer">
              <Twitter />
            </a>
            <a href="http://instagram.com/thinkpink_brand" target={'_blank'} rel="noopener noreferrer">
              <Instagram />
            </a>
            <a href="http://opensea.io" target={'_blank'} rel="noopener noreferrer">
              <OpenSea />
            </a>
          </IconList>
        </Left>
        <MenuItems>
          <Item onClick={() => scrollTo('about')} >Stage I</Item>
          <Item onClick={() => scrollTo('team')} >Timeline</Item>
          <Item onClick={() => scrollTo('roadmap')} >Stage II</Item>
          <Item onClick={() => scrollTo('faq')} >FAQ</Item>
        </MenuItems>
      </Container>
      <Bottom>
        <span>
          &copy; {new Date().getFullYear()} Bilita Mpash. All Rights Reserved.
        </span>
        <span>
          Created by <a href="http://thinkwithpink.com" target="_blank" rel="noopener noreferrer">
            ThinkPink
          </a>
        </span>
      </Bottom>
    </Section>
  )
}

export default Footer