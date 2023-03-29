import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* importa vista de sitio*/
import Home from './components/paginas/Home';
import Menu from './components/menu/Menu';

/* importa vista de sitio*/
import ShowEstados from './components/estados/ShowEstados'
import CrearEstados from './components/estados/CrearEstados';
import EditEstados from './components/estados/EditEstados';

/* importa vista de sitio*/
import ShowaAomodaciones from './components/acomodaciones/ShowAcomodaciones';
import CrearAcomodaciones from './components/acomodaciones/CrearAcomodaciones';
import EditarAcomodaciones from './components/acomodaciones/EditarAcomodaciones';

/**importa vistas configuraciones */
import ShowConfiguraciones from './components/configuraciones/ShowConfiguraciones';
import CrearConfiguraciones from './components/configuraciones/CrearConfiguraciones';
import EditarConfiguraciones from './components/configuraciones/EditarConfiguraciones';


/** importa vistas tipos */
import ShowTipos from './components/tipo/ShowTipos';
import CrearTipos from './components/tipo/CrearTipos';
import EditarTipos from './components/tipo/EditarTipos';


/** importa vistas hoteles */
import ShowHoteles from './components/hotel/ShowHoteles';
import CrearHoteles from './components/hotel/CrearHoteles';
import EditarHoteles from './components/hotel/EditarHoteles';

/** habitaciones */
import ShowHabitaciones from './components/Habitaciones/ShowHabitaciones';
import CrearHabitaciones from './components/Habitaciones/CrearHabitaciones';
import EditarHabitaciones from './components/Habitaciones/EditarHabitaciones';


function App() {
  return (
    <div className="App">


      <BrowserRouter>


        <Menu />


        <Routes>

          {/*"vistaas home"*/}
          <Route path='/' element={<Home />} />

          {/** tipos */}
          <Route path='/Tipos' element={<ShowTipos />} />
          <Route path='/Tipo.crear' element={<CrearTipos />} />
          <Route path='/Tipo.editar/:id' element={<EditarTipos />} />

          {/** hoteles*/}
          <Route path='/hoteles' element={<ShowHoteles />} />
          <Route path='/hotel.Crear' element={<CrearHoteles />} />
          <Route path='/hotel.editar/:id' element={<EditarHoteles />} />


          { /**configuraciones */}
          <Route path='/Configuraciones' element={<ShowConfiguraciones />} />
          <Route path='/Configuracion.crear' element={<CrearConfiguraciones />} />
          <Route path='/Configuracion.editar/:id' element={<EditarConfiguraciones />} />

        {/**acomodacion*/}
        <Route path='/Acomodaciones' element={<ShowaAomodaciones />} />
          <Route path='/Acomodacion.crear' element={<CrearAcomodaciones />} />
          <Route path='/Acomodacion.editar/:id' element={<EditarAcomodaciones />} />



          {/**habitaciones*/}

          <Route path='/habitaciones' element={<ShowHabitaciones />} />
          <Route path='/habitacion.Crear' element={<CrearHabitaciones />} />
          <Route path='/habitacion.editar/:id' element={<EditarHabitaciones />} />




          {/**estados */}
          <Route path='/Estados' element={<ShowEstados />} />
          <Route path='/Estados.crear' element={<CrearEstados />} />
          <Route path='/Estados.editar/:id' element={<EditEstados />} />

  

   

        </Routes>


      </BrowserRouter>


    </div>
  );
}

export default App;
