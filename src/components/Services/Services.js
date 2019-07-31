import React from "react";

// Services Data
const servicesData = [
  { 
    id: 1, 
    name: "UI/UX",
    icon: "fa-desktop",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit, at maecenas mus sapien torquent." 
  },
  { 
    id: 2, 
    name: "Web Development",
    icon: "fa-terminal",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit, at maecenas mus sapien torquent." 
  },
  { 
    id: 3, 
    name: "Mobile App",  
    icon: "fa-mobile",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit, at maecenas mus sapien torquent." 
  },
  { 
    id: 4, 
    name: "Web Design", 
    icon: "fa-file-image-o",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit, at maecenas mus sapien torquent." 
  }
];

// Services List
let servicesList = servicesData.map((service) => {
  return (
    <div className="services-card">
      <div className="services-icon">
        <i className={`fa ${service.icon}`}></i>
      </div>
      <h4 className="services-name">{ service.name }</h4>
      <p className="services-description">{ service.description }</p>
      <a href="/services" className="services-learn">Learn More</a>
    </div>
  )
})


function Services() {
  return (
    <React.Fragment>
      <section className="services">
        <div className="container">
          <div className="services-caption">
            <p className="subtitle">Services</p>
            <h3 className="title mb-2"><span>My Features & </span>Services</h3>
            <p className="text">Lorem ipsum dolor sit amet consectetur adipiscing elit, at maecenas mus sapien torquent elementum ac litora, volutpat dapibus habitasse ridiculus hac est.</p>
            <a href="/" className="button button-secondary mt-3">Contact</a>
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