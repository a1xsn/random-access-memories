import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Button from './Button'

const Section = styled.section`
width: 100vw;
/*background-color: ${props => props.theme.body};*/
background: #4c265a;
background-size: 400% 400%;
-webkit-animation: Gradient 15s ease infinite;
-moz-animation: Gradient 15s ease infinite;
animation: Gradient 15s ease infinite;
position: relative;
top: 0;

@-webkit-keyframes Gradient { 
0% { 
background-position: 0% 50%
  }
50% {
background-position: 100% 50%
}
100% {
background-position: 0% 50%
}
}

@-moz-keyframes Gradient {
0% {
background-position: 0% 50%
  }
50% {
background-position: 100% 50%
}
100% {
background-position: 0% 50%
}
}

@keyframes Gradient {
0% {
background-position: 0% 50%
  }
50% {
background-position: 100% 50%
}
100% {
background-position: 0% 50%
}
}
`

const NavBar = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;

width: 85%;
height: ${props => props.theme.navHeight};
margin: 0 auto;

.active {
  background: linear-gradient(90deg, rgb(66,2,194) 0%, rgb (0, 78, 194) 100% );
}

.mobile{
  display: none;
}

@media (max-width: 64em){
.desktop{
  display: none;
}
.mobile{
  display: inline-block;
}
}
`

const Menu = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
list-style: none;

@media (max-width: 64em) {
  position: fixed;
  top: ${props => props.theme.navHeight};
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: ${props => `calc(100vh-${props.theme.navHeight})`};
  z-index: 50;
  background-color: ${props => `rgba(${props.theme.bodyRgba},0.85)`};
  backdrop-filter: blur(2px);

  transform: ${props => props.click ? `translateY(0)` : `translateY(100%)`};
  transition: all 0.3s ease;

  flex-direction: column;
  justify-content: center;
}

`

const MenuItem = styled.h3`
margin: 0 1rem;
color: white;
font-synthesis: none;
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

@media (max-width: 64em) {
  margin: 1rem 0;
  color: black;

&::after{
  display: none;
}
}
`

const HamburgerMenu = styled.span`
width: ${props => props.click ? `2rem` : `1.5rem`};
height: 2px;
background: ${props => props.theme.text};

position: absolute;
top: 2rem;
left: 87%;
transform: ${props => props.click ? `translateX(-50%) rotate (90deg)` : `translateX(-50%) rotate (0)` };

display: none;
justify-content: center;
align-items: center;

cursor: pointer;
transition: all 0.3s ease;

@media (max-width: 64em) {
  display: flex;
}

&::after, &::before{
  content: ' ';
  width: ${props => props.click ? `1rem` : `1.5rem`};
  height: 2px;
  right: ${props => props.click ? `-2px` : `0`};
  background: ${props => props.theme.text};
  position: absolute;
  transition: all 0.3s ease;
}

&::after{
  top: ${props => props.click ? `0.3rem` : `0.5rem`};
  transform: ${props => props.click ? `rotate (-40deg)` : `rotate (0)` };
}
&::before{
  bottom: ${props => props.click ? `0.3rem` : `0.5rem`};
  transform: ${props => props.click ? `rotate (40deg)` : `rotate (0)` };
}
`

const Navigation = ({ sticky }) => {

  const [click, setClick] = useState(false);

  const scrollTo = (id) => {

    let element = document.getElementById (id);

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })

    setClick(!click);
  }

  return (
    
    <Section id='navigation'>
      <NavBar>
        <Logo />
        <HamburgerMenu click={click} onClick={() => setClick(!click)}>
          &nbsp;
        </HamburgerMenu>
        <Menu click={click} className="navigation">
          <MenuItem onClick={() => scrollTo('home')} >START</MenuItem>
          <MenuItem onClick={() => scrollTo('about')} >STAGE I</MenuItem>
          <MenuItem onClick={() => scrollTo('roadmap')} >STAGE II</MenuItem>
          <MenuItem onClick={() => scrollTo('team')} >TIMELINE</MenuItem>
          <MenuItem onClick={() => scrollTo('faq')} >FAQ</MenuItem>
          <MenuItem> 
            <div class="mobile">
            <Button text="MINT SOON" link="https://discord.gg/Z4BmvZs973" />
            </div>
          </MenuItem>
        </Menu>
          <div class="desktop">
            <Button text="MINT SOON" link="https://discord.gg/Z4BmvZs973" />
          </div>
      </NavBar>
    </Section>
  )
}

export default Navigation