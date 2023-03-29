import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { endpoint } from '../api/api';

const useShowAcomodaciones = () => {
    const [acomodaciones, setAcomodaciones] = useState([]);

    useEffect(() => {
        getAllAcomodaciones();
    }, []);

    const getAllAcomodaciones = async () => {
        const response = await axios.get(`${endpoint}/acomodaciones?_embed=estado`);
        setAcomodaciones(response.data);
    };




    const deleteAcomodacion = async (id) => {
        await axios.delete(`${endpoint}/acomodacion/${id}/`);

        getAllAcomodaciones();
    };


    return { acomodaciones, deleteAcomodacion };
};

const ShowAcomodaciones = () => {
    const { acomodaciones, deleteAcomodacion } = useShowAcomodaciones();

    return (
        <div className='m-4'>
            <div className='d-grid gap-2'>
                <Link to='/Acomodacion.crear' className='btn btn-success btn-lg mt-2 mb-2 text-white'>
                    Crear
                </Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Nombre</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {acomodaciones.map((acomodacion) => (
                            <tr key={acomodacion.id}>
                                <td>{acomodacion.id}</td>
                                <td>{acomodacion.nombre}</td>
                                <td>{acomodacion.estados.nombre}</td>
                                <td>
                                    <Link to={`/Acomodacion.editar/${acomodacion.id}`} className='btn btn-primary me-2'>
                                        Editar
                                    </Link>
                                    <button onClick={() => deleteAcomodacion(acomodacion.id)} className='btn btn-danger'>
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

export default ShowAcomodaciones;
