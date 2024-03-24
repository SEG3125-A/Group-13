import React, { useState, useEffect, useRef   } from 'react';
import './About.css';
const About = () => {
  return (
    <div className="about">
        <p>This is the about us page.</p>
        <h1>About Us</h1>
        <div className="ownerContainer">
          <div className="imageLeft"><img src="images/restaurant-owner.png" alt='Restaurant owners standing in the doorway to The Big Fork with smiles.'></img></div>
          <div className="text">Hi! We're </div>
        </div>
        <div className="historyContainer">
        <div className="text">The Big Fork was established in </div>
          <div className='imageRight'><img src="images/dining-room.jpg" alt='alt'></img></div>
          
        </div>
    </div>
    );
  }
       
export default About;