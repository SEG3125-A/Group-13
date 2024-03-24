import React, { useState, useEffect } from 'react';
import './FAQ.css'; // Make sure you have the corresponding CSS file
import Accordion from '../components/Accordion';
// accordion tutorial from: https://www.freecodecamp.org/news/build-accordion-menu-in-react-without-external-libraries/

const FAQ = () => {
    const accordionDataReservations = [
        {
            title: 'How do I make a reservation?',
            content: 'You can reserve a table either through this website or by calling us! Click "Book Table" in the navigation bar and you\'ll be taken to the reservation page.'
        },
        {
            title: 'How early in advance should I make one?',
            content: 'For small gatherings, please reserve your table(s) two hours before you arrive at the latest. If you make a reservation within 2 hours before you arrive, we can\'t guarantee that we\'ll have space for you! The earlier you make your reservation, the better!'
        },
        {
            title: 'Is there a limit to how many guests I can bring?',
            content: 'Technically, yes. Depending on how many tables are already reserved during a particular time on a particular day, we might not be able to accomodate for all of your guests if you\'re planning on bringing a lot. Please chat with a staff member or call us to reserve the entire restaurant.'
        }
    ];

    const accordionDataMenu = [
        {
            title: 'Where do you get your ingredients from?',
            content: 'Our ingredients are reliably sourced from local farmers around the Ottawa region!'
        },
        {
            title: 'Do you have vegetarian or vegan options?',
            content: 'Yes, we do! Dishes that are vegetarian or vegan are listed on our menu. If you make a reservation instead of a walk-in, you can leave instructions on any protein replacement to use in a particular dish. We\'ll contact you if we\'re unable to fulfill your request as specified.'
        }
    ];

    const accordionDataRestrictions = [
        {
            title: 'I have an allergy, are you able to accommodate for it?',
            content: 'For common allergies such as peanuts, tree nuts, and shellfish, we list which dishes contain those allergens in our menu.'
        },
        {
            title: 'What if I have an uncommon allergy?',
            content: 'For more specific allergies, please chat with us or call us to see if we can accommodate for it!'
        }
    ];

    return (
        <div className="faq">
            <h1>Got Questions?</h1>
            <br></br>
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
            <p>Click "Chat with us!" to talk to one of our staff in real time!</p>
        </div>
    );
}
 
export default FAQ;