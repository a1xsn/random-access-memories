import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
min-height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
position: relative;

background-image: url('https://uploads-ssl.webflow.com/62963f02590ef4762888dcfc/6387ee44c2795fdafce0d13f_Builder%20tool%20chrome%20dark-min.svg');
background-size: cover;

    background-attachment: scroll;
    background-position: center;
    background-repeat: no-repeat;
    
    position: relative;
    z-index: 0;

&:before {
        background: rgba(0, 0, 0, 0.6);
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

img{
  width: 80%;
  height: auto;
}
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

const EXR = () => {
  return (
    <Section>
      <Container>
        <Box> 
          <Title> 
            THE ISLAND IS POWERED BY 8XR 
          </Title> 
          <SubText>
            Explore the most powerful metaverse graphic web engine
          </SubText>
          <SubTextLight>
          The Island is built with 8XR: the provider of the most powerful metaverse graphic web engine. The Island of Bilita Mpash aims to showcase the full potential of 8XR tech. After you mint The Totem, it grants you access to the entry sections of The Island - with other sections to be revealed later. The Island shows itself in full only to those members of the Tribe who finish the journey inside the dream and collect a key at the end of the dream.
          </SubTextLight>
        </Box>
        <Box><img src={"https://uploads-ssl.webflow.com/62963f02590ef4762888dcfc/62b19fb8111148850b0399e4_8XR_logotype_white-p-1080.png"} /> </Box>
      </Container>
    </Section>
  )
}

export default EXR