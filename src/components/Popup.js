import React from 'react'
import styled from 'styled-components';

const Popup = styled.section `
position: fixed; top: 0;
left: 0;
width: 100%;
height: 100vh;
background-color: rgba(0, 0, 0, 0.2);

display: flex; 
justify-content: center;
align-items: center;
`

const Yo = () => {
  return (props.trigger) ? (
    <div className='Popup'>
        <div className='Popup-inner'>
            <button className='Close-btn'>Close</button>
            {props.children}
        </div>
    </div>
   ) : "";
}

export default Yo