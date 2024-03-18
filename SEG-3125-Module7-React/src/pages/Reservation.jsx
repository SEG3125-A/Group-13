import React, { useState, useEffect } from 'react';
import './Reservation.css'; // Make sure you have the corresponding CSS file

const Reservation = () => {
  const [reservation, setReservation] = useState({
    name: '',
    date: '',
    time: '',
    guests: 1,
    notes: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservation({ ...reservation, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the reservation data submission to your backend
    console.log('Reservation details:', reservation);
    alert('Reservation submitted!');
  };

  return (
    <div className="reservation-container">
      <h1>Reserve a Spot!</h1>
      <div className="reservation-form-container">
        <form onSubmit={handleSubmit} className="reservation-form">
          <div className="form-section">
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={reservation.name}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Date:
              <input
                type="date"
                name="date"
                value={reservation.date}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Time:
              <input
                type="time"
                name="time"
                value={reservation.time}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Number of Guests:
              <input
                type="number"
                name="guests"
                value={reservation.guests}
                onChange={handleInputChange}
                min="1"
                required
              />
            </label>
            <label>
              Notes:
              <textarea
                name="notes"
                value={reservation.notes}
                onChange={handleInputChange}
                rows="4"
                placeholder="Any special requests or notes for the restaurant staff..."
              />
            </label>
            <button type="submit">Submit</button>
          </div>
        </form>
        <div className="reservation-summary">
          <h3>Summary</h3>
          <p>Name: {reservation.name}</p>
          <p>Date: {reservation.date}</p>
          <p>Time: {reservation.time}</p>
          <p>Guests: {reservation.guests}</p>
          <p>Notes: {reservation.notes}</p>
        </div>
      </div>
    </div>
  );
};

export default Reservation;