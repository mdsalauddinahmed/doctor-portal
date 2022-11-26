import React, { useState } from 'react';
import ModalForm from '../ModalForm/ModalForm';
 

const BookingCard = ({booking}) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
   
  
    function closeModal() {
      setIsOpen(false);
    }
    return (
        <div className='col-md-4 mb-5 '>
            <div className="card p-3   ">
                <div className="card-body text-center">
                    <h5 className="card-title text-brand">{booking.subject}</h5>
                    <h6>{booking.title}</h6>
                    <p>{booking.totalSpace} SPACES AVILABLE</p>
                    <button onClick={openModal} className="btn btn-brand text-uppercase">Book Appointment</button>
                     <ModalForm modalIsOpen={modalIsOpen} appointmenton={booking.subject} closeModal={closeModal}  />
                </div>
            </div>
            
        </div>
    );
};

export default BookingCard;