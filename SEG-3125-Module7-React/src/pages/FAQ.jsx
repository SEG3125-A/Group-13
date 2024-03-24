import React, { useState, useEffect } from 'react';
import './FAQ.css'; // Make sure you have the corresponding CSS file
import Accordion from '../components/Accordion';
// accordion tutorial from: https://www.freecodecamp.org/news/build-accordion-menu-in-react-without-external-libraries/

const FAQ = () => {
    const accordionDataReservations = [
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

    const accordionDataMenu = [
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

    const accordionDataRestrictions = [
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
            <h2>Reservations</h2>
            <div className="accordion">
                {accordionDataReservations.map(({ title, content }) => (
                    <Accordion title={title} content={content} />
                ))}
            </div>
            <h2>About Our Menu</h2>
            <div className="accordion">
                {accordionDataMenu.map(({ title, content }) => (
                    <Accordion title={title} content={content} />
                ))}
            </div>
            <h2>Dietary Restrictions</h2>
            <div className="accordion">
                {accordionDataRestrictions.map(({ title, content }) => (
                    <Accordion title={title} content={content} />
                ))}
            </div>
            <h1>Still have questions?</h1>
            <br></br>
            <p>Click "Chat with us!" to talk to one of our staff live!</p>
        </div>
    );
}
 
export default FAQ;