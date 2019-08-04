import React from "react";

// Services Data
const servicesData = [
  { 
    id: 1, 
    name: "UI/UX",
    icon: "fa-desktop",
    description: "Nuestro proceso creativo está centrado en obtener la mejor experiencia de usuario y comunicar el mensaje adecuado." 
  },
  { 
    id: 2, 
    name: "Diseño Grafico",
    icon: "fa-file-image-o",
    description: "Diseños de contenido grafico  para dar la imagen que tu empresa o su marca necesita, con la mejor creatividad." 
  },
  { 
    id: 3, 
    name: "Aplicaciones Moviles",  
    icon: "fa-mobile",
    description: "Desarrollo nativo para Android y iOS. Posibilidad de desarrollar aplicaciones híbridas para abaratar costes." 
  },
  { 
    id: 4, 
    name: "Diseño Web", 
    icon: "fa-terminal",
    description: "Diseño adaptados a tus requerimientos, todos nuestros diseños son adaptados a Smartphone y Tablets." 
  }
];

// Services List
let servicesList = servicesData.map((service) => {
  return (
    <div className="services-card" key={service.id}>
      <div className="services-icon">
        <i className={`fa ${service.icon}`}></i>
      </div>
      <h4 className="services-name">{ service.name }</h4>
      <p className="services-description">{ service.description }</p>
      <a href="/services" className="services-learn">Leer Mas</a>
    </div>
  )
})


function Services() {
  return (
    <React.Fragment>
      <section className="services">
        <div className="container">
          <div className="services-caption">
            <p className="subtitle">Servicios</p>
            <h3 className="title mb-2"><span>Mis Habilidades & </span>Servicios</h3>
            <p className="text">Durante más de 4 años he desarrollado proyectos asombrosos para mis clientes, que me han aportado gran crecimiento profesional.</p>
            <a href="/" className="button button-secondary mt-3">Contacto</a>
          </div>
          <div className="services-items">
            { servicesList }
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Services;