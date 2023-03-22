import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Button from '../Button'
import {dark, light} from '../../styles/Themes'
import BGC2 from '../../assets/Bilita_render_V9_.gif'

const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
position: relative;

background-image: url(${BGC2});
background-size: cover;

    background-attachment: scroll;
    background-position: center;
    background-repeat: no-repeat;
    
    position: relative;
    z-index: 0;

    &:before {
        background: rgba(0, 0, 0, 0.3);
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: -1;
    }
`

const Container = styled.div`
width: 75%;
margin: 0 auto;
/* background-color: lightblue; */

display: flex;
justify-content: center;
align-items: center;
`

const Box = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
color: ${props => props.theme.text};
align-self: flex-start;
width: 80%;
margin: 0 auto;
text-shadow: 2px;
font-synthesis: none;

@media (max-width: 64em){
  width: 100%;
  text-align: left;
}
@media (max-width: 40em){
  font-size: ${props => props.theme.fontxl};
}
@media (max-width: 30em){
  font-size: ${props => props.theme.fontlg};
}
`

const SubText = styled.p`
font-size: ${props => props.theme.fontlg};
color: ${props => props.theme.text};
align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight: 400;
text-shadow: 2px;
font-synthesis: none;

@media (max-width: 64em){
  width: 100%;
  text-align: left;
  font-size: ${props => props.theme.fontmd};
}
@media (max-width: 40em){
  font-size: ${props => props.theme.fontmd};
}
@media (max-width: 30em){
  font-size: ${props => props.theme.fontsm};
}
`

const SubTextLight = styled.p`
font-size: ${props => props.theme.fontmd};
color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight: 400;
font-synthesis: none;

@media (max-width: 64em){
  width: 100%;
  text-align: left;
  font-size: ${props => props.theme.fontsm};
}
@media (max-width: 40em){
  font-size: ${props => props.theme.fontsm};
}
@media (max-width: 30em){
  font-size: ${props => props.theme.fontxs};
}
`

const ButtonContainer = styled.div`
align-self: flex-start;
width: 80%;
margin: 1rem auto;
display: flex;

@media (max-width: 64em){
  width: 100%;

  button{
    margin: 0 auto;
  }
}
`

const StageII = () => {
  return (
    <Section id='roadmap'>
      <Container>
       <Box> </Box>
        <Box> 
          <Title> 
            STAGE II: <br className="sm:block hidden" />
            THE AWAKENING 
          </Title> 
          <SubText>
            The Dream is not supposed to last forever
          </SubText>
          <SubTextLight>
          Time to wake up. You are now invited to join The Flowers Festival. At first, the Island rises from under the water and transforms from the inside. Then, with all the collected knowledge in our hands, we begin to create - The Flowers Festival starts and initiates a new phase of the Tribe's life. 
          </SubTextLight>
          <ButtonContainer>
          <ThemeProvider theme={light}>
            <Button text="Join Our Discord" link="https://discord.gg/Z4BmvZs973"/>
          </ThemeProvider>
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
  )
}

export default StageII