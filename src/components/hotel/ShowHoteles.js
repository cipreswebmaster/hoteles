import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { endpoint } from '../api/api';

const useShowHoteles = () => {
    const [hoteles, setHoteles] = useState([]);

    useEffect(() => {
        getAllHoteles();
    }, []);

    const getAllHoteles = async () => {
        const response = await axios.get(`${endpoint}/hoteles?_embed=estado`);
        setHoteles(response.data);
    };

    const deleteHotel = async (id) => {
        await axios.delete(`${endpoint}/hotel/${id}/`);
        getAllHoteles();
    };

    return { hoteles, deleteHotel };
};

const ShowHoteles = () => {
    const { hoteles, deleteHotel } = useShowHoteles();

    return (
        <div className='m-4'>
            <div className='d-grid gap-2'>
                <Link to='/hotel.Crear' className='btn btn-success btn-lg mt-2 mb-2 text-white'>
                    Crear
                </Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Nombre</th>
                            <th>Estado</th>

                            <th>ciudad</th>
                            <th>masxio en abitaciones</th>
                            <th>direccion</th>
                            <th>nit</th>

                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hoteles.map((hotel) => (
                            <tr key={hotel.id}>
                                <td>{hotel.id}</td>
                                <td>{hotel.nombre}</td>
                                <td>{hotel.estados.nombre}</td>
                                <td>{hotel.ciudad}</td>
                            <td>{hotel.maximoHabitaciones}</td>
                            <td>{hotel.direciones}</td>
                            <td>{hotel.nit}</td>



                                <td>
                                    <Link to={`/hotel.editar/${hotel.id}`} className='btn btn-primary me-2'>
                                        Editar
                                    </Link>
                                    <button onClick={() => deleteHotel(hotel.id)} className='btn btn-danger'>
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

export default ShowHoteles;

