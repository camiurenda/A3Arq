import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

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
                        
                        
                        <div className="d-flex align-items-center mb-5">
                            <div className="d-flex flex-shrink-0 align-items-center justify-content-center border border-5 border-primary"
                                style={{ width: '120px', height: '120px' }} ref={ref}>
                                <h1 className="display-1 mb-n2">
                                    {inView && <CountUp end={+25} duration={2} />}
                                </h1>
                            </div>
                            <div className="ps-4">
                                <h3>Proyectos</h3>
                                <h3>Realizados</h3>
                               
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
