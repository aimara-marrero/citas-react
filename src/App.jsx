import {useState} from 'react';
import Formulario from './components/Formulario.jsx';
import Header from './components/Header.jsx'
import ListadoPacientes from './components/ListadoPacientes.jsx';


function App() {
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  const eliminarPaciente = (id) =>{
  const pacientesActualizados = pacientes.filter(paciente=>paciente.tarjetaSeguro !== id)
  setPacientes(pacientesActualizados)
  }
  return (
    <div className='container mx-auto mt-20'>
      <Header
      />
      <div className='mt-12 md:flex'>
          <Formulario
            pacientes = {pacientes}
            setPacientes={setPacientes}
            paciente={paciente}
            setPaciente={setPaciente}
            
          />
      <ListadoPacientes
      pacientes = {pacientes}
      setPaciente={setPaciente}
      eliminarPaciente= {eliminarPaciente}
          
      />
      </div>
    
    </div>
  )
}

export default App;
