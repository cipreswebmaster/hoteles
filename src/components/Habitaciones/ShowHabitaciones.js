import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { endpoint } from '../api/api';

const useShowHabitaciones = () => {
  const [Habitacion, setConfiguracion] = useState([]);

  useEffect(() => {
    getAllHabitaciones();
  }, []);

  const getAllHabitaciones = async () => {
    const response = await axios.get(`${endpoint}/habitaciones?_embed=estado`);
    setConfiguracion(response.data);
  };

  const deleteConfiguracion = async (id) => {
    await axios.delete(`${endpoint}/habitacion/${id}`);
    getAllHabitaciones();
  };

  return { Habitacion, deleteConfiguracion };
};

const ShowHabitaciones = () => {
  const { Habitacion, deleteConfiguracion } = useShowHabitaciones();

  return (
    <div className='m-4'>
      <div className='d-grid gap-2'>
        <Link to='/habitacion.Crear' className='btn btn-success btn-lg mt-2 mb-2 text-white'>
          Crear
        </Link>
        <table className='table'>
          <thead>
            <tr>
              <th>id</th>
              
              <th>acomodacion</th>
              <th>hotel</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {Habitacion.map((Habitacion) => (
              <tr key={Habitacion.id}>
                <td>{Habitacion.id}</td>
                
                <td>{Habitacion.configuraciones.nombre}</td>
                <td>{Habitacion.hoteles.nombre}</td>
                <td>{Habitacion.estados.nombre}</td>
                <td>
                  <Link to={`/habitacion.editar/${Habitacion.id}`} className='btn btn-primary me-2'>
                    Editar
                  </Link>
                  <button onClick={() => deleteConfiguracion(Habitacion.id)} className='btn btn-danger'>
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

export default ShowHabitaciones;
