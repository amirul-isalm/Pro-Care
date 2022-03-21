import React from 'react';
import Carusel from '../Carusel/Carusel';
import Doctors from '../Doctors/Doctors';
import Footer from '../Footer/Footer';
import Navigation from '../NavigationBar/Navigation';

const Home = () => {
    return (
      <div>
            <Navigation />
        <Carusel />
        <Doctors/>
        <Footer/>
      </div>
    );
};

export default Home;