import React from 'react'
import { Link } from 'react-router-dom'


const Menu = () => {
    return (
        <div>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      
      <li className="nav-item">
          <Link  className="nav-link active" aria-current="page" to="/habitaciones">habitaciones</Link>
        </li>
      <li className="nav-item">
          <Link  className="nav-link active" aria-current="page" to="/hoteles">hoteles</Link>
        </li>
      <li className="nav-item">
          <Link  className="nav-link active" aria-current="page" to="/Tipos">Tipos</Link>
        </li>
      <li className="nav-item">
          <Link  className="nav-link active" aria-current="page" to="/Configuraciones">Configuracion</Link>
        </li>
      
        <li className="nav-item">
          <Link  className="nav-link active" aria-current="page" to="/Acomodaciones">Acomodaciones</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link active" aria-current="page" to="/estados">Estados</Link>
        </li>
       
       
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Menu