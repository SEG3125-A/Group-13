import React, { useState, useEffect, useRef   } from 'react';
import './About.css';
const About = () => {
  return (
    <div className="about">
        <h1>About Us</h1>
        <div className="leftContainer">
          <div className="imageLeft"><img src="images/restaurant-owner.png" alt='Restaurant owners standing in the doorway to The Big Fork with smiles.'></img></div>
          <div className="text">
            <p>Hi! We're Luca and Sofia Rossi, the proud second generation owners of The Big Fork. We've been helping to keep the family recipes of the Rossis alive by sharing them with the rest of the world.</p>
            <br></br>
            <p>We've been managing the restaurant since 2006 when Luca's parents handed over the keys to the kingdom. Nothing makes us happier than seeing customers come through the door with curiosity and leaving with satisfaction and a new love for food!</p>
            <br></br>
            <p>In our restaurant, we like to say that every meal has a story! We'd love to share with you the story of The Big Fork!</p>
            </div>
        </div>
        <div className="rightContainer">
        <div className="text">
          <p>The Big Fork's origins start with Giovanni and Maria Rossi, who immigrated to Canada from Italy in the 1980s. They had first met through their love of food and they wanted to share that with the world.</p>
          <br></br>
          <p>With little else other than their passion and a whole lot of elbow grease, they established The Big Fork!</p>
        </div>
          <div className='imageRight'><img src="images/dining-room.jpg" alt='alt'></img></div>
        </div>
        <div className='leftContainer'>
          <div className="imageLeft"><img src="images/server.jpg" alt=""></img></div>
          <div className="text">
            <p>Despite initial struggles, the couple's charm and passion won over the hearts (and stomachs!) of the locals. Soon enough, The Big Fork's authentic recipes had gained a loyal following.</p>
            <br></br>
            <p>Over time, more and more members of the Rossi family began to help out at the restaurant, including Giovanni's eldest son Luca! When the time came, Giovanni named Luca as the new owner and he and Maria retired to a relaxing life of good food and pleasant company.</p>
          </div>
        </div>
    </div>
    );
  }
       
export default About;