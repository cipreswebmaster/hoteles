import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { endpoint } from '../api/api';

const EditarHoteles = () => {
  const [nombre, setnombre] = useState('')
  const [estado, setestado] = useState('')

  const [ciudada, setciudada] = useState('')
  const [maximoHabitaciones, setMaximoHabitaciones] = useState('')
  const [direccion, setDireccion] = useState('')
  const [nit, setNit] = useState('')





  const [estadostipo, setEstadostipo] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();




  useEffect(() => {
    const getAllEstados = async () => {
      try {
        const response = await axios.get(`${endpoint}/estados`);
        console.log(`${endpoint}/estados`);
        setEstadostipo(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const getHotelById = async () => {
      try {
        const response = await axios.get(`${endpoint}/hotel/${id}`);
        console.log(response.data.nombre)
        setnombre(response.data.nombre);
        setestado(response.data.estado);
        setciudada(response.data.ciudad);
        setMaximoHabitaciones(response.data.maximoHabitaciones);
        setDireccion(response.data.direciones);
        setNit(response.data.nit);
      } catch (error) {
        console.error(error);
      }
    };

    getHotelById();
    getAllEstados();

  }, [id]);



  const actualizarHotel = async (e) => {
    e.preventDefault();
    if (!estado) {
      alert('Por favor, seleccione un estado');
      return;
    }

    try {
      await axios.put(`${endpoint}/hotel/${ id }`, {
        nombre: nombre,
        ciudada: ciudada,
        maximoHabitaciones: maximoHabitaciones,
        direccion: direccion,
        nit: nit,
        estado: estado

      });
      navigate('/hoteles');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='m-4'>
      <h1>Crerar hoteles </h1>
      <form onSubmit={actualizarHotel}>
        <div className='mb-3'>

          <label>nombres:</label>
          <input
            value={nombre}
            onChange={(e) => setnombre(e.target.value)}
            type='text'
            className='form-control'
          />

          <label>ciudada:</label>
          <input
            value={ciudada}
            onChange={(e) => setciudada(e.target.value)}
            type='text'
            className='form-control'
          />

          <label>maximoHabitaciones:</label>
          <input
            value={maximoHabitaciones}
            onChange={(e) => setMaximoHabitaciones(e.target.value)}
            type='number'
            className='form-control'
          />

          <label>direccion:</label>
          <input
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            type='text'
            className='form-control'
          />

          <label>nit:</label>
          <input
            value={nit}
            onChange={(e) => setNit(e.target.value)}
            type='text'
            className='form-control'
          />

          <select value={estado}
            onChange={(e) => setestado(e.target.value)}
            name="form-select"
            aria-label="Default select example"
            key={estado.id}
          >

            {estadostipo.map((estado) => (

              <option value={estado.id}>{estado.nombre}</option>

            ))}

          </select>
          <br></br>

          <button type='submit' className='btn btn-primary'> Crear</button>
        </div>
      </form>
    </div>
  );
};

export default EditarHoteles;
