import './TarjetaPresentacion.css'

function TarjetaPresentacion() {
  return (
    <div className="tarjeta">
      <div className="tarjeta-header">
        <img 
          src="./image.jpg" 
          alt="Foto de perfil" 
          className="foto-perfil"
        />
      </div>
      
      <div className="tarjeta-body">
        <h2 className="nombre">Rodrigo Ariel Quispe</h2>
        <p className="profesion">Desarrollador Frontend</p>
        <p className="mensaje">
          ¡Hola! Soy un apasionado desarrollador con experiencia en React, 
          Node.js y tecnologías web modernas. Me encanta crear aplicaciones 
          increíbles y resolver problemas complejos.
        </p>
      </div>
      
      <div className="tarjeta-footer">
        <button className="btn-contacto">Contáctame</button>
        <button className="btn-portfolio">Ver Portfolio</button>
      </div>
      
      <div className="redes-sociales">
        <a href="#" className="red-social">GitHub</a>
        <a href="#" className="red-social">LinkedIn</a>
        <a href="#" className="red-social">Twitter</a>
      </div>
    </div>
  )
}

export default TarjetaPresentacion