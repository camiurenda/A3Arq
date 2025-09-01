import React from 'react';

const Appointment = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <h4 className="section-title">Reunión</h4>
                        <h1 className="display-5 mb-4">Coordina una reunión con nosotras</h1>
                        <p className="mb-4"> Nos contactaremos a la brevedad de haber recibido tu solicitud
                        </p>
                        <div className="row g-4">
                            <div className="col-12">
                                <div className="d-flex">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-light"
                                        style={{ width: '65px', height: '65px' }}>
                                        <i className="fa fa-2x fa-phone-alt text-primary"></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className="mb-2">Llámanos ahora</p>
                                        <h3 className="mb-0">+549 353 4202482
                                        
                                        </h3>
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
                                        <p className="mb-2">envíanos un Mail </p>
                                        <h3 className="mb-0">arqa3.estudio@gmail.com</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="row g-3">
                            <div className="col-12 col-sm-6">
                                <input type="text" className="form-control" placeholder="Tu nombre" style={{ height: '55px' }} />
                            </div>
                            <div className="col-12 col-sm-6">
                                <input type="email" className="form-control" placeholder="Tu Email" style={{ height: '55px' }} />
                            </div>
                            <div className="col-12 col-sm-6">
                                <input type="text" className="form-control" placeholder="Tu teléfono" style={{ height: '55px' }} />
                            </div>
                            <div className="col-12 col-sm-6">
                                <select className="form-select" style={{ height: '55px' }}>
                                    <option selected>Elige un servicio</option>
                                    <option value="1">Proyecto de Arquitectura</option>
                                    <option value="2">Remodelaciones - Ampliaciones</option>
                                    <option value="3">Relevamientos</option>
                                    <option value="4">Diseño de Interiores</option>
                                    <option value="5">Paisajismo</option>
                                    <option value="6">Dirección de Obra</option>


                                </select>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="date" id="date" data-target-input="nearest">
                                    <input type="text" className="form-control datetimepicker-input" placeholder="Elige una fecha"
                                        data-target="#date" data-toggle="datetimepicker" style={{ height: '55px' }} />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="time" id="time" data-target-input="nearest">
                                    <input type="text" className="form-control datetimepicker-input" placeholder="Elige una fecha"
                                        data-target="#time" data-toggle="datetimepicker" style={{ height: '55px' }} />
                                </div>
                            </div>
                            <div className="col-12">
                                <textarea className="form-control" rows="5" placeholder="Mensaje"></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">Agenda una Reunión</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;
