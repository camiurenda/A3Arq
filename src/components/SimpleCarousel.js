import React, { useState, useEffect } from 'react';

const SimpleCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        {
            id: 1,
            image: 'img/1.jpg',
            title: 'Descubre Nuestros Proyectos Innovadores',
            description: 'Explora nuestra galería de proyectos arquitectónicos que transforman espacios y superan expectativas.',
            buttonText: 'Ver Proyectos',
            buttonLink: '/project.html#project1'
        },
        {
            id: 2,
            image: 'img/2.jpg',
            title: 'Soluciones en Módulos Habitacionales',
            description: 'Diseñamos y construimos módulos habitacionales modernos, funcionales y adaptados a tus necesidades.',
            buttonText: 'Conocer Módulos',
            buttonLink: '/modules.html#module1'
        },
        {
            id: 3,
            image: 'img/3.jpg',
            title: 'Conócenos: Tus Socias en Arquitectura',
            description: 'Somos un equipo de arquitectas apasionadas, comprometidas con la excelencia y la innovación en cada diseño.',
            buttonText: 'Sobre Nosotras',
            buttonLink: '/about.html#about1'
        }
    ];

    // Auto-play functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const goToPrevious = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    return (
        <div className="simple-carousel">
            <div className="carousel-container">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="carousel-overlay">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-10 col-md-12">
                                        <div className="carousel-content">
                                            <h1 className="carousel-title wow fadeInDown" data-wow-delay="0.1s">
                                                {slide.title}
                                            </h1>
                                            <p className="carousel-description wow fadeInUp" data-wow-delay="0.3s">
                                                {slide.description}
                                            </p>
                                            <a
                                                href={slide.buttonLink}
                                                className="btn btn-primary carousel-btn wow fadeInLeft"
                                                data-wow-delay="0.5s"
                                            >
                                                {slide.buttonText}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation arrows */}
            <button className="carousel-nav prev" onClick={goToPrevious} aria-label="Previous slide">
                <i className="fas fa-chevron-left"></i>
            </button>
            <button className="carousel-nav next" onClick={goToNext} aria-label="Next slide">
                <i className="fas fa-chevron-right"></i>
            </button>

            {/* Dots navigation */}
            <div className="carousel-dots">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Thumbnails */}
            <div className="carousel-thumbnails">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`thumbnail ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    >
                        <img src={slide.image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SimpleCarousel;