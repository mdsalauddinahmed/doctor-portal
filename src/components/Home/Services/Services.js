import React from 'react';
import fluoride from'../../../Images/images/fluoride.png';
import cavity from'../../../Images/images/cavity.png';
import whitening from'../../../Images/images/whitening.png';
import ServiceDetails from './ServiceDetails';


const ServicsData =[
    {
        name:'Flouride Treatment',
        img:fluoride
    },
    {
        name:'Cavity Filling',
        img:cavity
    },
    {
        name:'Teeth Whitening',
        img:whitening
    }
]

const Services = () => {
    return (
          <section className='services-container mt-5'>
            <div className="text-center">
                <h5 style={{color:"#1cc7c1"}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div>
            <div className="d-flex justify-content-center">
            <div className='w-75 row mt-5 '>
            {
                ServicsData.map(service=><ServiceDetails service={service}></ServiceDetails>)
             }
            </div>
            </div>
            </div>
           
          </section>
    );
};

export default Services;