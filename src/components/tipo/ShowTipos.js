import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { endpoint } from '../api/api';



const useShowTipos = () => {
    /** almacena los tipos dijitados */
    const [tipos, setTipos] = useState([]);

    useEffect(() => {
        getAllTipos();
    }, []);

    const getAllTipos = async () => {
        const response = await axios.get(`${ endpoint }/tipos?_embed=estado`);
        setTipos(response.data);
    };

    const deleteTipo = async (id) => {
        await axios.delete(`${endpoint}/tipo/${id}/`);
        getAllTipos();
    };

    return { tipos, deleteTipo };
};

const ShowTipos = () => {
    const { tipos, deleteTipo } = useShowTipos();

    return (
        <div className='m-4'>
            <div className='d-grid gap-2'>
                <h1> tipos</h1>
                <Link to='/Tipo.crear' className='btn btn-success btn-lg mt-2 mb-2 text-white'>
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
                        {tipos.map((tipo) => (
                            <tr key={tipo.id}>
                                <td>{tipo.id}</td>
                                <td>{tipo.nombre}</td>
                                <td>{tipo.estados.nombre}</td>
                                <td>
                                    <Link to={`/Tipo.editar/${tipo.id}`} className='btn btn-primary me-2'>
                                        Editar
                                    </Link>
                                    <button onClick={() => deleteTipo(tipo.id)} className='btn btn-danger'>
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

export default ShowTipos;

