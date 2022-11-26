import React from 'react';
import BookingCard from '../bookingCard/BookingCard';
const bookingData = [
    {
        id:1,
        subject:'Teeth orthodonatics',
        VisitingHour:'8:00 am to 9:00 pm',
        totalSpace:10
    },
    {
        id:2,
        subject:'Teeth orthodonatics',
        VisitingHour:'8:00 am to 9:00 pm',
        totalSpace:10
    },
    {
        id:3,
        subject:'Teeth orthodonatics',
        VisitingHour:'8:00 am to 9:00 pm',
        totalSpace:10
    },
    {
        id:4,
        subject:'Teeth orthodonatics',
        VisitingHour:'8:00 am to 9:00 pm',
        totalSpace:10
    },
    {
        id:5,
        subject:'Teeth orthodonatics',
        VisitingHour:'8:00 am to 9:00 pm',
        totalSpace:10
    },
    {
        id:6,
        subject:'Teeth orthodonatics',
        VisitingHour:'8:00 am to 9:00 pm',
        totalSpace:10
    }
]

const BookAppointment = ({date}) => {
    return (
         <section>
            <h2 className='text-center text-brand'>Avilable Appointment on {date.toDateString()}</h2>
            <div className="row mt-5 ">
                {
                    bookingData.map(booking =><BookingCard booking={booking} date={date} key={booking.id}></BookingCard>)
                }
            </div>
         </section>
    );
};

export default BookAppointment;