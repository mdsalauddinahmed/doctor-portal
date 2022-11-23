import React from 'react';
import FeaturedService from '../FeaturedService/FeaturedService';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
    <>
    <Header></Header>
    <Services></Services>
    <FeaturedService></FeaturedService>
    </>
    
    );
};

export default Home;