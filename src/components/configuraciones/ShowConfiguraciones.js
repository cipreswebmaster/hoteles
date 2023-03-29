import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { endpoint } from '../api/api';

const useShowConfiguraciones = () => {
  const [configuracion, setConfiguracion] = useState([]);

  useEffect(() => {
    getAllConfiguraciones();
  }, []);

  const getAllConfiguraciones = async () => {
    const response = await axios.get(`${endpoint}/configuraciones?_embed=estado`);
    setConfiguracion(response.data);
  };

  const deleteConfiguracion = async (id) => {
    await axios.delete(`${endpoint}/configuracion/${id}`);
    getAllConfiguraciones();
  };

  return { configuracion, deleteConfiguracion };
};

const ShowConfiguraciones = () => {
  const { configuracion, deleteConfiguracion } = useShowConfiguraciones();

  return (
    <div className='m-4'>
      <div className='d-grid gap-2'>
        <Link to='/Configuracion.crear' className='btn btn-success btn-lg mt-2 mb-2 text-white'>
          Crear
        </Link>
        <table className='table'>
          <thead>
            <tr>
              <th>id</th>
              <th>Nombre</th>
              <th>acomodacion</th>
              <th>tipo</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {configuracion.map((configuracion) => (
              <tr key={configuracion.id}>
                <td>{configuracion.id}</td>
                <td>{configuracion.nombre}</td>
                <td>{configuracion.acomodaciones.nombre}</td>
                <td>{configuracion.tipos.nombre}</td>
                <td>{configuracion.estados.nombre}</td>
                <td>
                  <Link to={`/Configuracion.editar/${configuracion.id}`} className='btn btn-primary me-2'>
                    Editar
                  </Link>
                  <button onClick={() => deleteConfiguracion(configuracion.id)} className='btn btn-danger'>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowConfiguraciones;
