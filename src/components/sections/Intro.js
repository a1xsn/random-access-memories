import React from "react";
import styled from "styled-components";
import LOGO from "../../assets/Logo.svg";
import DOWN from "../../assets/down.svg";
import introbg from "../../assets/intro.gif";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  background-image: url(${introbg});
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
`;

const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  /* background-color: lightblue; */

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 70%;
    height: auto;
    margin: 1rem auto;
  }
`;
const Box = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 5%;
    height: auto;
  }
`;

const Intro = () => {
  return (
    <Section id="intro">
      <Container>
        <img src={LOGO} alt="" />
        <Box>
          <br className="sm:block hidden" />
        </Box>
        <Box>
          <img src={DOWN} alt="" />
        </Box>
      </Container>
    </Section>
  );
};

export default Intro;
