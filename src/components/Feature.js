import React from 'react';

const Feature = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <h4 className="section-title">¡Por Qué Elegirnos!</h4>
                        <h1 className="display-5 mb-4">¿Por Qué Deberías Confiar en Nosotros? ¡Conoce Más!</h1>
                        <p className="mb-4">En Arquitectas, combinamos experiencia, creatividad y compromiso para ofrecerte soluciones arquitectónicas de vanguardia. Nuestra dedicación a la excelencia y la satisfacción del cliente nos distingue.</p>
                        <div className="row g-4">
                            <div className="col-12">
                                <div className="d-flex align-items-start">
                                    <img className="flex-shrink-0" src="img/icons/icon-2.png" alt="Icon" />
                                    <div className="ms-4">
                                        <h3>Enfoque de Diseño</h3>
                                        <p className="mb-0">Nuestro enfoque se centra en la funcionalidad, estética y sostenibilidad, creando espacios que inspiran y perduran.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-start">
                                    <img className="flex-shrink-0" src="img/icons/icon-3.png" alt="Icon" />
                                    <div className="ms-4">
                                        <h3>Soluciones Innovadoras</h3>
                                        <p className="mb-0">Implementamos las últimas tendencias y tecnologías para ofrecerte diseños únicos y eficientes.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-start">
                                    <img className="flex-shrink-0" src="img/icons/icon-4.png" alt="Icon" />
                                    <div className="ms-4">
                                        <h3>Gestión de Proyectos</h3>
                                        <p className="mb-0">Garantizamos una ejecución impecable de cada proyecto, desde la concepción hasta la entrega final, con total transparencia.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="feature-img">
                            <img className="img-fluid" src="img/about-2.jpg" alt="" />
                            <img className="img-fluid" src="img/about-1.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;
