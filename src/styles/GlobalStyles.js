import { createGlobalStyle } from "styled-components";
import "@fontsource/akaya-telivigala"
import "@fontsource/aboreto"
import "@fontsource/poppins"
import "../../node_modules/video-react/dist/video-react.css"


const GlobalStyles = createGlobalStyle`

/*
*{
  outline: 1px solid red !important;
}
*/

*,*::before,*::after {
    margin: 0;
    padding: 0;
}

body {
    font-family: "Poppins", sans-serif;
    overflow-x: hidden;
}

h1,h2,h3,h4,h5,h6{
    font-family: "Aboreto", cursive;
    margin: 0;
    padding: 0;
}

a{
    color: inherit;
    text-decoration: NamedNodeMap;
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  position: absolute;
  width: 100%;
  height: 80%;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90%;
  background-color: rgba(0,0,0,.4);
  /* background-color: #000000cc; */
}

#gradient-canvas {
	width: 100%;
	height: 100%;
	/* Adjust the colors below to get a different gradient */
	/* You can use https://whatamesh.vercel.app/ to generate them */
	--gradient-color-1: #c3e4ff;
	--gradient-color-2: #6ec3f4;
	--gradient-color-3: #eae2ff;
	--gradient-color-4: #b9beff;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
`

export default GlobalStyles;
