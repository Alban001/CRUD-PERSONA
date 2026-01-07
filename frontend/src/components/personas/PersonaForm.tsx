

const PersonaForm = () => {
  return (
    <div className="h-screen w-full bg-gray-200 flex items-center justify-center">
      <div>
        <h1 className="font-bold text-center">Crea una persona</h1>
        <form className="border rounded-sm border-gray-400 m-4 p-8 ring-1 ring-green-200" action="">
          <div className="flex flex-col gap-4 p-4">
            <div><label>Nombre:</label></div>
            <div><input type="text" placeholder="Ingresa tu nombre" className="w-full border outline-none  hover:ring-1 ring-green-400 rounded-sm"/></div>
          </div>
          <div className="flex flex-col gap-4 p-4">
            <div><label>Edad:</label></div>
            <div><input type="number" placeholder="Ingresa tu edad" className="w-full border outline-none  hover:ring-1 ring-green-400 rounded-sm"/></div>
          </div>
          <div className="flex justify-center items-center ">
            <button className="button bg-orange-400 p-2 m-2 rounded-sm hover:bg-orange-500 transition duration-100 ease-in-out hover:shadow-sm hover:scale-102 hover:text-white">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PersonaForm