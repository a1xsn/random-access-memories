import React from 'react'
import styled from 'styled-components'

import img1 from '../../assets/Bilita_Person_with_Shadow.png'
import img2 from '../../assets/Bilita_Token_with_Shadow.png'
import img3 from '../../assets/Bilita_Totem_with_Shadow.png'

import upside from '../../assets/fluid1.png'

const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props => props.theme.body};
position: relative;
padding-bottom: 0%;

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

background-image: url(${upside});
background-size: cover;

    background-attachment: scroll;
    background-position: center;
    background-repeat: no-repeat;
    
    position: relative;
    z-index: 0;

    &:before {
        background: rgba(0, 0, 0, 0.7);
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: -1;
    }
`

const Title = styled.h1`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
color: ${props => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
margin: 0rem auto;
width: fit-content;
font-synthesis: none;

@media (max-width: 40em) {
  font-size: ${props => props.theme.fontxl};
}
`
const SubText = styled.p`
font-size: ${props => props.theme.fontmd};
color: ${props => props.theme.text};
align-self: center;
width: 80%;
margin: 1rem auto;
font-weight: 400;
font-synthesis: none;

@media (max-width: 64em){
  width: 100%;
  text-align: center;
  font-size: ${props => props.theme.fontmd};
}
@media (max-width: 40em){
  font-size: ${props => props.theme.fontmd};
}
@media (max-width: 30em){
  font-size: ${props => props.theme.fontsm};
}
`

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
border-radius: 4rem;

@media (max-width: 64em) {
  width: 80%;
}
@media (max-width: 48em) {
  width: 90%;
  justify-content: center;
}
`
const Item = styled.div`
width: calc(20rem - 4vw);
padding: 1rem 0;
background-color: #623175;
margin: 2rem 1rem;
position: relative;
z-index: 5;
box-shadow: 8px 8px 20px 8px rgb(0 0 0 / 20%);

backdrop-filter: blur(4px);

border-radius: 20px;
transition: all 0.3s ease;

&:hover{
  img{
    transform: translateY(-2rem) scale(1.2);
  }
}

@media (max-width: 64em) {
  width: 70vw;
}

`
const ImageContainer = styled.div`
width: 80%;
margin: 0 auto;
/*background-color: ${props => props.theme.carouselColor};*/
background-image: linear-gradient(180deg, #f8deea, #4b9c8e);
border: 1px solid ${props => props.theme.text};
padding: 1rem;

border-radius: 20px;
cursor: pointer;

img{
  width: 100%;
  height: auto;
  transition: all 0.3s ease;
}
`
const Name = styled.h1`
font-size: ${props => props.theme.fontlg};
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
color: ${props => props.theme.text};
margin-top: 1rem;
margin-bottom: 1rem;
font-synthesis: none;
`

const Position = styled.a`
font-size: ${props => props.theme.fontsm};
display: flex;
align-items: center;
justify-content: center;
color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
font-weight: 400;
margin-left: 1rem;
margin-right: 1rem;
margin-top: 1rem;
font-synthesis: none;
`

const SmallDivider = styled.h1`
width: 30px;
height: 2px;
margin-top: 1rem;
margin-bottom: 1rem;
border-radius: 20px;
background-color: #ff44af;

display: flex;
justify-content: center;
align-items: center;
margin: 0rem auto;
`

const TimelineBadge = styled.h1`
display: flex;
width: 70px;
padding: 2px 3px;
-webkit-box-pack: center;
justify-content: center;
align-items: center;
border-radius: 2px;
color: white;
margin: 0rem auto;
font-synthesis: none;

font-size: 0.5rem;
line-height: 1;
letter-spacing: 1px;
text-transform: uppercase;

background-image: linear-gradient(180deg, #4b9c8e, #4b9c8e);
`


const MemberComponent = ({img, name="", timelinebadge="", position=""}) => {

  return (
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <TimelineBadge>{timelinebadge}</TimelineBadge>
      <Position>{position}</Position>
    </Item>
  )
}

const Team = () => {
  return (
    <Section id='team'>
      <Title><br className="sm:block hidden" />TIMELINE</Title>
      <Container>
      <SubText> Every journey must come to an end. We designed Bilita Mpash as an emotional experience with a definitive endpoint. That's why we make the best effort to create the most memorable experience with low entry costs and without any barriers. Bilita Mpash is open for everyone to visit and join. </SubText>
      </Container>
      
      <Container>
        <MemberComponent img={img2} name="I: DREAM" timelinebadge="SOON" position="Mint launch. Get your Totem to enter The Island and start exploring. Return some time later and finish your journey." />
        <MemberComponent img={img3} name="II: AWAKENING" timelinebadge="TBA" position="The dream ends, The Island awakens and reveals itself in full. Every member of The Tribe who finished The Dream and collected a key joins The Flowers Festival." />
        <MemberComponent img={img1} name="III: LIFE" timelinebadge="TBA" position="The Festival unites The Tribe in a weekend-long experience. Soon The Island will disappear, but many mysteries remain. It's up to you how fast The Island reveals them all before it returns back to sleep." />
      </Container>
    </Section>
  )
}

export default Team