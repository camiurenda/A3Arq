import React from 'react';

const Footer = () => {
    return (
        <div className="container-fluid bg-dark text-body footer mt-5 pt-5 px-0 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-light mb-4">Dirección</h3>
                        <p className="mb-2"><i className="fa fa-map-marker-alt text-primary me-3"></i>Villa María, Córdoba</p>
                        <p className="mb-2"><i className="fa fa-map-marker-alt text-primary me-3"></i>Córdoba Capital, Córdoba</p>
                        <p className="mb-2"><i className="fa fa-map-marker-alt text-primary me-3"></i>La Playosa, Córdoba</p>
                        <p className="mb-2"><i className="fa fa-phone-alt text-primary me-3"></i>+54 353 420 2482 (Lucía - Villa María)</p>
                        <p className="mb-2"><i className="fa fa-phone-alt text-primary me-3"></i>+54 3537 44 7866 (Daiana - Córdoba)</p>
                        <p className="mb-2"><i className="fa fa-phone-alt text-primary me-3"></i>+54 353 476 9373 (Jésica - La Playosa)</p>
                        <p className="mb-2"><i className="fa fa-envelope text-primary me-3"></i>arqa3.estudio@gmail.com</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-square btn-outline-body me-1" href="https://instagram.com/a3arquitectas" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                            <a className="btn btn-square btn-outline-body me-1" href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square btn-outline-body me-1" href="https://youtube.com"><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-square btn-outline-body me-0" href="https://linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-light mb-4">Servicios</h3>
                        <a className="btn btn-link" href="/service.html">Arquitectura</a>
                        <a className="btn btn-link" href="/service.html">Remodelaciones - Ampliaciones</a>
                        <a className="btn btn-link" href="/service.html">Relevamientos</a>
                        <a className="btn btn-link" href="/service.html">Diseño de Interiores</a>
                        <a className="btn btn-link" href="/service.html">Paisajismo</a>
                        <a className="btn btn-link" href="/service.html">Dirección de Obra</a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-light mb-4">Enlaces Rápidos</h3>
                        <a className="btn btn-link" href="/about.html">Sobre Nosotras</a>
                        <a className="btn btn-link" href="/contact.html">Contáctanos</a>
                        <a className="btn btn-link" href="/service.html">Nuestros Servicios</a>
                        <a className="btn btn-link" href="/project.html">Proyectos</a>
                   
                    </div>
                </div>
            </div>
            <div className="container-fluid copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; 2025 <a href="/">Techlabs</a>, Todos los derechos reservados.
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            Diseñado por <a href="https://htmlcodex.com">HTML Codex</a>
                            <br /> Distribuido por: <a className="border-bottom" href="https://themewagon.com"
                                target="_blank" rel="noopener noreferrer">ThemeWagon</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
