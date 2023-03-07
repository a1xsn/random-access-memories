import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import Accordion from '../Accordion'

const Section = styled.section`
min-height: 100vh;
height: auto;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;
color: ${props => props.theme.text};

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Title = styled.h1`
font-size: ${props => props.theme.fontxxl};
text-transform: uppercase;
color: ${props => props.theme.text};

margin: 1rem auto;
border-bottom: 2px solid ${props => props.theme.body};
width: fit-content;

@media (max-width: 48em) {
  font-size: ${props => props.theme.fontxl};
}
`
const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-content: center;

@media (max-width: 64em) {
  width: 80%;
}
@media (max-width: 48em) {
  width: 90%;
  flex-direction: column;

  &>*:last-child{
    &>*:first-child{
      margin-top: 0px;
    }
  }
}
`

const Box = styled.div`
width: 45%;

@media (max-width: 64em) {
  width: 90%;
  align-self: center;
}
`

const FAQ = () => {

const ref = useRef (null);
gsap.registerPlugin(ScrollTrigger);
useLayoutEffect(() => {
  let element = ref.current;

  ScrollTrigger.create({
    trigger: element,
    start: "top top",
    end: 'bottom top',
    pin: true,
    pinsSpacing: false,
    scrub: true,
     // markers: true,
  })

  return () => {
    ScrollTrigger.kill();
  }

})

  return (
    <Section ref={ref} id="faq">
      <Title>FAQ</Title>
      <Container>
        <Box>
        <Accordion title="IS THIS A GAME, AN NFT COLLECTION, OR AN ART PROJECT?">
        Bilita Mpash - is a community-building event that includes ERC-1155 collectibles, a digital fashion collection, and an interactive narrative-driven metaverse experience made with 8XR technologies. The title "Bilita Mpash" comes from Bantu, a group of African languages. It roughly translates as "amazing, pleasant dream, the opposite of a nightmare."
        </Accordion>
        <Accordion title="HOW TO PARTICIPATE, AND WHAT IS THE TOTEM?">
        To participate in Bilita Mpash, mint The Totem - an ERC-1155 collectible. The mint price is free. After you mint The Totem, you will receive a link to enter The Island in the 8XR application. It's available across many browsers and devices, but make sure to connect the wallet that holds The Totem when you enter. In case you get lost, here's a little introduction to how to use the 8XR platform.
        </Accordion>
        <Accordion title="WHAT WILL HAPPEN ONCE I GET TO THE ISLAND?">
        Once you are inside - The Island is yours to explore. That is a single-player experience - but only until The Flowers Festival starts. We've prepared lots of hidden secrets and zones for you to explore. Note that The Island will be fully revealed in three steps (the schedule will be announced later) - with each new step opening up a new section of The Island.  
        <br className="sm:block hidden" />
        To enter The Flowers Festival, you need to: <br className="sm:block hidden" />
        a. Participate in three distinct stages - explore The Island as whole <br className="sm:block hidden" />
        b. Capture a secret word in the final section of The Island - that's a part of a passphrase that will allow you to join The Festival
        </Accordion>
        </Box>
        <Box>
        <Accordion title="WHAT IS A FLOWERS FESTIVAL?">
        The Flowers Festival is a weekend-long multiplayer experience. That's all we're ready to say for now.
        </Accordion>
        <Accordion title="WHAT WILL HAPPEN AFTER THE FESTIVAL?">
        We actually don't know. Stay tuned.
        </Accordion>
        <Accordion title="CAN I MAKE MONEY FROM YOUR COLLECTION AFTERWARDS?">
        Although we'll be happy to see Bilita Mpash gain traction on NFT marketplaces, our initial intent is the opposite. First and foremost, we want to create a narrative experience that propels deep emotional reactions and inspires community building of like-minded people who appreciate beauty in different forms and manifestations. In any case, we knowingly cut ourselves from any royalties.
        </Accordion>
        </Box>
      </Container>
    </Section>
  )
}

export default FAQ