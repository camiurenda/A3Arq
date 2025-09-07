import React, { useEffect, useState } from 'react';

const modulesData = [
    {
        id: 1,
        name: "Vivienda 1 Dormitorio",
        image: "img/1dorm.jpg",
        title: "Vivienda 1 Dormitorio",
        description: "Una solución habitacional completa en un diseño compacto y moderno. Perfecto para parejas o como casa de fin de semana. Incluye cocina integrada y dormitorio.",
        features: [
            { icon: "fa fa-ruler-combined", label: "Superficie", value: "30 m²" },
            { icon: "fa fa-door-open", label: "Ambientes", value: "1 Dormitorio - 1 Baño - Cocina/Comedor" },
            { icon: "fa fa-shipping-fast", label: "Entrega", value: "60 días" },
            { icon: "fa fa-paint-roller", label: "Terminación exterior", value: "Chapa sinusoidal color negro" },
 { icon: "fa fa-thermometer-half", label: "Aislación térmica", value: "Lana de vidrio" },
            { icon: "fa fa-paint-roller", label: "Terminación interior", value: "Durlock + látex blanco" },
            { icon: "fa fa-grip-lines", label: "Piso", value: "Piso Vinilico Spc 6 Mm Pvc simil madera" },
            { icon: "fa fa-lightbulb", label: "Cielorraso", value: "Machimbre PVC Cielorraso 200mm x 10mm" },
            { icon: "fa fa-home", label: "Techo", value: "Chapa sinusoidal a un agua" },
            { icon: "fa fa-window-maximize", label: "Aberturas", value: "DVH Línea Módena color negro" }
      ]      
    },
    {
        id: 2,
        name: "Vivienda 2 Dormitorios",
        image: "img/VIVIENDA 2 DORM 1.png",
        title: "Vivienda 2 Dormitorios",
        description: "Pensado para familias y grupos, este módulo ofrece un espacio amplio, confortable y equipado con todo lo necesario para disfrutar de una estadía práctica y relajada. Una opción ideal para vacaciones o alquileres temporarios, combinando comodidad, diseño y sostenibilidad en un mismo lugar.",
        features: [
            { icon: "fa fa-ruler-combined", label: "Superficie", value: "40 m²" },
            { icon: "fa fa-door-open", label: "Ambientes", value: "2 Dormitorios - 1 Baño - Cocina/Living/Comedor" },
            { icon: "fa fa-shipping-fast", label: "Entrega", value: "80 días" },
              { icon: "fa fa-paint-roller", label: "Terminación exterior", value: "Chapa sinusoidal color negro" },
 { icon: "fa fa-thermometer-half", label: "Aislación térmica", value: "Lana de vidrio" },
            { icon: "fa fa-paint-roller", label: "Terminación interior", value: "Durlock + látex blanco" },
            { icon: "fa fa-grip-lines", label: "Piso", value: "Piso Vinilico Spc 6 Mm Pvc simil madera" },
            { icon: "fa fa-lightbulb", label: "Cielorraso", value: "Machimbre PVC Cielorraso 200mm x 10mm" },
            { icon: "fa fa-home", label: "Techo", value: "Chapa sinusoidal a un agua" },
            { icon: "fa fa-window-maximize", label: "Aberturas", value: "DVH Línea Módena color negro" }
        ]
    },
    {
        id: 3,
        name: "Oficina",
        image: "img/OFICINA.png",
        title: "Módulo Oficina - Tu Espacio de Trabajo",
        description: "Un espacio de trabajo profesional y privado. Ideal para emprendedores y teletrabajo. Diseño moderno y funcional con todas las conexiones necesarias.",
        features: [
            { icon: "fa fa-ruler-combined", label: "Superficie", value: "9 m²" },
            { icon: "fa fa-door-open", label: "Ambientes", value: "1 Oficina" },
            { icon: "fa fa-shipping-fast", label: "Entrega", value: "15 días" },
             { icon: "fa fa-paint-roller", label: "Terminación exterior", value: "Chapa sinusoidal color negro" },
 { icon: "fa fa-thermometer-half", label: "Aislación térmica", value: "Lana de vidrio" },
            { icon: "fa fa-paint-roller", label: "Terminación interior", value: "Durlock + látex blanco" },
            { icon: "fa fa-grip-lines", label: "Piso", value: "Piso Vinilico Spc 6 Mm Pvc simil madera" },
            { icon: "fa fa-lightbulb", label: "Cielorraso", value: "Machimbre PVC Cielorraso 200mm x 10mm" },
            { icon: "fa fa-home", label: "Techo", value: "Chapa sinusoidal a un agua" },
            { icon: "fa fa-window-maximize", label: "Aberturas", value: "DVH Línea Módena color negro" }
        ]
    },
    {
        id: 4,
        name: "Local",
        image: "img/LOCAL.png",
        title: "Módulo Local Comercial",
        description: "Un espacio comercial versátil y atractivo para tu negocio. Diseño personalizable para adaptarse a la identidad de tu marca.",
        features: [
            { icon: "fa fa-ruler-combined", label: "Superficie", value: "16 m²" },
            { icon: "fa fa-door-open", label: "Ambientes", value: "1 Salón principal" },
            { icon: "fa fa-shipping-fast", label: "Entrega", value: "15 días" },
            { icon: "fa fa-paint-roller", label: "Terminación exterior", value: "Chapa sinusoidal color negro" },
 { icon: "fa fa-thermometer-half", label: "Aislación térmica", value: "Lana de vidrio" },
            { icon: "fa fa-paint-roller", label: "Terminación interior", value: "Durlock + látex blanco" },
            { icon: "fa fa-grip-lines", label: "Piso", value: "Piso Vinilico Spc 6 Mm Pvc simil madera" },
            { icon: "fa fa-lightbulb", label: "Cielorraso", value: "Machimbre PVC Cielorraso 200mm x 10mm" },
            { icon: "fa fa-home", label: "Techo", value: "Chapa sinusoidal a un agua" },
            { icon: "fa fa-window-maximize", label: "Aberturas", value: "DVH Línea Módena color negro" }
        ]
        
    },
    {
        id: 5,
        name: "Quincho",
        image: "img/quincho1.png",
        title: "Módulo Quincho - Espacio Social",
        description: "El lugar perfecto para tus reuniones. Un quincho moderno y equipado con parrilla y espacio para disfrutar con amigos y familia.",
        features: [
            { icon: "fa fa-ruler-combined", label: "Superficie", value: "40 m²" },
            { icon: "fa fa-door-open", label: "Ambientes", value: "1 Salón principal con parrilla - 1 Baño" },
            { icon: "fa fa-shipping-fast", label: "Entrega", value: "60 días" },
                { icon: "fa fa-paint-roller", label: "Terminación exterior", value: "Chapa sinusoidal color negro" },
            { icon: "fa fa-paint-roller", label: "Terminación interior", value: "Durlock + látex blanco" },
            { icon: "fa fa-grip-lines", label: "Piso", value: "Piso Vinilico" },
            { icon: "fa fa-home", label: "Techo", value: "Chapa sinusoidal a un agua" },
            { icon: "fa fa-window-maximize", label: "Aberturas", value: "Línea Módena color negro" }
        ]
    },
    {
        id: 6,
        name: "Depósito",
        image: "img/DEPOSITO.png",
        title: "Módulo Deposito",
        description: "Solución de almacenamiento segura y resistente. Ideal para guardar herramientas, mercadería o lo que necesites.",
        features: [
            { icon: "fa fa-ruler-combined", label: "Superficie", value: "9 m²" },
            { icon: "fa fa-door-open", label: "Ambientes", value: "1 Espacio de guardado" },
            { icon: "fa fa-shipping-fast", label: "Entrega", value: "10 días" },
              { icon: "fa fa-paint-roller", label: "Terminación exterior", value: "Chapa sinusoidal color negro" },
            { icon: "fa fa-paint-roller", label: "Terminación interior", value: "Durlock + látex blanco" },
            { icon: "fa fa-grip-lines", label: "Piso", value: "Piso Vinilico" },
            { icon: "fa fa-home", label: "Techo", value: "Chapa sinusoidal a un agua" },
            { icon: "fa fa-window-maximize", label: "Aberturas", value: "Línea Módena color negro" }
        ]
    }
];

