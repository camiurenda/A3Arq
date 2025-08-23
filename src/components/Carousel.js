import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

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
        <div className="container-fluid p-0 pb-5 wow fadeIn" data-wow-delay="0.1s">
            <Carousel
                showArrows={false}
                showStatus={false}
                showThumbs={true}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
                transitionTime={1500}
                renderThumbs={renderThumbs}
                className="header-carousel position-relative"
            >
                <div className="owl-carousel-item position-relative" data-dot="<img src='img/carousel-1.jpg'>">
                    <img className="img-fluid" src="img/carousel-1.jpg" alt="" />
                    <div className="owl-carousel-inner">
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-10 col-lg-8">
                                    <h1 className="display-1 text-white animated slideInDown">Best Architecture And Interior
                                        Design Services</h1>
                                    <p className="fs-5 fw-medium text-white mb-4 pb-3">Vero elitr justo clita lorem. Ipsum dolor
                                        at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea
                                        elitr.</p>
                                    <a href="/about.html" className="btn btn-primary py-3 px-5 animated slideInLeft">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="owl-carousel-item position-relative" data-dot="<img src='img/carousel-2.jpg'>">
                    <img className="img-fluid" src="img/carousel-2.jpg" alt="" />
                    <div className="owl-carousel-inner">
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-10 col-lg-8">
                                    <h1 className="display-1 text-white animated slideInDown">Best Architecture And Interior
                                        Design Services</h1>
                                    <p className="fs-5 fw-medium text-white mb-4 pb-3">Vero elitr justo clita lorem. Ipsum dolor
                                        at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea
                                        elitr.</p>
                                    <a href="/about.html" className="btn btn-primary py-3 px-5 animated slideInLeft">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="owl-carousel-item position-relative" data-dot="<img src='img/carousel-3.jpg'>">
                    <img className="img-fluid" src="img/carousel-3.jpg" alt="" />
                    <div className="owl-carousel-inner">
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-10 col-lg-8">
                                    <h1 className="display-1 text-white animated slideInDown">Best Architecture And Interior
                                        Design Services</h1>
                                    <p className="fs-5 fw-medium text-white mb-4 pb-3">Vero elitr justo clita lorem. Ipsum dolor
                                        at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea
                                        elitr.</p>
                                    <a href="/about.html" className="btn btn-primary py-3 px-5 animated slideInLeft">Read More</a>
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
