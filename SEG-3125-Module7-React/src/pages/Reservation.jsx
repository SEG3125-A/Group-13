import { useState } from 'react';
import './Reservation.css'; // Make sure you have the corresponding CSS file

import { useTranslation } from "react-i18next";

const Reservation = () => {
  const {t} = useTranslation();

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
    alert(t('reservation-submitted'));
  };

  return (
    <div className="reservation-container">
      <h1>{t("book-table")}</h1>
      <div className="reservation-form-container">
        <form onSubmit={handleSubmit} className="reservation-form">
          <div className="form-section">
            <label>
              {t('name')}:
              <input
                type="text"
                name="name"
                value={reservation.name}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              {t('date')}:
              <input
                type="date"
                name="date"
                value={reservation.date}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              {t('time')}:
              <input
                type="time"
                name="time"
                value={reservation.time}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              {t('num-guests')}:
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
              {t('notes')}:
              <textarea
                name="notes"
                value={reservation.notes}
                onChange={handleInputChange}
                rows="4"
                placeholder={t('notes-placeholder')}
              />
            </label>
            <button type="submit">{t('submit')}</button>
          </div>
        </form>
        <div className="reservation-summary">
          <h3>{t('summary')}</h3>
          <p>{t('name')}: {reservation.name}</p>
          <p>{t('date')}: {reservation.date}</p>
          <p>{t('time')}: {reservation.time}</p>
          <p>{t('num-guests')}: {reservation.guests}</p>
          <p>{t('notes')}: {reservation.notes}</p>
        </div>
      </div>
    </div>
  );
};

export default Reservation;