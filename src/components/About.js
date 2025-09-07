import React from 'react';

const About = () => {

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div className="about-img">
        
                        <img className="img-fluid about-a3-img" src="img/a3.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <h4 className="section-title">Sobre Nosotras</h4>
                        <h1 className="display-5 mb-4">A3 Arquitectas</h1>
                        <p>Somos Lucía, Jésica y Daiana, un equipo de tres profesionales formadas en la Universidad Nacional de Córdoba, unidas por la pasión de crear espacios que mejoren la vida de quienes los habitan.
                            
                           Trabajamos de manera colaborativa en todas las etapas: desde el primer encuentro con el cliente hasta el seguimiento de obra, asegurando un acompañamiento cercano, técnico y humano.

                           Creemos en una arquitectura funcional, sensible y realista, que combina creatividad con planificación, y diseño con atención al detalle. Nuestro enfoque está puesto en la sustentabilidad y el uso responsable de los recursos, incorporando estrategias de diseño pasivo que optimizan el confort y reducen el impacto ambiental.</p>
                        
                        
                        <div className="row g-4 mb-4">
                            <div className="col-md-4 text-center">
                                <div className="d-flex flex-column align-items-center">
                                    <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-3"
                                        style={{ width: '80px', height: '80px' }}>
                                        <i className="fa fa-leaf text-white fa-2x"></i>
                                    </div>
                                    <h5 className="mb-2">Sustentabilidad</h5>
                                    <p className="text-center mb-0">Diseño responsable con el medio ambiente</p>
                                </div>
                            </div>
                            <div className="col-md-4 text-center">
                                <div className="d-flex flex-column align-items-center">
                                    <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-3"
                                        style={{ width: '80px', height: '80px' }}>
                                        <i className="fa fa-lightbulb text-white fa-2x"></i>
                                    </div>
                                    <h5 className="mb-2">Creatividad</h5>
                                    <p className="text-center mb-0">Soluciones innovadoras y personalizadas</p>
                                </div>
                            </div>
                            <div className="col-md-4 text-center">
                                <div className="d-flex flex-column align-items-center">
                                    <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-3"
                                        style={{ width: '80px', height: '80px' }}>
                                        <i className="fa fa-handshake text-white fa-2x"></i>
                                    </div>
                                    <h5 className="mb-2">Acompañamiento</h5>
                                    <p className="text-center mb-0">Seguimiento cercano en cada etapa</p>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
