import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

const Testimonial = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                    <h4 className="section-title">Testimonial</h4>
                    <h1 className="display-5 mb-4">Thousands Of Customers Who Trust Us And Our Services</h1>
                </div>
                <Carousel
                    showArrows={false}
                    showStatus={false}
                    showThumbs={true}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={3000}
                    transitionTime={1000}
                    className="testimonial-carousel wow fadeInUp"
                    data-wow-delay="0.1s"
                >
                    <div className="testimonial-item text-center">
                        <img className='img-fluid mx-auto mb-4' src='img/testimonial-1.jpg' alt='' style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                        <p className="fs-5">Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed
                            sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum
                            justo sea clita.</p>
                        <h3>Client Name</h3>
                        <span className="text-primary">Profession</span>
                    </div>
                    <div className="testimonial-item text-center">
                        <img className='img-fluid mx-auto mb-4' src='img/testimonial-2.jpg' alt='' style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                        <p className="fs-5">Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed
                            sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum
                            justo sea clita.</p>
                        <h3>Client Name</h3>
                        <span className="text-primary">Profession</span>
                    </div>
                    <div className="testimonial-item text-center">
                        <img className='img-fluid mx-auto mb-4' src='img/testimonial-3.jpg' alt='' style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                        <p className="fs-5">Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed
                            sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum
                            justo sea clita.</p>
                        <h3>Client Name</h3>
                        <span className="text-primary">Profession</span>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Testimonial;
