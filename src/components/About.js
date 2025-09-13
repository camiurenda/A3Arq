import React from 'react';

const About = () => {

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5">
                    <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                        <h4 className="section-title">Sobre Nosotras</h4>
                        <h1 className="display-5 mb-4">A3 Arquitectas</h1>
                        
                        <div className="row g-4 mb-5">
                            <div className="col-md-4 text-center">
                                <div className="d-flex flex-column align-items-center">
                                    <div className="mb-3">
                                        <img 
                                            className="rounded-circle" 
                                            src="img/jesi.jpg" 
                                            alt="Jesica Cóseres" 
                                            className="rounded-circle team-photo" 
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                    <h3 className="mb-1 fw-bold">Jesica Cóseres</h3>
                                    <p className="text-muted mb-0">Arquitecta</p>
                                </div>
                            </div>
                            <div className="col-md-4 text-center">
                                <div className="d-flex flex-column align-items-center">
                                    <div className="mb-3">
                                        <img 
                                            className="rounded-circle" 
                                            src="img/dai.jpg" 
                                            alt="Daiana Bilbao" 
                                            className="rounded-circle team-photo" 
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                    <h3 className="mb-1 fw-bold">Daiana Bilbao</h3>
                                    <p className="text-muted mb-0">Arquitecta</p>
                                </div>
                            </div>
                            <div className="col-md-4 text-center">
                                <div className="d-flex flex-column align-items-center">
                                    <div className="mb-3">
                                        <img 
                                            className="rounded-circle" 
                                            src="img/luli.jpg" 
                                            alt="Lucía Martínez Ávila" 
                                            className="rounded-circle team-photo" 
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                    <h3 className="mb-1 fw-bold">Lucía Martínez Ávila</h3>
                                    <p className="text-muted mb-0">Arquitecta</p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-5">
                            <p className="lead mb-4">Somos <strong>Jésica, Daiana, y Lucía</strong>, un equipo de tres profesionales formadas en la <span className="text-primary">Universidad Nacional de Córdoba</span>, unidas por la pasión de crear espacios que mejoren la vida de quienes los habitan.</p>
                            
                            <h5 className="text-primary mb-3">Nuestro Proceso</h5>
                            <p className="mb-4">Trabajamos de manera <strong>colaborativa</strong> en todas las etapas: desde el <em>primer encuentro con el cliente</em> hasta el <em>seguimiento de obra</em>, asegurando un acompañamiento <strong>cercano, técnico y humano</strong>.</p>
                            
                            <h5 className="text-primary mb-3">Nuestra Filosofía</h5>
                            <p className="mb-0">Creemos en una arquitectura <strong>funcional, sensible y realista</strong>, que combina <span className="text-primary">creatividad</span> con <span className="text-primary">planificación</span>, y diseño con atención al detalle. Nuestro enfoque está puesto en la <strong>sustentabilidad</strong> y el uso responsable de los recursos, incorporando estrategias de <em>diseño pasivo</em> que optimizan el confort y reducen el impacto ambiental.</p>
                        </div>
                        
                        <div className="row g-4">
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
