import React, { useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { endpoint } from '../api/api';





const CrearEstados = () => {

const [nombre,setnombre]=useState('')

const navigate= useNavigate()

const store= async (e) => {
    e.preventDefault()
    await axios.post(`${endpoint}/estado`,{nombre:nombre})
  
navigate('/estados')
}

  return (
    <div className='m-4'>
        <h1>crerar estado </h1>
        <form onSubmit={store}>
            <div className='mb-3'>

           
            <label className='form-label'>
                nombre del nuevo estado
            </label>
            <input 
            value={nombre}
            onChange={(e)=>setnombre(e.target.value)}
            type='text'
            className='form-control'
            /> 
           
            <button  type='submit' className='btn btn-primary'> Crear</button>
            </div>
        </form>
    </div>
  )
}

export default CrearEstados