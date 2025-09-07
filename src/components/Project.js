import React, { useEffect } from 'react';

const projectsData = [
    {
        id: 1,
        name: "Casa GC",
        image: "img/CASAGCT.jpg",
        title: "CASA GC - Vivienda Unifamiliar",
        description: "Este proyecto se plantea como una vivienda que se cierra hacia la calle y se abre completamente hacia el patio, priorizando la privacidad sin resignar luz natural. Diseñada en dos niveles, su emplazamiento fue cuidadosamente estudiado según la orientación solar, garantizando el ingreso de luz del norte, ideal para los espacios principales. Naturaleza, intimidad y funcionalidad se combinan en esta propuesta que invita a habitar hacia adentro",
        features: [
            { icon: "fa fa-ruler-combined", label: "Superficie proyectada", value: "250 m²" },
            { icon: "fa fa-tree", label: "Superficie del terreno", value: "360 m²" },
            { icon: "fa fa-door-open", label: "Ambientes", value: "3 Dormitorios - 2 Baños - Cochera Doble - PlayRoom - Terraza - Balcón" },
            { icon: "fa fa-map-marker-alt", label: "Ubicación", value: "Barrio Master Plan - Villa Nueva" }
        ]
    },
    {
        id: 2,
        name: "Casa PB",
        image: "img/CASAPB.jpg",
        title: "CASA PB - Vivienda Unifamiliar",
        description: "La casa está proyectada en un terreno de forma triangular, al estar en esquina, tomamos como concepto general la relación visual con el entorno natural. Se articula en dos plantas, una baja donde se desarrollan la mayoría de las actividades diurnas, estar, cocina, comedor, galería con asador y patio con pileta, y por otro lado en la planta alta se encuentran los dormitorios con acceso a un balcón, un sector de trabajo y un baño con ante baño. Está pensada con una arquitectura moderna, simple y un diseño elegante que incorpora detalles de piedras naturales en sus fachadas.",
        features: [
            { icon: "fa fa-ruler-combined", label: "Superficie proyectada", value: "116 m²" },
            { icon: "fa fa-tree", label: "Superficie del terreno", value: "230 m²" },
            { icon: "fa fa-door-open", label: "Ambientes", value: "2 Dormitorios - 1 Baño - 1 Toilette - Estudio - Balcón - Cochera simple" },
            { icon: "fa fa-map-marker-alt", label: "Ubicación", value: "Barrio Vista Verde - Villa María"}
        ]
    },
    {
        id: 3,
        name: "Casa Bio",
        image: "img/CasaBIO.jpg",
        title: "Casa BIO - Vivienda en bioconstrucción",
        description: "Este proyecto se concibe bajo los principios de la bioconstrucción y el respeto por el entorno natural. Se trata de una vivienda unifamiliar que combina confort, simplicidad y sostenibilidad, pensada para integrarse armónicamente con el paisaje. La organización espacial privilegia la entrada de luz del norte a través de un ventiluz central, lo que garantiza ambientes cálidos y luminosos durante todo el día. Al sur, se desarrolla una galería amplia, pensada como transición fluida entre el interior y el jardín, ideal para el descanso y la vida al aire libre.",
        features: [
            { icon: "fa fa-ruler-combined", label: "Superficie construida", value: "162 m²" },
            { icon: "fa fa-tree", label: "Superficie del terreno", value: "604 m²" },
            { icon: "fa fa-door-open", label: "Ambientes", value: "2 Dormitorios - 1 Baño - Cochera Simple - Habitación de Yoga" },
            { icon: "fa fa-map-marker-alt", label: "Ubicación", value: "Barrio Campos del Este - Villa María" }
        ]
    },
    {
        id: 4,
        name: "Edificio de Oficinas",
        image: "img/EDIFICIO DE OFICINAS.jpg",
        title: "EDIFICIO DE OFICINAS",
        description: "El diseño plantea oficinas en planta libre, priorizando la versatilidad y adaptabilidad de los espacios de trabajo. La propuesta se organiza en torno a un patio central que aporta iluminación y ventilación natural, acompañado de balcones en frente y contrafrente que refuerzan la conexión con el entorno urbano.",
        features: [
            { icon: "fa fa-ruler-combined", label: "Superficie proyectada", value: "495 m²" },
            { icon: "fa fa-tree", label: "Superficie del terreno", value: "270 m²" },
            { icon: "fa fa-door-open", label: "Ambientes", value: "1 Local comercial - 5 Oficinas de planta libre con baño y kitchen" },
            { icon: "fa fa-map-marker-alt", label: "Ubicación", value: "Barrio Centro - Villa María" }
        ]
    },
    {
        id: 5,
        name: "Proyecto Las Dalias",
        image: "img/lasdalias.jpg",
        title: "Proyecto LAS DALIAS - Interiorismo",
        description: "Un diseño que integra calidez, funcionalidad y estilo contemporáneo. El proyecto se organiza en tres espacios claramente definidos: estudio, estar y comedor, que se conectan visualmente pero mantienen su identidad propia gracias al uso estratégico de mobiliario a medida, iluminación escénica y juegos de cielorrasos. La paleta neutra en tonos grises y madera natural aporta serenidad y elegancia, mientras que los detalles decorativos y la iluminación puntual generan una atmósfera moderna y acogedora. El resultado es un ambiente versátil, pensado tanto para el confort diario como para disfrutar en reuniones sociales..",
        features: [
            { icon: "fa fa-ruler-combined", label: "Superficie proyectada", value: "30 m²" },
            { icon: "fa fa-tree", label: "Superficie del terreno", value: "-" },
            { icon: "fa fa-door-open", label: "Ambientes", value: "Estudio - Estar - Comedor" },
            { icon: "fa fa-map-marker-alt", label: "Ubicación", value: "Barrio Golf - Villa Nueva" }
        ]
    },
    {
        id: 6,
        name: "Casa FG",
        image: "img/CASA FG.jpg",
        title: "Casa FG - Vivienda Unifamiliar",
        description: "La vivienda está implantada en un lote en esquina y pensada para desarrollarse en dos etapas. El acceso peatonal y vehicular se ubica sobre el frente principal, orientado al Sur. Mientras que el área de cocina, comedor y galería, sobre el frente Norte, abriendose a un gran patio. Hacia el lado Este nos encontramos con el estar y  un dormitorio, y en el Oeste un baño completo y la escalera de dos tramos. La planta alta se compone de 2 dormitorios con vestidor, baño con ante baño y un playroom con terraza accesible..",
        features: [
            { icon: "fa fa-ruler-combined", label: "Superficie construida", value: "195 m²" },
            { icon: "fa fa-tree", label: "Superficie del terreno", value: "500 m²" },
            { icon: "fa fa-door-open", label: "Ambientes", value: "2 Dormitorios - 2 Baños - Local - Cochera simple " },
            { icon: "fa fa-map-marker-alt", label: "Ubicación", value: "Barrio Los Talas - Anisacate" }
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
                    <div className="col-12 col-lg-4">
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
                    <div className="col-12 col-lg-8">
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
