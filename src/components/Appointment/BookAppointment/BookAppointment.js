import React from 'react';

const BookAppointment = ({date}) => {
    return (
         <section>
            <h2 className='text-center text-brand'>Avilable Appointment on {date.toDateString()}</h2>
         </section>
    );
};

export default BookAppointment;