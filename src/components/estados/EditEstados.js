import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { endpoint } from '../api/api';


const EditEstados = () => {
  const [nombre, setNombre] = useState('')
  const navigate = useNavigate()
  const { id } = useParams()

  const actualizarEstado = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`${endpoint}/estado/${id}`, { nombre })
      navigate('/estados')
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const getEstadoById = async () => {
      try {
        const response = await axios.get(`${endpoint}/estado/${id}`)
        setNombre(response.data.nombre)
      } catch (error) {
        console.error(error)
      }
    }
    getEstadoById()
  }, [id])

  return (
    <div className='m-4' >
      <h1>Editar estado</h1>
      <form onSubmit={actualizarEstado}>
        <div className='mb-3'>
        <h2>
         <p>Id del estado: {id}</p> 
          </h2>
          <h2 className='form-label'>
            Nombre estado
          </h2>
          
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            type='text'
            className='form-control'
          />
          <button type='submit' className='btn btn-primary'>
            Actualizar
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditEstados
