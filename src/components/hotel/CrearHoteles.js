import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { endpoint } from '../api/api';

const CrearHoteles = () => {

    /**informacion de la tabla */
    const [nombre, setnombre] = useState('')
    const [ciudada, setciudada] = useState('')
    const [maximoHabitaciones, setMaximoHabitaciones] = useState('')
    const [direccion, setDireccion] = useState('')
    const [nit, setNit] = useState('')



    /** */
    const [estado, setestado] = useState('')



    /** llama informacion de todos los estados estados */
    const [estadostipo, setEstadostipo] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        getAllEstados();
    }, []);

    const getAllEstados = async () => {
        const response = await axios.get(`${endpoint}/estados`);
        setEstadostipo(response.data);
    };

    const store = async (e) => {
        console.log({
            nombre: nombre,
            ciudada: ciudada,
            maximoHabitaciones: maximoHabitaciones,
            direccion: direccion,
            nit: nit,
            estado: estado


        }        )
        e.preventDefault()
        if (!estado) {
            alert('Por favor, seleccione un estado');
            return;
        }

        await axios.post(`${endpoint}/hotel`, {
            nombre: nombre,
            ciudada: ciudada,
            maximoHabitaciones: maximoHabitaciones,
            direccion: direccion,
            nit: nit,
            estado: estado  
        })

        navigate('/hoteles')
    }

    return (
        <div className='m-4'>
            <h1>Crerar hoteles </h1>
            <form onSubmit={store}>
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
    )
}

export default CrearHoteles