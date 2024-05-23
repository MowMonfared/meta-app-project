import React, { useState } from 'react';
import ConfirmedBooking from './ConfirmedBooking';

const BookingForm = (props) => {
  const [date, setDate] = useState('');
  const [times, setTimes] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');
  const [reservationConfirmed, setReservationConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, times, guests, occasion };
    props.SubmitForm(formData);
    setReservationConfirmed(true); // Set reservation confirmation state to true
  };

  const handleChange = (e) => {
    setDate(e.target.value);
    props.dispatch(e.target.value);
  };

  return (
    <div>
      <header>
        <section>
          <form onSubmit={handleSubmit}>
            <fieldset className="formField">
              <div>
                <label htmlFor="book-date">Choose Date:</label>
                <input
                  id="book-date"
                  value={date}
                  onChange={handleChange}
                  type="date"
                  required
                />
              </div>

              {/* time selection */}
              <div>
                <label htmlFor="book-time">Choose Time:</label>
                <select
                  id="book-time"
                  value={times}
                  onChange={(e) => setTimes(e.target.value)}
                  required
                >
                  <option value="">Select a Time</option>
                  {props.availableTimes &&
                    props.availableTimes.map((time, index) => (
                      <option key={index} value={time}>
                        {time}
                      </option>
                    ))}
                </select>
              </div>

              {/* number of guests */}
              <div>
                <label htmlFor="book-guests">Number of Guests:</label>
                <input
                  id="book-guests"
                  type="number"
                  min="1"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  required
                />
              </div>

              {/* occasions */}
              <div>
                <label htmlFor="book-occasion">Occasion:</label>
                <select
                  id="book-occasion"
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  required
                >
                  <option value="">Select an Occasion</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                </select>
              </div>

              {/* Submit button */}
              <div className="btnReceive">
                <input
                  aria-label="On Click"
                  type="submit"
                  value="Make Your Reservation"
                />
              </div>
            </fieldset>
          </form>
        </section>
      </header>
      {reservationConfirmed && <ConfirmedBooking />}{' '}
      {/* Conditionally render ConfirmedBooking */}
    </div>
  );
};

export default BookingForm;
