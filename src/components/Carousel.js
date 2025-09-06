import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MainCarousel = () => {
    const renderThumbs = (children) => {
        return children.map((item, index) => {
            const imgSrc = item.props['data-dot'].match(/src='([^']*)'/)[1];
            return (
                <img src={imgSrc} alt={`Thumbnail ${index}`} key={index} />
            );
        });
    };

    return (
        <div className="carousel-wrapper">
            <Carousel
                showArrows={false}
                showStatus={false}
                showThumbs={true}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
                transitionTime={1500}
                renderThumbs={renderThumbs}
                className="header-carousel"
            >
                <div className="owl-carousel-item position-relative" data-dot="<img src='img/carousel-1.jpg'>" style={{ height: '100%' }}>
                    <img className="img-fluid" src="img/1.jpg" alt="" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                    <div className="owl-carousel-inner">
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-10 col-lg-8 carousel-text">
                                    <h1 className="display-1 text-white animated slideInDown">Descubre Nuestros Proyectos Innovadores</h1>
                                    <p className="fs-5 fw-medium text-white mb-4 pb-3">Explora nuestra galería de proyectos arquitectónicos que transforman espacios y superan expectativas.</p>
                                    <a href="/project.html#project1" className="btn btn-primary py-3 px-5 animated slideInLeft">Ver Proyectos</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="owl-carousel-item position-relative" data-dot="<img src='img/carousel-2.jpg'>" style={{ height: '100%' }}>
                    <img className="img-fluid" src="img/2.jpg" alt="" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                    <div className="owl-carousel-inner">
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-10 col-lg-8 carousel-text">
                                    <h1 className="display-1 text-white animated slideInDown">Soluciones en Módulos Habitacionales</h1>
                                    <p className="fs-5 fw-medium text-white mb-4 pb-3">Diseñamos y construimos módulos habitacionales modernos, funcionales y adaptados a tus necesidades.</p>
                                    <a href="/modules.html#module1" className="btn btn-primary py-3 px-5 animated slideInLeft">Conocer Módulos</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="owl-carousel-item position-relative" data-dot="<img src='img/carousel-3.jpg'>" style={{ height: '100%' }}>
                    <img className="img-fluid" src="img/3.jpg" alt="" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                    <div className="owl-carousel-inner">
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-10 col-lg-8 carousel-text">
                                    <h1 className="display-1 text-white animated slideInDown">Conócenos: Tus Socias en Arquitectura</h1>
                                    <p className="fs-5 fw-medium text-white mb-4 pb-3">Somos un equipo de arquitectas apasionadas, comprometidas con la excelencia y la innovación en cada diseño.</p>
                                    <a href="/about.html#about1" className="btn btn-primary py-3 px-5 animated slideInLeft">Sobre Nosotras</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default MainCarousel;
