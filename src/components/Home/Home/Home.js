import React from 'react';
import FeaturedService from '../FeaturedService/FeaturedService';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
 
  

const Home = () => {
    return (
    <>
    <Header></Header>
    <Services></Services>
    <FeaturedService></FeaturedService>
    <MakeAppointment></MakeAppointment>
    <Testimonials></Testimonials>
    </>
    
    );
};

export default Home;