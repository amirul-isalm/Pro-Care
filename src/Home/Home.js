import React from 'react';
import Carusel from '../Component/Carusel/Carusel';
import Footer from '../Component/Footer/Footer';
import Navigation from '../Component/NavigationBar/Navigation';

const Home = () => {
    return (
      <div>
            <Navigation />
        <Carusel />
        <Footer/>
      </div>
    );
};

export default Home;