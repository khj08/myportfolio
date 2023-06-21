import React from 'react'
import './styles/Section.scss'
import man2 from './assets/man2.jpg';

const Section = () => {
  return (
    <div className='section'>
        
        <div className="section__container">
          
          <div className="section__img">
            <img src={man2} alt="" />
          </div>

          <div className="section__content">

            <h1>¿Quién es Katherine?</h1>
            <p>Bachiller en Ingeniería de Sistemas</p>
            <p>Desarrolladora Front End</p>
            <p>Experiencia en Gestión de Proyectos</p>
            <p>Conocimientos en Scrum</p>
            <p>1 año realizando proyectos</p>
            <p>React js Developer</p>

          </div>


        </div>

    </div>
  )
}

export default Section