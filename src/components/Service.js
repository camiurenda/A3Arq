import React from 'react';

const Service = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                    <h4 className="section-title">Nuestros Servicios</h4>
                    <h1 className="display-5 mb-4">Nos Enfocamos en Arquitectura Moderna y Diseño de Interiores</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex position-relative text-center h-100">
                            <img className="bg-img" src="img/1proyectosdearquitectura.jpg" alt="" />
                            <div className="service-text p-5">
                                <img className="mb-4" src="img/icons/icon-5.png" alt="Icon" />
                                <h3 className="mb-3">Proyecto de Arquitectura</h3>
                                <p className="mb-4">Diseñamos espacios funcionales y estéticos, adaptados a tus necesidades y visión.</p>
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item d-flex position-relative text-center h-100">
                            <img className="bg-img" src="img/2-remodelaciones-ampliaciones.png" alt="" />
                            <div className="service-text p-5">
                                <img className="mb-4" src="img/icons/icon-9.png" alt="Icon" />
                                <h3 className="mb-3">Remodelaciones - Ampliaciones</h3>
                                <p className="mb-4">Actualizamos y renovamos tus propiedades para mejorar su valor y estética.</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item d-flex position-relative text-center h-100">
                            <img className="bg-img" src="img/relevamiento.png" alt="" />
                            <div className="service-text p-5">
                                <img className="mb-4" src="img/icons/icon-7.png" alt="Icon" />
                                <h3 className="mb-3">Relevamientos</h3>
                                <p className="mb-4">Desarrollamos planos detallados de tu construcción existente.</p>
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex position-relative text-center h-100">
                            <img className="bg-img" src="img/3diseñodeinteriores.jpg" alt="" />
                            <div className="service-text p-5">
                                <img className="mb-4" src="img/icons/icon-8.png" alt="Icon" />
                                <h3 className="mb-3">Diseño de Interiores</h3>
                                <p className="mb-4">Transformamos tus espacios interiores con estilo y funcionalidad.</p>
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item d-flex position-relative text-center h-100">
                            <img className="bg-img" src="img/4Paisajismo.png" alt="" />
                            <div className="service-text p-5">
                                <i className="fa fa-seedling fa-3x text-primary mb-4"></i>
                                <h3 className="mb-3">Paisajismo</h3>
                                <p className="mb-4">Creamos entornos verdes únicos que combinan diseño, armonía y valor agregado.</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item d-flex position-relative text-center h-100">
                            <img className="bg-img" src="img/DIRECCION.png" alt="" />
                            <div className="service-text p-5">
                                <i className="fa fa-hard-hat fa-3x text-primary mb-4"></i>
                                <h3 className="mb-3">Dirección de Obra</h3>
                                <p className="mb-4">Ejecutamos proyectos de construcción con calidad y eficiencia.</p>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
