import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
            <Link to="/" className="navbar-brand ms-4 ms-lg-0">
                <img src="img/LOGO PNG BLANCO.png" alt="A3 Arquitectas Logo" style={{ height: '40px' }} />
            </Link>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <Link to="/" className="nav-item nav-link active">Home</Link>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Proyectos</a>
                        <div className="dropdown-menu border-0 m-0">
                            <Link to="/project#project1" className="dropdown-item">Casa GC</Link>
                            <Link to="/project#project2" className="dropdown-item">Casa PB</Link>
                            <Link to="/project#project3" className="dropdown-item">Casa Bio</Link>
                            <Link to="/project#project4" className="dropdown-item">Edificio de oficinas</Link>
                            <Link to="/project#project5" className="dropdown-item">Proyecto Las Dalias</Link>
                            <Link to="/project#project6" className="dropdown-item">Casa FG</Link>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Módulos Habitables</a>
                        <div className="dropdown-menu border-0 m-0">
                            <Link to="/modules#module1" className="dropdown-item">Vivienda 1 Dormitorio</Link>
                            <Link to="/modules#module2" className="dropdown-item">Vivienda 2 Dormitorios</Link>
                            <Link to="/modules#module3" className="dropdown-item">Oficina</Link>
                            <Link to="/modules#module4" className="dropdown-item">Local</Link>
                            <Link to="/modules#module5" className="dropdown-item">Quincho</Link>
                            <Link to="/modules#module6" className="dropdown-item">Depósito</Link>
                        </div>
                    </div>
                    <Link to="/service" className="nav-item nav-link">Servicios</Link>
                    <Link to="/about" className="nav-item nav-link">Sobre nosotras</Link>
                    <Link to="/contact" className="nav-item nav-link contact-btn">CONTACTO</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