const Modules = () => {
    const [showFullText, setShowFullText] = useState(false);

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
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s">
                    <h4 className="section-title">Módulos Habitables</h4>
                    <h1 className="display-5 mb-4">Soluciones modulares para tu espacio</h1>
                    
                    {/* Desktop - texto completo siempre */}
                    <div className="d-none d-lg-block">
                        <p className="mb-4" style={{ textAlign: 'justify' }}>
                            <strong>Proyecto de Módulos Habitables</strong><br />
                            En A3 Arquitectas, junto a BIG Módulos, desarrollamos un sistema innovador de espacios modulares que combina diseño, eficiencia y rapidez constructiva.<br />
                            Nuestro estudio se encarga del diseño de los proyectos, la dirección de obra, los trámites administrativos y la venta de prototipos, garantizando propuestas arquitectónicas personalizadas y funcionales.<br />
                            Por su parte, BIG Módulos aporta la mano de obra especializada y los materiales, asegurando calidad, solidez y tiempos de ejecución optimizados.<br />
                            Una alianza que une arquitectura y construcción para ofrecer soluciones versátiles, sustentables y listas para habitar o trabajar: viviendas, locales, oficinas o depósitos.
                        </p>
                    </div>
                    
                    {/* Mobile - texto colapsable */}
                    <div className="d-block d-lg-none">
                        <p className="mb-3" style={{ textAlign: 'justify' }}>
                            <strong>Proyecto de Módulos Habitables</strong><br />
                            En A3 Arquitectas, junto a BIG Módulos, desarrollamos un sistema innovador de espacios modulares que combina diseño, eficiencia y rapidez constructiva.
                        </p>
                        
                        {showFullText && (
                            <p className="mb-3" style={{ textAlign: 'justify' }}>
                                Nuestro estudio se encarga del diseño de los proyectos, la dirección de obra, los trámites administrativos y la venta de prototipos, garantizando propuestas arquitectónicas personalizadas y funcionales.<br />
                                Por su parte, BIG Módulos aporta la mano de obra especializada y los materiales, asegurando calidad, solidez y tiempos de ejecución optimizados.<br />
                                Una alianza que une arquitectura y construcción para ofrecer soluciones versátiles, sustentables y listas para habitar o trabajar: viviendas, locales, oficinas o depósitos.
                            </p>
                        )}
                        
                        <button 
                            className="btn btn-outline-primary btn-sm mb-4"
                            onClick={() => setShowFullText(!showFullText)}
                        >
                            {showFullText ? 'Ver menos' : 'Ver más'}
                        </button>
                    </div>
                </div>

                {/* Características destacadas comunes */}
                <div className="row mb-5 wow fadeInUp" data-wow-delay="0.2s">
                    <div className="col-12">
                        <div className="bg-light p-4 rounded-3">
                            <div className="row text-center">
                                <div className="col-12 col-lg-4 mb-3 mb-lg-0">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <i className="fa fa-map-marker-alt text-primary me-3 fs-4"></i>
                                        <div>
                                            <h5 className="mb-1">Transportable a todo el país</h5>
                                            <p className="mb-0 text-muted">Entrega en cualquier ubicación</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4 mb-3 mb-lg-0">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <i className="fa fa-tools text-primary me-3 fs-4"></i>
                                        <div>
                                            <h5 className="mb-1">100% hecho en taller</h5>
                                            <p className="mb-0 text-muted">Calidad controlada y garantizada</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <i className="fa fa-key text-primary me-3 fs-4"></i>
                                        <div>
                                            <h5 className="mb-1">Entregas llave en mano</h5>
                                            <p className="mb-0 text-muted">Listo para usar inmediatamente</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="col-12 col-lg-4">
                        <div className="nav nav-pills d-flex justify-content-between w-100 h-100 me-4">
                            {modulesData.map((module, index) => (
                                <button
                                    key={module.id}
                                    className={`nav-link w-100 d-flex align-items-center text-start p-4 mb-4 ${index === 0 ? 'active' : ''}`}
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
