import React from 'react';

const Footer = () => {
    return (
        <div className="container-fluid bg-dark text-body footer mt-5 pt-5 px-0 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-light mb-4">Address</h3>
                        <p className="mb-2"><i className="fa fa-map-marker-alt text-primary me-3"></i>123 Street, New York, USA</p>
                        <p className="mb-2"><i className="fa fa-phone-alt text-primary me-3"></i>+012 345 67890</p>
                        <p className="mb-2"><i className="fa fa-envelope text-primary me-3"></i>info@example.com</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-square btn-outline-body me-1" href="https://twitter.com"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-square btn-outline-body me-1" href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square btn-outline-body me-1" href="https://youtube.com"><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-square btn-outline-body me-0" href="https://linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-light mb-4">Services</h3>
                        <a className="btn btn-link" href="/service.html">Architecture</a>
                        <a className="btn btn-link" href="/service.html">3D Animation</a>
                        <a className="btn btn-link" href="/service.html">House Planning</a>
                        <a className="btn btn-link" href="/service.html">Interior Design</a>
                        <a className="btn btn-link" href="/service.html">Construction</a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-light mb-4">Quick Links</h3>
                        <a className="btn btn-link" href="/about.html">About Us</a>
                        <a className="btn btn-link" href="/contact.html">Contact Us</a>
                        <a className="btn btn-link" href="/service.html">Our Services</a>
                        <a className="btn btn-link" href="">Terms & Condition</a>
                        <a className="btn btn-link" href="">Support</a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-light mb-4">Newsletter</h3>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
                            <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text"
                                placeholder="Your email" />
                            <button type="button"
                                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a href="/">Your Site Name</a>, All Right Reserved.
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            Designed By <a href="https://htmlcodex.com">HTML Codex</a>
                            <br /> Distributed By: <a className="border-bottom" href="https://themewagon.com"
                                target="_blank" rel="noopener noreferrer">ThemeWagon</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
