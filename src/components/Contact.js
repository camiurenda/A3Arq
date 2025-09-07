import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState(''); 

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus('');

        // Agregar timestamp automático
        const timeInput = form.current.querySelector('input[name="time"]');
        if (timeInput) {
            timeInput.value = new Date().toLocaleString('es-AR');
        }

        try {
            await emailjs.sendForm(
                'service_i3n4lru',
                'template_hm5nuz8', 
                form.current,
                'Z-MWx4u3NXlNwSdXf'
            );
            setStatus('success');
            form.current.reset();
        } catch (error) {
            console.error('Error:', error);
            setStatus('error');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <h4 className="section-title">Contacto</h4>
                        <h1 className="display-5 mb-4">Contáctanos</h1>
                        <p className="mb-4">
                            Estamos aquí para ayudarte a hacer realidad tu proyecto. No dudes en contactarnos 
                            para cualquier consulta sobre nuestros servicios de arquitectura.
                        </p>
                        
                        <div className="row g-4">
                            <div className="col-12">
                                <div className="d-flex">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-light"
                                        style={{ width: '65px', height: '65px' }}>
                                        <i className="fa fa-2x fa-map-marker-alt text-primary"></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className="mb-2">Nuestra oficina</p>
                                        <h5 className="mb-0">Villa María, Córdoba, Argentina</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-light"
                                        style={{ width: '65px', height: '65px' }}>
                                        <i className="fa fa-2x fa-phone-alt text-primary"></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className="mb-2">Llámanos</p>
                                        <h5 className="mb-0">+549 353 4202482 (Lucía)</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-light"
                                        style={{ width: '65px', height: '65px' }}>
                                        <i className="fa fa-2x fa-envelope-open text-primary"></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className="mb-2">Envíanos un email</p>
                                        <h5 className="mb-0">arqa3.estudio@gmail.com</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-light"
                                        style={{ width: '65px', height: '65px' }}>
                                        <i className="fa fa-2x fa-clock text-primary"></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className="mb-2">Horarios de atención</p>
                                        <h5 className="mb-0">Lun - Vie: 9:00 AM - 18:00 PM</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="row g-3">
                                <div className="col-12 col-sm-6">
                                    <input 
                                        type="text" 
                                        name="name"
                                        className="form-control" 
                                        placeholder="Tu nombre" 
                                        style={{ height: '55px' }}
                                        required
                                    />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input 
                                        type="email" 
                                        name="email"
                                        className="form-control" 
                                        placeholder="Tu email" 
                                        style={{ height: '55px' }}
                                        required
                                    />
                                </div>
                                <div className="col-12">
                                    <input 
                                        type="text" 
                                        name="title"
                                        className="form-control" 
                                        placeholder="Asunto" 
                                        style={{ height: '55px' }}
                                        required
                                    />
                                </div>
                                <div className="col-12">
                                    <textarea 
                                        name="message"
                                        className="form-control" 
                                        rows="5" 
                                        placeholder="Cuéntanos sobre tu proyecto..."
                                        required
                                    ></textarea>
                                </div>
                                
                                <input type="hidden" name="time" />
                                
                                {status === 'success' && (
                                    <div className="col-12">
                                        <div className="alert alert-success">
                                            ¡Mensaje enviado correctamente! Te contactaremos pronto.
                                        </div>
                                    </div>
                                )}
                                
                                {status === 'error' && (
                                    <div className="col-12">
                                        <div className="alert alert-danger">
                                            Error al enviar el mensaje. Por favor intenta nuevamente.
                                        </div>
                                    </div>
                                )}
                                
                                <div className="col-12">
                                    <button 
                                        className="btn btn-primary w-100 py-3" 
                                        type="submit"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                
                <div className="row mt-5">
                    <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="bg-light rounded p-4">
                            <div className="row g-4">
                                <div className="col-md-4 text-center">
                                    <div className="d-flex flex-column align-items-center">
                                        <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-3"
                                            style={{ width: '80px', height: '80px' }}>
                                            <i className="fa fa-2x fa-users text-white"></i>
                                        </div>
                                        <h5 className="mb-2">Reuniones</h5>
                                        <p className="mb-0">Nos adaptamos a tu ubicación</p>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center">
                                    <div className="d-flex flex-column align-items-center">
                                        <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-3"
                                            style={{ width: '80px', height: '80px' }}>
                                            <i className="fa fa-2x fa-laptop text-white"></i>
                                        </div>
                                        <h5 className="mb-2">Consultas Online</h5>
                                        <p className="mb-0">También trabajamos de forma virtual</p>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center">
                                    <div className="d-flex flex-column align-items-center">
                                        <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-3"
                                            style={{ width: '80px', height: '80px' }}>
                                            <i className="fab fa-2x fa-instagram text-white"></i>
                                        </div>
                                        <h5 className="mb-2">Síguenos</h5>
                                        <p className="mb-0">
                                            <a href="https://instagram.com/a3arquitectas" 
                                               target="_blank" 
                                               rel="noopener noreferrer"
                                               className="text-decoration-none text-dark">
                                                @a3arquitectas
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;