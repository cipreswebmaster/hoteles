import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { endpoint } from '../api/api';

const EditarAcomodaciones = () => {
  const [nombre, setNombre] = useState('');
  const [estado, setEstado] = useState('');
  const [estadosTipo, setEstadosTipo] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();

  const actualizarAcomodacion = async (e) => {
    e.preventDefault();
    if (!estado) {
      alert('Por favor, seleccione un estado');
      return;
    }
  
    try {
      await axios.put(`${endpoint}/acomodacion/${id}`, { nombre, estado: estado });
      navigate('/Acomodaciones');
    } catch (error) {
      console.error(error);
    }
  };
  

  useEffect(() => {
    const getAllEstados = async () => {
      try {
        const response = await axios.get(`${endpoint}/estados`);
        setEstadosTipo(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    
    const getAcomodacionById = async () => {
      try {
        const response = await axios.get(`${endpoint}/acomodacion/${id}`);
        setNombre(response.data.nombre);
        setEstado(response.data.estado_id);
      } catch (error) {
        console.error(error);
      }
    };
    getAllEstados();
    getAcomodacionById();
  }, [id]);





  return (
    <div className='m-4'>
      <h1>Editar acomodaciones</h1>
      <form onSubmit={actualizarAcomodacion}>
        <div className='mb-3'>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            type='text'
            className='form-control'
          />
          <select
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            name='form-select'
            aria-label='Default select example'
            className='form-select'
          >
            {estadosTipo.map((estado) => (
              <option key={estado.id} value={estado.id}>
                {estado.nombre}
              </option>
            ))}
          </select>
          <button type='submit' className='btn btn-primary'>
            Actualizar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditarAcomodaciones;
