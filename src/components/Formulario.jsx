/*Podemos hacerlo como lo tenemos en Header o con un arrow function*/
import { useState, useEffect } from "react";
import Error from "./Error";

//El useState: Cuál es el estado del componente, declararse antes del return
const Formulario = ({ pacientes, setPacientes,paciente, setPaciente}) => {
  const [nombre, setNombre] = useState("");
  const [primerApellido, setPrimerApellido] = useState("");
  const [segApellido, setSegApellido] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [tarjetaSeguro, setTarjeta] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect (()=>{
    if(Object.keys(paciente).length > 0){
      setNombre (paciente.nombre)
      setPrimerApellido (paciente.primerApellido)
      setSegApellido(paciente.segApellido)
      setEmail(paciente.email)
      setPhone(paciente.phone)
      setTarjeta(paciente.tarjetaSeguro)
      setAlta(paciente.alta)
      setSintomas(paciente.sintomas)
    }

  },[paciente])

  const handleSubmit = (e) => {
    e.preventDefault();

    //validación del formulario

    if (
      [
        nombre,
        primerApellido,
        segApellido,
        email,
        phone,
        tarjetaSeguro,
        alta,
        sintomas,
      ].includes("")
    ) {
      console.log("Hay algún campo vacío");
      setError(true);
      return;
    }
    setError(false);

    //Objecto de paciente

    const objPaciente = {
      nombre,
      primerApellido,
      segApellido,
      email,
      phone,
      tarjetaSeguro,
      alta,
      sintomas,
    };

    if (paciente.tarjetaSeguro){

      // Editando un registro 
      objPaciente.tarjetaSeguro = paciente.tarjetaSeguro
      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.tarjetaSeguro === paciente.tarjetaSeguro ? objPaciente : pacienteState
      )
      setPacientes(pacientesActualizados)
      setPaciente({}) // para limpiar el state

    }else {
      // Nuevo registro
      setPacientes([...pacientes, objPaciente]); //copiamos lo que hay en pacientes, no podemos hacer push sino mutaria los datos

    }



    //Reiniciar formulario ponemos todos los set con String vacia

    setNombre("");
    setPrimerApellido("");
    setSegApellido("");
    setEmail("");
    setPhone("");
    setTarjeta("");
    setAlta("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center text-red-500">
        Seguimiento de Pacientes
      </h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Paciente y {""}
        <span className="font-bold text-red-800">Adminístralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 "
      >
        {error && <Error><p>Todos los campos son obligatorios</p></Error> }
        <div className=" mb-5">
          <label
            htmlFor="nombre"
            className="text-gray-700 uppercase text-left block"
          >
            Nombre paciente
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Escribe el nombre"
            className="border-2 w-full p-2 mt-2 placeholder-red-200 placeholder:text-left rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)} // Cada vez que el evento se registre, que cambie con el SetNombre va escribiendo en el State nombre
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="primer-pellido"
            className="text-gray-700 uppercase md:text-left block"
          >
            Primer apellido
          </label>
          <input
            id="primer-pellido"
            type="text"
            placeholder="Escribe el primer apellido"
            className="border-2 p-2 mt-2 w-full placeholder-red-200 placeholder:text-left rounded-md"
            value={primerApellido}
            onChange={(e) => setPrimerApellido(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="seg-pellido"
            className="text-gray-700 uppercase text-left block"
          >
            Segundo apellido
          </label>
          <input
            id="seg-pellido"
            type="text"
            placeholder="Escribe el segundo apellido"
            className="border-2 p-2 mt-2 w-full placeholder-red-200 placeholder:text-left rounded-md"
            value={segApellido}
            onChange={(e) => setSegApellido(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="text-gray-700 uppercase text-left block"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Escribe el email"
            className="border-2 p-2 mt-2 w-full placeholder-red-200 placeholder:text-left rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="tlf"
            className="text-gray-700 uppercase text-left block"
          >
            Teléfono de contacto
          </label>
          <input
            id="tlf"
            type="phone"
            placeholder="Escribe el teléfono"
            className="border-2 p-2 mt-2 w-full placeholder-red-200 placeholder:text-left rounded-md"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="tarjeta"
            className="text-gray-700 uppercase text-left block"
          >
            Nº de Tarjeta
          </label>
          <input
            id="tarjeta"
            type="text"
            placeholder="Escribe el número de tarjeta"
            className="border-2 p-2 mt-2 w-full placeholder-red-200 placeholder:text-left rounded-md"
            value={tarjetaSeguro}
            onChange={(e) => setTarjeta(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="text-gray-700 uppercase text-left block"
          >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 p-2 mt-2 w-full placeholder-red-200 placeholder:text-left rounded-md"
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
          />
        </div>
        <div className=" mb-5">
          <label
            htmlFor="sintomas"
            className="text-gray-700 uppercase text-left block"
          >
            Síntomas
          </label>
          <textarea
            id="sintomas"
            placeholder="Describe síntomas"
            className="border-2 p-2 mt-2 w-full placeholder-red-200 placeholder:text-left rounded-md"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className=" bg-red-800 w-full p-3 text-white uppercase font-bold"
          value={paciente.tarjetaSeguro ? 'Editar Paciente': ' Agregar paciente'}
        />
      </form>
    </div>
  );
};

export default Formulario;
