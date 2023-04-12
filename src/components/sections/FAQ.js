import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import Accordion from '../Accordion'

const Section = styled.section`
min-height: 100vh;
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
font-synthesis: none;

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
        Bilita Mpash - is a community-building event that includes ERC-1155 collectibles, an interactive narrative-driven metaverse experience made with 8XR technologies, and a future digital fashion collection. The title "Bilita Mpash" comes from Bantu, a group of African languages. It roughly translates as "amazing, pleasant dream, the opposite of a nightmare.”
        </Accordion>
        <Accordion title="HOW TO PARTICIPATE, AND WHAT IS THE TOTEM?">
        To participate in Bilita Mpash, you need a Totem - it's an ERC-1155 collectible NFT on Polygon, with 5 different editions. After the reveal, you will receive a link to enter The Island using the 8XR application. It's available across many browsers and devices, but at first make sure to register on 8XR platform connect your Metamask wallet that holds The Totem. In case you get lost, check out our Discord for all the details.
        </Accordion>
        <Accordion title="WHAT WILL HAPPEN ONCE I GET TO THE ISLAND?">
        Once you are inside - The Island is yours to explore. That is a single-player experience, until The Flowers Festival starts. We've prepared lots of hidden secrets and zones for you to explore: The Island will be fully revealed in three steps - with each new step opening up a new section of The Island.  
        <br className="sm:block hidden" />
        To enter The Flowers Festival, you need to: <br className="sm:block hidden" />
        A. Explore The Island from start to finish. <br className="sm:block hidden" />
        B. Capture a key in the final section of The Island - a part of a passphrase that will allow you to join The Festival later.
        </Accordion>
        </Box>
        <Box>
        <Accordion title="WHAT IS A FLOWERS FESTIVAL?">
        The Flowers Festival is a weekend-long multiplayer experience. That's all we're ready to say for now.
        </Accordion>
        <Accordion title="WHAT WILL HAPPEN AFTER THE FESTIVAL?">
        Stay tuned.
        </Accordion>
        <Accordion title="CAN I MAKE MONEY FROM YOUR COLLECTION AFTERWARDS?">
        Although we'll be happy to see Bilita Mpash gain traction on NFT marketplaces, our initial intent is the opposite. First and foremost, we want to create a narrative experience that propels deep emotional reactions and inspires community building of like-minded people who appreciate beauty in different forms and manifestations.
        </Accordion>
        </Box>
      </Container>
    </Section>
  )
}

export default FAQ