import React from 'react'

const Tegnologies = () => {
  return (
    <React.Fragment>
      <section className="tegnologies">
        <div className="container">
          <div className="tegnologies-items">
            <img src="https://i.ibb.co/Wcw0zWQ/Grupo-26.png" alt="tegnologies"/>
          </div>
          <div className="tegnologies-caption">
            <p className="subtitle">Tecnologias</p>
            <h3 className="title mb-2">MERN <span>Stack</span></h3>
            <p className="text mb-3">Lorem ipsum dolor sit amet consectetur adipiscing elit, at maecenas mus sapien torquent elementum ac litora, volutpat dapibus habitasse ridiculus hac est.</p>
            <a href="/" className="button button-secondary">Proyectos</a>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Tegnologies
