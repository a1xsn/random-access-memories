import React from "react";
import styled from "styled-components";
import bgvid from "../../assets/bg-vid.mp4"

const Intro = () => {
  return (
    <div className='main'>
    <div className="overlay"></div>
    <video src={bgvid} autoPlay loop muted />
    <div className="content">
        <h1>Welcome</h1>
        <p>To my site.</p>
    </div>
  </div>

  )
}

export default Intro