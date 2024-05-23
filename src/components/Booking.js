import React, { useState } from 'react';
import BookingForm from './BookingForm';
import ConfirmedBooking from './ConfirmedBooking';

const Booking = (props) => {
  // Example array of available times
  const availableTimes = ['17:00', '17:30', '18:00', '18:30', '19:00'];

  const [reservationConfirmed, setReservationConfirmed] = useState(false);

  const submitForm = (formData) => {
    console.log('Form submitted with data:', formData);
    setReservationConfirmed(true); // Update reservation confirmation state
  };

  const dispatch = (date) => {
    console.log('Date selected:', date);
    // Update available times based on the selected date if needed
  };

  return (
    <div>
      {!reservationConfirmed && (
        <BookingForm
          availableTimes={availableTimes} // Pass available times as a prop
          SubmitForm={submitForm}
          dispatch={dispatch}
        />
      )}
      {reservationConfirmed && <ConfirmedBooking />}{' '}
      {/* Conditionally render ConfirmedBooking */}
    </div>
  );
};

export default Booking;
