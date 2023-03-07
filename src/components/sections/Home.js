import React from 'react'
import styled from 'styled-components'
import CoverVideo from '../CoverVideo'
import TypeWriterText from '../TypeWriterText'
import BGVID from '../../assets/bg-vid2.gif'

import CoverTotem from '../CoverTotem'

const Section = styled.section`
min-height: ${props => `calc(100vh - ${props.theme.navHeight})`};
width: 100vw;
position: relative;

background-image: url(${BGVID});
background-size: cover;

    background-attachment: scroll;
    background-position: center;
    background-repeat: no-repeat;
    
    position: relative;
    z-index: 0;

    &:before {
        background: rgba(0, 0, 0, 0.4);
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
min-height: 80vh;
margin: 0 auto;
/* background-color: lightblue; */

display: flex;
justify-content: center;
align-items: center;

@media (max-width: 64em) {
  width: 85%;
}
@media (max-width: 48em) {
  flex-direction: column-reverse;
  width: 100%;

  &>*:first-child{
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
}
`

const Box = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Home = () => {
  return (
    <Section id='home'>
      <Container>
        <Box> <TypeWriterText /> </Box>
        <Box> <CoverVideo /> </Box>

      </Container>
    </Section>
  )
}

export default Home