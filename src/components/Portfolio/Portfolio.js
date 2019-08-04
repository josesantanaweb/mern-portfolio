import React from "react";

// Categories Data
const categoriesData = [
  { 
    id: 1, 
    name: "Web",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit." 
  },
  { 
    id: 2, 
    name: "Aplicaciones Moviles",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit." 
  },
  { 
    id: 3, 
    name: "Diseño",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit." 
  },
  { 
    id: 4, 
    name: "Iconos",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit." 
  },
];

// Works Data
const worksData = [
  { 
    id: 1, 
    idCategory: 1,
    name: "Pack Icons",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit." ,
    image: "https://i.ibb.co/t2LJkGJ/Motos.png"
  },
  { 
    id: 2, 
    idCategory: 2,
    name: "Pack Icons",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit." ,
    image: "https://i.ibb.co/t2LJkGJ/Motos.png"
  },
  { 
    id: 3, 
    idCategory: 3,
    name: "Pack Icons",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit." ,
    image: "https://i.ibb.co/t2LJkGJ/Motos.png"
  },
  { 
    id: 4, 
    idCategory: 2,
    name: "Pack Icons",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit." ,
    image: "https://i.ibb.co/t2LJkGJ/Motos.png"
  },
  { 
    id: 5, 
    idCategory: 1,
    name: "Pack Icons",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit." ,
    image: "https://i.ibb.co/t2LJkGJ/Motos.png"
  },
  { 
    id: 6, 
    idCategory: 1,
    name: "Pack Icons",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit." ,
    image: "https://i.ibb.co/m94gWww/herbaplant.png"
  },
  { 
    id: 7, 
    idCategory: 1,
    name: "Pack Icons",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit." ,
    image: "https://i.ibb.co/DpgynDk/Cervezas.png"
  },
  { 
    id: 8, 
    idCategory: 1,
    name: "Pack Icons",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit." ,
    image: "https://i.ibb.co/t2LJkGJ/Motos.png"
  },
];


// Categories List
let categoriesList = categoriesData.map((category) => {
  return (
    <li>{ category.name }</li>
  )
})

// Works List
let worksList = worksData.map((work) => {
  return (
    <a href="/">
      <img src={ work.image } alt={ work.name }/>
    </a>
  )
})

function Portfolio() {
  return (
    <React.Fragment>
      <section className="portfolio">
        <div className="container">
          <div className="portfolio-caption">
            <p className="subtitle">Portafolio</p>
            <h3 className="title mb-2"><span>Ultimos </span>Trabajos</h3>
          </div>
          <div className="portfolio-category">
            <li>All</li>
            { categoriesList }
          </div>
          <div className="portfolio-gallery">
            { worksList }
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Portfolio;