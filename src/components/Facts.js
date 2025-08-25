import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Facts = () => {
    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.5 });
    const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.5 });
    const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.5 });

    return (
        <div className="container-xxl py-5">
            <div className="container pt-5">
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="fact-item text-center bg-light h-100 p-5 pt-0">
                            <div className="fact-icon">
                                <img src="img/icons/icon-2.png" alt="Icon" />
                            </div>
                            <h3 className="mb-3">Enfoque de Diseño</h3>
                            <p className="mb-0">Nuestro enfoque se centra en la funcionalidad, estética y sostenibilidad, creando espacios que inspiran y perduran.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="fact-item text-center bg-light h-100 p-5 pt-0">
                            <div className="fact-icon">
                                <img src="img/icons/icon-3.png" alt="Icon" />
                            </div>
                            <h3 className="mb-3">Soluciones Innovadoras</h3>
                            <p className="mb-0">Implementamos las últimas tendencias y tecnologías para ofrecerte diseños únicos y eficientes.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="fact-item text-center bg-light h-100 p-5 pt-0">
                            <div className="fact-icon">
                                <img src="img/icons/icon-4.png" alt="Icon" />
                            </div>
                            <h3 className="mb-3">Gestión de Proyectos</h3>
                            <p className="mb-0">Garantizamos una ejecución impecable de cada proyecto, desde la concepción hasta la entrega final, con total transparencia.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facts;
