import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

const QuinchoLanding = () => {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState('');

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus('');

        // Add timestamp
        const currentTime = new Date().toLocaleString('es-AR', {
            timeZone: 'America/Argentina/Buenos_Aires',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        form.current.elements['time'].value = currentTime;

        try {
            await emailjs.sendForm(
                'service_i3n4lru',
                'template_hm5nuz8',
                form.current,
                'Z-MWx4u3NXlNwSdXf'
            );
            setStatus('success');
            e.target.reset();
            setTimeout(() => setStatus(''), 5000);
        } catch (error) {
            console.error('Error sending email:', error);
            setStatus('error');
            setTimeout(() => setStatus(''), 5000);
        } finally {
            setIsLoading(false);
        }
    };

    const scrollToForm = () => {
        document.getElementById('formulario-quincho').scrollIntoView({
            behavior: 'smooth'
        });
    };

    return (
        <div className="quincho-landing">
            {/* Hero Section */}
            <div className="hero-quincho position-relative" style={{
                minHeight: 'auto',
                background: 'linear-gradient(135deg, #252525 0%, #3d3d3d 100%)',
                overflow: 'hidden'
            }}>
                {/* Background Pattern */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.05,
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(183, 141, 101, 0.5) 35px, rgba(183, 141, 101, 0.5) 70px)'
                }}></div>

                <div className="container position-relative" style={{ zIndex: 2 }}>
                    <div className="row">
                        <div className="col-12 text-center py-4">
                            {/* Badge de Urgencia */}
                            <div className="mb-4 wow fadeInDown" data-wow-delay="0.1s">
                                <span className="badge px-3 py-2" style={{
                                    backgroundColor: '#B78D65',
                                    color: 'white',
                                    fontSize: '0.75rem',
                                    fontWeight: '600',
                                    letterSpacing: '0.5px',
                                    borderRadius: '50px',
                                    boxShadow: '0 4px 15px rgba(183, 141, 101, 0.3)',
                                    display: 'inline-block',
                                    maxWidth: '95%',
                                    textAlign: 'center'
                                }}>
                                    <i className="fa fa-clock me-1"></i>
                                    CUPOS LIMITADOS
                                </span>
                            </div>

                            {/* Título Principal */}
                            <h1 className="display-4 fw-bold text-white mb-3 wow fadeInUp"
                                data-wow-delay="0.2s"
                                style={{
                                    fontFamily: "'Teko', sans-serif",
                                    lineHeight: '1.2'
                                }}>
                                Tu Quincho Soñado<br/>
                                <span style={{ color: '#B78D65' }}>Para Este Verano</span>
                            </h1>

                            {/* Subtítulo */}
                            <p className="lead text-white mb-4 wow fadeInUp"
                               data-wow-delay="0.3s"
                               style={{
                                   fontSize: '1.1rem',
                                   maxWidth: '800px',
                                   margin: '0 auto'
                               }}>
                                Diseñamos y construimos tu espacio ideal para disfrutar con familia y amigos
                            </p>

                            {/* Ventajas Minimalistas */}
                            <div className="mb-4 wow fadeInUp" data-wow-delay="0.35s" style={{
                                maxWidth: '600px',
                                margin: '0 auto'
                            }}>
                                <div className="d-flex flex-column gap-2">
                                    <div className="d-flex align-items-center justify-content-start text-start px-3">
                                        <i className="fa fa-bolt" style={{
                                            color: '#B78D65',
                                            fontSize: '1.2rem',
                                            minWidth: '30px'
                                        }}></i>
                                        <div className="ms-3">
                                            <span className="text-white" style={{ fontSize: '0.95rem', fontWeight: '500' }}>
                                                Tiempo récord
                                            </span>
                                            <span className="text-white-50" style={{ fontSize: '0.85rem' }}> - Listo en semanas</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-start text-start px-3">
                                        <i className="fa fa-expand-arrows-alt" style={{
                                            color: '#B78D65',
                                            fontSize: '1.2rem',
                                            minWidth: '30px'
                                        }}></i>
                                        <div className="ms-3">
                                            <span className="text-white" style={{ fontSize: '0.95rem', fontWeight: '500' }}>
                                                Versátil y ampliable
                                            </span>
                                            <span className="text-white-50" style={{ fontSize: '0.85rem' }}> - Crece con vos y tu familia</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-start text-start px-3">
                                        <i className="fa fa-truck" style={{
                                            color: '#B78D65',
                                            fontSize: '1.2rem',
                                            minWidth: '30px'
                                        }}></i>
                                        <div className="ms-3">
                                            <span className="text-white" style={{ fontSize: '0.95rem', fontWeight: '500' }}>
                                                Transporte fácil
                                            </span>
                                            <span className="text-white-50" style={{ fontSize: '0.85rem' }}> - Se instala y se muda donde necesites</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Imagen de Quincho */}
                            <div className="mb-3 wow fadeInUp" data-wow-delay="0.4s">
                                <div style={{
                                    borderRadius: '15px',
                                    overflow: 'hidden',
                                    border: '3px solid #B78D65',
                                    maxWidth: '500px',
                                    margin: '0 auto',
                                    boxShadow: '0 8px 25px rgba(183, 141, 101, 0.3)'
                                }}>
                                    <img
                                        src="/img/quincho.png"
                                        alt="Quincho modular A3 Arquitectura"
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            display: 'block'
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Promesa de Contacto */}
                            <div className="mb-3 wow fadeInUp" data-wow-delay="0.5s">
                                <p className="text-white" style={{ fontSize: '1.1rem', fontWeight: '500', marginBottom: 0 }}>
                                    <i className="fa fa-check-circle me-2" style={{ color: '#B78D65' }}></i>
                                    Te contactamos en menos de 24 horas
                                </p>
                            </div>

                            {/* CTA Button */}
                            <button
                                onClick={scrollToForm}
                                className="btn btn-lg px-5 py-3 wow fadeInUp"
                                data-wow-delay="0.6s"
                                style={{
                                    backgroundColor: '#B78D65',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '50px',
                                    fontSize: '1.2rem',
                                    fontWeight: '600',
                                    boxShadow: '0 8px 25px rgba(183, 141, 101, 0.4)',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'translateY(-3px)';
                                    e.target.style.boxShadow = '0 12px 35px rgba(183, 141, 101, 0.5)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.boxShadow = '0 8px 25px rgba(183, 141, 101, 0.4)';
                                }}
                            >
                                Quiero mi quincho!
                                <i className="fa fa-arrow-down ms-2"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sección de Formulario */}
            <div id="formulario-quincho" className="py-5" style={{ backgroundColor: 'white' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-8">
                            <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                                <h2 className="display-5 mb-3" style={{
                                    color: '#252525',
                                    fontFamily: "'Teko', sans-serif"
                                }}>
                                    Completá el Formulario
                                </h2>
                                <p className="lead text-muted">
                                    Contanos sobre tu proyecto y empecemos a diseñar juntos
                                </p>
                            </div>

                            <form ref={form} onSubmit={sendEmail} className="wow fadeInUp" data-wow-delay="0.2s">
                                <input type="hidden" name="time" />
                                <input type="hidden" name="title" value="Consulta Quincho - Campaña Meta" />

                                <div className="row g-3">
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                placeholder="Tu Nombre"
                                                required
                                                style={{ borderColor: '#B78D65' }}
                                            />
                                            <label htmlFor="name">Tu Nombre</label>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                name="email"
                                                placeholder="Tu Email"
                                                required
                                                style={{ borderColor: '#B78D65' }}
                                            />
                                            <label htmlFor="email">Tu Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="tel"
                                                className="form-control"
                                                id="phone"
                                                name="phone"
                                                placeholder="Tu Teléfono"
                                                required
                                                style={{ borderColor: '#B78D65' }}
                                            />
                                            <label htmlFor="phone">Tu Teléfono</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea
                                                className="form-control"
                                                placeholder="Contanos sobre tu proyecto"
                                                id="message"
                                                name="message"
                                                style={{ height: '150px', borderColor: '#B78D65' }}
                                                required
                                            ></textarea>
                                            <label htmlFor="message">Contanos sobre tu proyecto de quincho</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button
                                            className="btn w-100 py-3"
                                            type="submit"
                                            disabled={isLoading}
                                            style={{
                                                backgroundColor: '#B78D65',
                                                color: 'white',
                                                fontSize: '1.1rem',
                                                fontWeight: '600',
                                                borderRadius: '10px',
                                                border: 'none',
                                                transition: 'all 0.3s ease'
                                            }}
                                        >
                                            {isLoading ? 'Enviando...' : 'Quiero Mi Quincho'}
                                        </button>
                                    </div>
                                </div>

                                {status === 'success' && (
                                    <div className="alert alert-success mt-3" role="alert">
                                        <i className="fa fa-check-circle me-2"></i>
                                        ¡Mensaje enviado con éxito! Nos contactaremos en menos de 24 horas.
                                    </div>
                                )}
                                {status === 'error' && (
                                    <div className="alert alert-danger mt-3" role="alert">
                                        <i className="fa fa-exclamation-circle me-2"></i>
                                        Hubo un error al enviar el mensaje. Por favor, intentá nuevamente.
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sección de Conocer Más */}
            <div className="py-5 text-center" style={{ backgroundColor: '#252525' }}>
                <div className="container">
                    <div className="wow fadeInUp" data-wow-delay="0.1s">
                        <p className="text-white mb-3" style={{ fontSize: '1.1rem' }}>
                            ¿Querés conocer más sobre nuestros proyectos?
                        </p>
                        <Link
                            to="/"
                            className="btn btn-outline-light px-4 py-2"
                            style={{
                                borderRadius: '50px',
                                borderWidth: '2px',
                                borderColor: '#B78D65',
                                color: '#B78D65',
                                fontWeight: '600',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#B78D65';
                                e.target.style.color = 'white';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'transparent';
                                e.target.style.color = '#B78D65';
                            }}
                        >
                            Visitá Nuestro Sitio Web
                            <i className="fa fa-arrow-right ms-2"></i>
                        </Link>
                    </div>

                    <div className="mt-5 wow fadeInUp" data-wow-delay="0.2s">
                        <p className="text-white-50 mb-2">
                            <i className="fa fa-map-marker-alt me-2" style={{ color: '#B78D65' }}></i>
                            Villa María, Córdoba, Argentina
                        </p>
                        <p className="text-white-50 mb-2">
                            <i className="fa fa-envelope me-2" style={{ color: '#B78D65' }}></i>
                            arqa3.estudio@gmail.com
                        </p>
                        <p className="text-white-50 mb-0">
                            <i className="fab fa-instagram me-2" style={{ color: '#B78D65' }}></i>
                            @a3arquitectas
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuinchoLanding;
