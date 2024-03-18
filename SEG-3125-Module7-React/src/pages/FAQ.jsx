import React, { useState, useEffect } from 'react';
import './FAQ.css'; // Make sure you have the corresponding CSS file
// accordion tutorial from: https://www.freecodecamp.org/news/build-accordion-menu-in-react-without-external-libraries/

const FAQ = () => {
    return (
        <div className="faq">
            <h1>Got Questions?</h1>
            <p>This is the FAQ page.</p>
            <h1>Still have questions?</h1>
            <p>Click "Chat with us!" to talk to one of our staff!</p>
        </div>
    );
}
 
export default FAQ;