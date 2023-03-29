import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { endpoint } from '../api/api';

const EditarHabitaciones = () => {
  const [estado, setEstado] = useState('');
  const [hoteles, setHotel] = useState('');
  const [configuracion, setConfiguracion] = useState('');
  


  const [estadosTipo, setEstadosTipo] = useState([]);
  const [hotelesTipo, setHotelTipo] = useState([]);
  const [configuracionesTipo, setConfiguracionTipo] = useState([]);

  const navigate = useNavigate();

  const { id } = useParams();

  const EditarHabitacion = async (e) => {
    
    e.preventDefault();
    if (!estado) {
      alert('Por favor, seleccione un estado');
      return;
    }
    
    console.log({  
      hotel: hoteles ,
      configuracion: configuracion,
      estado: estado } )
    try {
      await axios.put(`${endpoint}/habitacion/${ id }`, { 
        hotel: hoteles ,
        configuracion: configuracion,
        estado: estado 
      });
      navigate('/habitaciones');
    } catch (error) {
      console.error(error);
    }
  };
  

  useEffect(() => {
    
    const getAllEstados = async () => {
      
      const response = await axios.get(`${endpoint}/estados`);
      setEstadosTipo(response.data);
  
    };
  
    const getAllHotel = async () => {
      
      const response = await axios.get(`${endpoint}/hoteles`);
      setHotelTipo(response.data);
  
    };
  
    const getAllConfiguracion = async () => {
      
      const response = await axios.get(`${endpoint}/configuraciones`);
      setConfiguracionTipo(response.data);
  
    };

    const getConfiguracionById = async () => {
      try {
        
        const response = await axios.get(`${endpoint}/habitacion/${id}`);
        setEstado(response.data.estado);
        setHotel(response.data.hotel)
        
        setConfiguracion(response.data.configuracion)
        
      } catch (error) {
        console.error(error);
      }
    };
   
    getAllHotel(); getAllConfiguracion(); getAllEstados();
    getConfiguracionById();
  }, [id]);

  return (
    <div className='m-4'>
      <h1 >Editar habitacion {`${ id }` }</h1 >
      <form onSubmit={EditarHabitacion}>
        <div className='mb-3'>
          
        <select
            value={hoteles}
            onChange={(e) => setHotel(e.target.value)}
            name='form-select'
            aria-label='Default select example'
            
          >
             <option >
            hoteles
                
              </option>
            
            {hotelesTipo.map((hotel) => (
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
            {configuracionesTipo.map((configuracion) => (
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
            
          >
         <option >
            estados
                
              </option>
            {estadosTipo.map((estado) => (
              <option key={estado.id} value={estado.id} >
                
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

export default EditarHabitaciones;
