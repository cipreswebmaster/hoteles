import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { endpoint } from '../api/api';

const CrearConfiguraciones = () => {
  const [estado, setEstado] = useState('');
  const [tipos, setTipo] = useState('');
  const [acomodacion, setAcomodacion] = useState('');




  const [estadosTipo, setEstadosTipo] = useState([]);
  const [tiposTipo, setTiposTipo] = useState([]);
  const [acomodacionesTipo, setAcomodacionTipo] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllTipos(); getAllAcomodacion(); getAllEstados();
  }, []);

  const getAllEstados = async () => {
    const response = await axios.get(`${endpoint}/estados`);
    setEstadosTipo(response.data);

  };

  const getAllTipos = async () => {
    const response = await axios.get(`${endpoint}/tipos`);
    setTiposTipo(response.data);

  };

  const getAllAcomodacion = async () => {
    const response = await axios.get(`${endpoint}/acomodaciones`);
    setAcomodacionTipo(response.data);

  };



  const store = async (e) => {
    e.preventDefault();
    

    if (!estado) {
      alert('Por favor, seleccione un estado');
      return;
    }
    else if(!acomodacion){
      alert('Por favor, seleccione  una acomodacion ');
      return;
    }
    else if(!tipos){
      alert('Por favor, seleccione tipo');
      return;
    }
    await axios.post(`${endpoint}/configuracion`, {
      tipos,
      acomodacion,
      estado
    });

    navigate('/Configuraciones');
  };

  return (
    <div className='m-4'>
      <h1>Crear configuración</h1>
      <form onSubmit={store}>
        <div className='mb-3'>



          <select
            value={tipos}
            onChange={(e) => setTipo(e.target.value)}
            name='form-select'
            aria-label='Default select example'
            
          >
            <option >
                tipo
              </option>
            {tiposTipo.map((tipo) => (
              <option key={tipo.id} value={tipo.id} >
                {tipo.nombre}
              </option>
            ))}
          </select>


          <select
            value={acomodacion}
            onChange={(e) => setAcomodacion(e.target.value)}
            name='form-select'
            aria-label='Default select example'
            key={acomodacion.id}
          >
            <option >
            acomodacion
                
              </option>
            {acomodacionesTipo.map((acomodacion) => (
              <option value={acomodacion.id} >
                {acomodacion.nombre}
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
            {estadosTipo.map((estado) => (
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

export default CrearConfiguraciones;
