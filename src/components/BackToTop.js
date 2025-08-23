import React, { useEffect } from 'react';

const BackToTop = () => {
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                document.querySelector('.back-to-top').style.display = 'block';
            } else {
                document.querySelector('.back-to-top').style.display = 'none';
            }
        };

        const handleClick = (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        window.addEventListener('scroll', handleScroll);
        document.querySelector('.back-to-top').addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.querySelector('.back-to-top').removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <a href="#top" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
    );
};

export default BackToTop;
