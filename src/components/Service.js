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
                            <img className="bg-img" src="img/service-1.jpg" alt="" />
                            <div className="service-text p-5">
                                <img className="mb-4" src="img/icons/icon-5.png" alt="Icon" />
                                <h3 className="mb-3">Arquitectura</h3>
                                <p className="mb-4">Diseñamos espacios funcionales y estéticos, adaptados a tus necesidades y visión.</p>
                                <a className="btn" href="/service.html"><i className="fa fa-plus text-primary me-3"></i>Leer Más</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item d-flex position-relative text-center h-100">
                            <img className="bg-img" src="img/service-2.jpg" alt="" />
                            <div className="service-text p-5">
                                <img className="mb-4" src="img/icons/icon-6.png" alt="Icon" />
                                <h3 className="mb-3">Renders 3D</h3>
                                <p className="mb-4">Creamos visualizaciones realistas de tus proyectos antes de su construcción.</p>
                                <a className="btn" href="/service.html"><i className="fa fa-plus text-primary me-3"></i>Leer Más</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item d-flex position-relative text-center h-100">
                            <img className="bg-img" src="img/service-3.jpg" alt="" />
                            <div className="service-text p-5">
                                <img className="mb-4" src="img/icons/icon-7.png" alt="Icon" />
                                <h3 className="mb-3">Planificación de Viviendas</h3>
                                <p className="mb-4">Desarrollamos planos y diseños detallados para tu hogar ideal.</p>
                                <a className="btn" href="/service.html"><i className="fa fa-plus text-primary me-3"></i>Leer Más</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex position-relative text-center h-100">
                            <img className="bg-img" src="img/service-4.jpg" alt="" />
                            <div className="service-text p-5">
                                <img className="mb-4" src="img/icons/icon-8.png" alt="Icon" />
                                <h3 className="mb-3">Diseño de Interiores</h3>
                                <p className="mb-4">Transformamos tus espacios interiores con estilo y funcionalidad.</p>
                                <a className="btn" href="/service.html"><i className="fa fa-plus text-primary me-3"></i>Leer Más</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item d-flex position-relative text-center h-100">
                            <img className="bg-img" src="img/service-5.jpg" alt="" />
                            <div className="service-text p-5">
                                <img className="mb-4" src="img/icons/icon-9.png" alt="Icon" />
                                <h3 className="mb-3">Remodelación</h3>
                                <p className="mb-4">Actualizamos y renovamos tus propiedades para mejorar su valor y estética.</p>
                                <a className="btn" href="/service.html"><i className="fa fa-plus text-primary me-3"></i>Leer Más</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item d-flex position-relative text-center h-100">
                            <img className="bg-img" src="img/service-6.jpg" alt="" />
                            <div className="service-text p-5">
                                <img className="mb-4" src="img/icons/icon-10.png" alt="Icon" />
                                <h3 className="mb-3">Construcción</h3>
                                <p className="mb-4">Ejecutamos proyectos de construcción con calidad y eficiencia.</p>
                                <a className="btn" href="/service.html"><i className="fa fa-plus text-primary me-3"></i>Leer Más</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
