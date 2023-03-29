import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { endpoint } from '../api/api';

const useShowEstados = () => {
  const [estados, setEstados] = useState([]);

  useEffect(() => {
    getAllEstados();
  }, []);

  const getAllEstados = async () => {
    const response = await axios.get(`${endpoint}/estados`);
    setEstados(response.data);
  };

  const deleteEstado = async (id) => {
    await axios.delete(`${endpoint}/estado/${id}/`);
    getAllEstados();
  };

  return { estados, deleteEstado };
};

const ShowEstados = () => {
  const { estados, deleteEstado } = useShowEstados();

  return (

    <div className='m-4'>

      <div className='d-grid gap-2'>
        <Link to='/Estados.crear' className='btn btn-success btn-lg mt-2 mb-2 text-white'>
          Crear
        </Link>

        <table className='table'>
          <thead>
            <tr>
              <th>id</th>
              <th>Nombre</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {estados.map((estado) => (
              <tr key={estado.id}>
                <td>{estado.id}</td>
                <td>{estado.nombre}</td>
                <td>
                  <Link to={`/Estados.editar/${estado.id}`} className='btn btn-primary me-2'>
                    Editar
                  </Link>
                  <button onClick={() => deleteEstado(estado.id)} className='btn btn-danger'>
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

export default ShowEstados;
