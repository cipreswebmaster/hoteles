import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { endpoint } from '../api/api';

const CrearHabitaciones = () => {
  const [estado, setEstado] = useState('');
  const [hoteles, setHotel] = useState('');
  const [configuracion, setConfiguracion] = useState('');




  const [estadosHotel, setEstadosHotel] = useState([]);
  const [hotelesHotel, setHotelesHotel] = useState([]);
  const [configuracionesHotel, setConfiguracionHotel] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllHoteles(); getAllConfiguracion(); getAllEstados();
  }, []);

  const getAllEstados = async () => {
    const response = await axios.get(`${endpoint}/estados`);
    setEstadosHotel(response.data);

  };

  const getAllHoteles = async () => {
    const response = await axios.get(`${endpoint}/hoteles`);
    setHotelesHotel(response.data);

  };

  const getAllConfiguracion = async () => {
    const response = await axios.get(`${endpoint}/configuraciones`);
    setConfiguracionHotel(response.data);

  };



  const store = async (e) => {
    e.preventDefault();
    

    if (!estado) {
      alert('Por favor, seleccione un estado');
      return;
    }
    else if(!configuracion){
      alert('Por favor, seleccione  una configuracion ');
      return;
    }
    else if(!hoteles){
      alert('Por favor, seleccione hotel');
      return;
    }
    console.log( {hotel: hoteles ,
      configuracion: configuracion,
      estado: estado})
    await axios.post(`${endpoint}/habitacion`, {
      hotel: hoteles ,
      configuracion: configuracion,
      estado: estado
    });

    navigate('/habitaciones');
  };

  return (
    <div className='m-4'>
      <h1>Crear habitacion</h1>
      <form onSubmit={store}>
        <div className='mb-3'>



          <select
            value={hoteles}
            onChange={(e) => setHotel(e.target.value)}
            name='form-select'
            aria-label='Default select example'
            
          >
            <option >
                hotel
              </option>
            {hotelesHotel.map((hotel) => (
              <option key={hotel.id} value={hotel.id} >
                {hotel.nombre}
              </option>
            ))}
          </select>


          <select
            value={configuracion}
            onChange={(e) => setConfiguracion(e.target.value)}
            name='form-select'
            aria-label='Default select example'
            key={configuracion.id}
          >
            <option >
            configuracion
                
              </option>
            {configuracionesHotel.map((configuracion) => (
              <option value={configuracion.id} >
                {configuracion.nombre}
              </option>
            ))}
          </select>


          <select
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            name='form-select'
            aria-label='Default select example'
            key={estado.id}
          >
            <option >
            estado
                
              </option>
            {estadosHotel.map((estado) => (
              <option value={estado.id} >
                {estado.nombre}
              </option>
            ))}
          </select>
          <button type='submit' className='btn btn-primary'>
            Crear
          </button>
        </div>
      </form>
    </div>
  );
};

export default CrearHabitaciones;
