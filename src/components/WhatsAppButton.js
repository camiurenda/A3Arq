import React from 'react';

const WhatsAppButton = () => {
    const phoneNumber = '5493534202482'; // Número de Lucía con código de país
    const message = '¡Hola! Me gustaría consultar sobre sus servicios de arquitectura.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Contactar por WhatsApp"
        >
            <i className="fab fa-whatsapp"></i>
        </a>
    );
};

export default WhatsAppButton;
