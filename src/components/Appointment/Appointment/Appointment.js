import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {
    const[selectedDate,setSelectedDate]=useState(new Date())
    const handleDatechange= date =>{
       setSelectedDate(date);
    }
    return (
        <div>
            <Navbar/>
            <AppointmentHeader handleDatechange={handleDatechange}/>
            <BookAppointment date={selectedDate}/>
            <Footer/>
        </div>
    );
};

export default Appointment;