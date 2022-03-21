import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import AllTest from '../AllTest/AllTest';
import Carusel from '../Carusel/Carusel';
import Doctors from '../Doctors/Doctors';
import Footer from '../Footer/Footer';
import Navigation from '../NavigationBar/Navigation';

const Home = () => {
    return (
      <div>
            <Navigation />
        <Carusel />
        <AboutUs/>
        <Doctors />
        <AllTest/>
        <Footer/>
      </div>
    );
};

export default Home;