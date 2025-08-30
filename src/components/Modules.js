import React, { useEffect } from 'react';

const modulesData = [
    {
        id: 1,
        name: "Vivienda 1 Dormitorio",
        image: "img/project-1.jpg",
        title: "Vivienda 1 Dormitorio",
        description: "Una solución habitacional completa en un diseño compacto y moderno. Perfecto para parejas o como casa de fin de semana. Incluye cocina integrada y dormitorio.",
        features: [
            { icon: "fa fa-ruler-combined", label: "Superficie", value: "40 m²" },
            { icon: "fa fa-door-open", label: "Ambientes", value: "1 Dormitorio - 1 Baño - Cocina/Comedor" },
            { icon: "fa fa-shipping-fast", label: "Entrega", value: "45 días" },
            { icon: "fa fa-map-marker-alt", label: "Ubicación", value: "Transportable a todo el país" }
        ]
    },
    {
        id: 2,
        name: "Vivienda 2 Dormitorios",
        image: "img/project-2.jpg",
        title: "Vivienda 2 Dormitorios",
        description: "Diseñado para familias, este módulo ofrece un espacio amplio y funcional con todas las comodidades de una casa tradicional. La solución perfecta para una vida moderna y sostenible.",
        features: [
            { icon: "fa fa-ruler-combined", label: "Superficie", value: "60 m²" },
            { icon: "fa fa-door-open", label: "Ambientes", value: "2 Dormitorios - 1 Baño - Cocina/Living/Comedor" },
            { icon: "fa fa-shipping-fast", label: "Entrega", value: "60 días" },
            { icon: "fa fa-map-marker-alt", label: "Ubicación", value: "Transportable a todo el país" }
        ]
    },
    {
        id: 3,
        name: "Oficina",
        image: "img/project-3.jpg",
        title: "Módulo Oficina - Tu Espacio de Trabajo",
        description: "Un espacio de trabajo profesional y privado. Ideal para emprendedores y teletrabajo. Diseño moderno y funcional con todas las conexiones necesarias.",
        features: [
            { icon: "fa fa-ruler-combined", label: "Superficie", value: "15 m²" },
            { icon: "fa fa-door-open", label: "Ambientes", value: "1 Oficina - 1 Baño" },
            { icon: "fa fa-shipping-fast", label: "Entrega", value: "25 días" },
            { icon: "fa fa-map-marker-alt", label: "Ubicación", value: "Transportable a todo el país" }
        ]
    },
    {
        id: 4,
        name: "Local",
        image: "img/project-4.jpg",
        title: "Módulo Local Comercial",
        description: "Un espacio comercial versátil y atractivo para tu negocio. Diseño personalizable para adaptarse a la identidad de tu marca.",
        features: [
            { icon: "fa fa-ruler-combined", label: "Superficie", value: "30 m²" },
            { icon: "fa fa-door-open", label: "Ambientes", value: "1 Salón principal - 1 Baño" },
            { icon: "fa fa-shipping-fast", label: "Entrega", value: "40 días" },
            { icon: "fa fa-map-marker-alt", label: "Ubicación", value: "Transportable a todo el país" }
        ]
    },
    {
        id: 5,
        name: "Quincho",
        image: "img/service-1.jpg",
        title: "Módulo Quincho - Espacio Social",
        description: "El lugar perfecto para tus reuniones. Un quincho moderno y equipado con parrilla y espacio para disfrutar con amigos y familia.",
        features: [
            { icon: "fa fa-ruler-combined", label: "Superficie", value: "30 m²" },
            { icon: "fa fa-door-open", label: "Ambientes", value: "1 Salón principal con parrilla - 1 Baño" },
            { icon: "fa fa-shipping-fast", label: "Entrega", value: "40 días" },
            { icon: "fa fa-map-marker-alt", label: "Ubicación", value: "Transportable a todo el país" }
        ]
    },
    {
        id: 6,
        name: "Deposito",
        image: "img/service-2.jpg",
        title: "Módulo Deposito",
        description: "Solución de almacenamiento segura y resistente. Ideal para guardar herramientas, mercadería o lo que necesites.",
        features: [
            { icon: "fa fa-ruler-combined", label: "Superficie", value: "20 m²" },
            { icon: "fa fa-door-open", label: "Ambientes", value: "1 Ambiente" },
            { icon: "fa fa-shipping-fast", label: "Entrega", value: "20 días" },
            { icon: "fa fa-map-marker-alt", label: "Ubicación", value: "Transportable a todo el país" }
        ]
    }
];

const Modules = () => {
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash) {
                const moduleNumber = hash.replace('#module', '');
                const targetButtonSelector = `[data-bs-target="#tab-pane-${moduleNumber}"]`;
                const targetPaneId = `tab-pane-${moduleNumber}`;

                const targetButton = document.querySelector(targetButtonSelector);
                const targetPane = document.getElementById(targetPaneId);

                if (targetButton && targetPane) {
                    document.querySelectorAll('.nav-link').forEach(btn => btn.classList.remove('active'));
                    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('show', 'active'));

                    targetButton.classList.add('active');
                    targetPane.classList.add('show', 'active');

                    const moduleSection = document.querySelector('.container-xxl.project');
                    if (moduleSection) {
                        moduleSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            }
        };

        window.addEventListener('hashchange', handleHashChange);
        handleHashChange();

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return (
        <div className="container-xxl project py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                    <h4 className="section-title">Módulos Habitables</h4>
                    <h1 className="display-5 mb-4">Soluciones modulares para tu espacio</h1>
                </div>
                <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="col-12 col-lg-4">
                        <div className="nav nav-pills d-flex justify-content-between w-100 h-100 me-4">
                            {modulesData.map((module, index) => (
                                <button
                                    key={module.id}
                                    className={`nav-link d-flex align-items-center text-start p-4 mb-4 ${index === 0 ? 'active' : ''}`}
                                    data-bs-toggle="pill"
                                    data-bs-target={`#tab-pane-${module.id}`}
                                    type="button"
                                >
                                    <h3 className="m-0">{`0${module.id}. ${module.name}`}</h3>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="col-12 col-lg-8">
                        <div className="tab-content w-100">
                            {modulesData.map((module, index) => (
                                <div
                                    key={module.id}
                                    className={`tab-pane fade ${index === 0 ? 'show active' : ''}`}
                                    id={`tab-pane-${module.id}`}
                                >
                                    <div className="row g-4">
                                        <div className="col-12">
                                            <div className="position-relative">
                                                <img className="img-fluid w-100" src={module.image}
                                                    style={{ objectFit: 'cover' }} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <h1 className="mb-3">{module.title}</h1>
                                            <p className="mb-4">{module.description}</p>
                                            {module.features.map((feature, i) => (
                                                <p key={i} className="project-feature-item"><i className={`${feature.icon} text-primary me-3`}></i>{feature.label}: {feature.value}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modules;
