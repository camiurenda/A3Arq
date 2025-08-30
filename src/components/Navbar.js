import React, { useEffect } from 'react';

const Navbar = () => {
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.sticky-top');
            if (navbar) {
                if (window.scrollY > 300) {
                    navbar.classList.add('shadow-sm');
                    navbar.style.top = '0px';
                } else {
                    navbar.classList.remove('shadow-sm');
                    navbar.style.top = '-100px';
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top py-lg-0 px-lg-5 wow fadeIn"
            data-wow-delay="0.1s">
            <a href="/" className="navbar-brand ms-4 ms-lg-0">
                <img src="img/LOGO PNG BLANCO.png" alt="Logo" style={{ height: '40px' }} />
            </a>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <a href="/" className="nav-item nav-link active">Home</a>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Proyectos</a>
                        <div className="dropdown-menu border-0 m-0">
                            <a href="/project.html#project1" className="dropdown-item">Casa GC</a>
                            <a href="/project.html#project2" className="dropdown-item">Casa PB</a>
                            <a href="/project.html#project3" className="dropdown-item">Casa Bio</a>
                            <a href="/project.html#project4" className="dropdown-item">Edificio de oficinas</a>
                            <a href="/project.html#project5" className="dropdown-item">Proyecto Las Dalias</a>
                            <a href="/project.html#project6" className="dropdown-item">Casa FG</a>
                        </div>
                    </div>
                    <a href="#" className="nav-item nav-link">Módulos Habitables</a>
                    <a href="/service.html" className="nav-item nav-link">Servicios</a>
                    <a href="/about.html" className="nav-item nav-link">Sobre nosotras</a>
                    <a href="/contact.html" className="nav-item nav-link">Contacto</a>
                    <a href="/appointment.html" className="nav-item nav-link">Agenda una reunión</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
