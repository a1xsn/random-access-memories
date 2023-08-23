import React from "react";
import styled from "styled-components";
import totem from "../assets/07_card_go.glb";

const VideoContainer = styled.div`
  width: 100%;

  video {
    width: 100%;
    height: auto;
  }

  @media (max-width: 64em) {
    min-width: 40vh;
  }
`;

const CoverVideo = () => {
  return (
    <model-viewer
      className="model-viewer"
      src={totem}
      ios-src={totem}
      alt="3D sculpture"
      ar
      ar-modes="webxr scene-viewer quick-look fallback"
      camera-orbit="360.3deg 101deg auto"
      shadow-intensity="10"
      shadow-softness="1"
      exposure="1"
      camera-controls
      style={{
        display: "block",
        width: "100%",
        height: "90vh",
        margin: "auto",
      }}
    >
      {" "}
    </model-viewer>
  );
};

export default CoverVideo;
