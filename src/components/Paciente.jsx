
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {


  const {nombre, primerApellido, segundoApellido,email,phone,tarjetaSeguro,alta,sintomas} = paciente

  const handleEliminar = ()=>{
    const response = confirm ('Deseas eliminar este paciente?')

    if(response){
      eliminarPaciente(paciente.tarjetaSeguro)
    }

  }
  
  return (
    <div className="mx-3 my-10
     bg-white shadow-md px-5 py-10 rounded-xl">
    <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:
      <span className="font-normal normal-case">{nombre}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Primer Apellido:
      <span className="font-normal normal-case">{primerApellido}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Segundo Apellido:
      <span className="font-normal normal-case">{segundoApellido}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">email:
      <span className="font-normal normal-case">{email}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">teléfono:
      <span className="font-normal normal-case">{phone}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Número tarjeta:
      <span className="font-normal normal-case">{tarjetaSeguro}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de alta:
      <span className="font-normal normal-case">{alta}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas:
      <span className="font-normal normal-case"> {sintomas}</span>
    </p>
    <div className="flex justify-between mt-10 ">
      <button 
        type="button"
        className="py-2 px-10 bg-emerald-300 rounded-md text-emerald-900 font-bold uppercase"
        onClick={()=> setPaciente(paciente)}
        >Editar 
      </button>
      <button 
        type="button"
        className="py-2 px-10 bg-red-300 rounded-md text-red-900 font-bold uppercase"
        onClick={handleEliminar}
        > Eliminar 
      </button>
    </div>
  </div>
  )
}

export default Paciente
