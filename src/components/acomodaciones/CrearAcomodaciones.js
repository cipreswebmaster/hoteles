import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { endpoint } from '../api/api';

const CrearAcomodaciones = () => {
    const [nombre, setnombre] = useState('')
    const [estado, setestado] = useState('')
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
        e.preventDefault()
        if (!estado) {
            alert('Por favor, seleccione un estado');
            return;
          }

        await axios.post(`${endpoint}/acomodacion`, {
            nombre: nombre,
            estado: estado
        })

        navigate('/Acomodaciones')
    }

    return (
        <div className='m-4'>
            <h1>crerar acomodaciones </h1>
            <form onSubmit={store}>
                <div className='mb-3'>

                    <input
                        value={nombre}
                        onChange={(e) => setnombre(e.target.value)}
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


                    <button type='submit' className='btn btn-primary'> Crear</button>
                </div>
            </form>
        </div>
    )
}

export default CrearAcomodaciones