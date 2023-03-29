import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { endpoint } from '../api/api';

const EditarConfiguraciones = () => {
  const [estado, setEstado] = useState('');
  const [tipos, setTipo] = useState('');
  const [acomodacion, setAcomodacion] = useState('');


  const [estadosTipo, setEstadosTipo] = useState([]);
  const [tiposTipo, setTiposTipo] = useState([]);
  const [acomodacionesTipo, setAcomodacionTipo] = useState([]);

  const navigate = useNavigate();

  const { id } = useParams();

  const actualizarConfiguracion = async (e) => {
    
    e.preventDefault();
    if (!estado) {
      alert('Por favor, seleccione un estado');
      return;
    }
    
    console.log({  
      tipo: tipos ,
      acomodacion: acomodacion,
      estado: estado } )
    try {
      await axios.put(`${endpoint}/configuracion/${ id }`, { 
        tipo: tipos ,
        acomodacion: acomodacion,
        estado: estado 
      });
      navigate('/configuraciones');
    } catch (error) {
      console.error(error);
    }
  };
  

  useEffect(() => {
    
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

    const getConfiguracionById = async () => {
      try {
        
        const response = await axios.get(`${endpoint}/configuracion/${id}`);
        setEstado(response.data.estados.id);
        setTipo(response.data.tipos.id)
        setAcomodacion(response.data.acomodaciones.id)
        
      } catch (error) {
        console.error(error);
      }
    };
   
    getAllTipos(); getAllAcomodacion(); getAllEstados();
    getConfiguracionById();
  }, [id]);

  return (
    <div className='m-4'>
      <h1 >Editar acomodaciones de </h1 >
      <form onSubmit={actualizarConfiguracion}>
        <div className='mb-3'>
          
        <select
            value={tipos}
            onChange={(e) => setTipo(e.target.value)}
            name='form-select'
            aria-label='Default select example'
            
          >
             <option >
            tipos
                
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
            estados
                
              </option>
            {estadosTipo.map((estado) => (
              <option value={estado.id} >
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

export default EditarConfiguraciones;
