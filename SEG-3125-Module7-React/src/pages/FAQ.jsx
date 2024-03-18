import React, { useState, useEffect } from 'react';
import './FAQ.css'; // Make sure you have the corresponding CSS file
import Accordion from './Accordion';
// accordion tutorial from: https://www.freecodecamp.org/news/build-accordion-menu-in-react-without-external-libraries/

const FAQ = () => {
    const accordionData = [
        {
            title: 'Reservations',
            content: 'filler'
        },
        {
            title: 'Menu',
            content: 'filler'
        },
        {
            title: 'Dietary Restrictions',
            content: 'filler'
        }
    ];

    return (
        <div className="faq">
            <h1>Got Questions?</h1>
            <div className="accordion">
                {accordionData.map(({ title, content }) => (
                    <Accordion title={title} content={content} />
                ))}
            </div>
            <h1>Still have questions?</h1>
            <br></br>
            <p>Click "Chat with us!" to talk to one of our staff!</p>
        </div>
    );
}
 
export default FAQ;