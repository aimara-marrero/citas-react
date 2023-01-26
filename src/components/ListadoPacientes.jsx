import Paciente from "./Paciente";


const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {


  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll mx-3">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center text-emerald-500">
            Listado Pacientes
          </h2>

          <p className="text-xl mt-5 mb-10 text-center">
            {" "}
            Administra tus {""}
            <span className="text-emerald-600 font-bold">
              Pacientes y Citas
            </span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente 
            key={paciente.tarjetaSeguro} 
            paciente={paciente} 
            setPaciente = {setPaciente}
            eliminarPaciente = {eliminarPaciente}
            
            
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center text-emerald-500">
            No hay pacientes
          </h2>

          <p className="text-xl mt-5 mb-10 text-center">
            {" "}
            Comienza agregando {""}
            <span className="text-emerald-600 font-bold">
              Pacientes
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
