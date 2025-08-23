import React, { useEffect } from 'react';

const projectsData = [
    {
        id: 1,
        name: "Casa GC",
        image: "img/CASAGCT.jpg",
        title: "CASA GC - Vivienda Unifamiliar",
        description: "Este proyecto se plantea como una vivienda que se cierra hacia la calle y se abre completamente hacia el patio, priorizando la privacidad sin resignar luz natural. Diseñada en dos niveles, su emplazamiento fue cuidadosamente estudiado según la orientación solar, garantizando el ingreso de luz del norte, ideal para los espacios principales. Naturaleza, intimidad y funcionalidad se combinan en esta propuesta que invita a habitar hacia adentro",
        features: [
            { icon: "fa fa-ruler-combined", label: "Superficie construida", value: "200 m²" },
            { icon: "fa fa-tree", label: "Superficie del terreno", value: "500 m²" },
            { icon: "fa fa-door-open", label: "Ambientes", value: "5" },
            { icon: "fa fa-map-marker-alt", label: "Ubicación", value: "Barrio Cerrado" }
        ]
    },
    {
        id: 2,
        name: "Royal Hotel",
        image: "img/project-2.jpg",
        title: "Modern Hotel Design",
        description: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet. Tempor erat elitr rebum at clita.",
        features: [
            { icon: "fa fa-ruler-combined", label: "Superficie construida", value: "1500 m²" },
            { icon: "fa fa-tree", label: "Superficie del terreno", value: "2000 m²" },
            { icon: "fa fa-door-open", label: "Ambientes", value: "50" },
            { icon: "fa fa-map-marker-alt", label: "Ubicación", value: "Centro Urbano" }
        ]
    },
    {
        id: 3,
        name: "Mexwel Building",
        image: "img/project-3.jpg",
        title: "Innovative Office Spaces",
        description: "Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet. Tempor erat elitr rebum at clita.",
        features: [
            { icon: "fa fa-ruler-combined", label: "Superficie construida", value: "1000 m²" },
            { icon: "fa fa-tree", label: "Superficie del terreno", value: "800 m²" },
            { icon: "fa fa-door-open", label: "Ambientes", value: "20" },
            { icon: "fa fa-map-marker-alt", label: "Ubicación", value: "Distrito Financiero" }
        ]
    },
    {
        id: 4,
        name: "Shopping Complex",
        image: "img/project-4.jpg",
        title: "Dynamic Retail Environments",
        description: "Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet. Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.",
        features: [
            { icon: "fa fa-ruler-combined", label: "Superficie construida", value: "5000 m²" },
            { icon: "fa fa-tree", label: "Superficie del terreno", value: "3000 m²" },
            { icon: "fa fa-door-open", label: "Ambientes", value: "100+" },
            { icon: "fa fa-map-marker-alt", label: "Ubicación", value: "Zona Comercial" }
        ]
    },
    {
        id: 5,
        name: "Project Five",
        image: "img/project-1.jpg",
        title: "Residential Masterpiece",
        description: "Sed stet lorem sit clita duo justo magna dolore erat amet. Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.",
        features: [
            { icon: "fa fa-ruler-combined", label: "Superficie construida", value: "300 m²" },
            { icon: "fa fa-tree", label: "Superficie del terreno", value: "700 m²" },
            { icon: "fa fa-door-open", label: "Ambientes", value: "6" },
            { icon: "fa fa-map-marker-alt", label: "Ubicación", value: "Zona Residencial" }
        ]
    },
    {
        id: 6,
        name: "Project Six",
        image: "img/project-2.jpg",
        title: "Urban Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        features: [
            { icon: "fa fa-ruler-combined", label: "Superficie construida", value: "800 m²" },
            { icon: "fa fa-tree", label: "Superficie del terreno", value: "1200 m²" },
            { icon: "fa fa-door-open", label: "Ambientes", value: "15" },
            { icon: "fa fa-map-marker-alt", label: "Ubicación", value: "Desarrollo Urbano" }
        ]
    }
];

const Project = () => {
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash) {
                const projectNumber = hash.replace('#project', '');
                const targetButtonSelector = `[data-bs-target="#tab-pane-${projectNumber}"]`;
                const targetPaneId = `tab-pane-${projectNumber}`;

                const targetButton = document.querySelector(targetButtonSelector);
                const targetPane = document.getElementById(targetPaneId);

                if (targetButton && targetPane) {
                    document.querySelectorAll('.nav-link').forEach(btn => btn.classList.remove('active'));
                    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('show', 'active'));

                    targetButton.classList.add('active');
                    targetPane.classList.add('show', 'active');

                    const projectSection = document.querySelector('.container-xxl.project');
                    if (projectSection) {
                        projectSection.scrollIntoView({ behavior: 'smooth' });
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
                    <h4 className="section-title">Nuestros proyectos</h4>
                    <h1 className="display-5 mb-4">Conoce nuestros últimos diseños</h1>
                </div>
                <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="col-lg-4">
                        <div className="nav nav-pills d-flex justify-content-between w-100 h-100 me-4">
                            {projectsData.map((project, index) => (
                                <button
                                    key={project.id}
                                    className={`nav-link w-100 d-flex align-items-center text-start p-4 mb-4 ${index === 0 ? 'active' : ''}`}
                                    data-bs-toggle="pill"
                                    data-bs-target={`#tab-pane-${project.id}`}
                                    type="button"
                                >
                                    <h3 className="m-0">{`0${project.id}. ${project.name}`}</h3>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="tab-content w-100">
                            {projectsData.map((project, index) => (
                                <div
                                    key={project.id}
                                    className={`tab-pane fade ${index === 0 ? 'show active' : ''}`}
                                    id={`tab-pane-${project.id}`}
                                >
                                    <div className="row g-4">
                                        <div className="col-12">
                                            <div className="position-relative">
                                                <img className="img-fluid w-100" src={project.image}
                                                    style={{ objectFit: 'cover' }} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <h1 className="mb-3">{project.title}</h1>
                                            <p className="mb-4">{project.description}</p>
                                            {project.features.map((feature, i) => (
                                                <p key={i} className="project-feature-item"><i className={`${feature.icon} text-primary me-3`}></i>{feature.label}: {feature.value}</p>
                                            ))}
                                            <a href="/project.html" className="btn btn-primary py-3 px-5 mt-3">Read More</a>
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

export default Project;
