import React from "react";

const Reviews = () => {
  return (
    <React.Fragment>
      <section className="reviews">
        <div className="container">
          <div className="reviews-caption">
            <p className="subtitle">Testimonios</p>
            <h3 className="title mb-2"><span>Lo Que Dicen </span> Mis Clientes</h3>
            
            <div className="reviews-start">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <p className="text mb-2">Lorem ipsum dolor sit amet consectetur adipiscing elit, at maecenas mus sapien torquent elementum ac litora, volutpat dapibus habitasse ridiculus hac est.</p>
            <h4 className="cl-title fw-medium mb-1">Javier Hernández</h4>
            <p className="">Ceo PubliWeb</p>
          </div>
          <div className="reviews-users">
            <img src="https://i.ibb.co/pKJYwHq/Grupo-25.png" alt="users" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Reviews;