import React from 'react';
import SimpleCarousel from './SimpleCarousel';
import Facts from './Facts';

const Home = () => {
    return (
        <div className="home-page">
            <section className="hero-section">
                <SimpleCarousel />
            </section>
            
            <section className="facts-section" style={{ marginTop: '60px', marginBottom: '50px' }}>
                <Facts />
            </section>
        </div>
    );
};

export default Home;