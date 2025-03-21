export function HeadeInstitutional() {
  return (
    <div className="flex justify-center bg-green-600 w-full h-14 items-center border-b-2">
      <div className="flex flex-row   justify-between h-full w-10/12">
        <div className="flex flex-row items-center">
          <h1 className="text-2xl font-bold text-white">GRPro</h1>
          <h1 className="text-2xl font-bold text-yellow-400">.Agro</h1>
        </div>
        <div className="flex gap-7 mr-3 flex-row items-center">
          <a
            href="/Application/Home"
            className="mx-2 text-white hover:text-yellow-300 transition durantion-300"
          >
            Home
          </a>
          <span className="border-l border-gray-300 h-6"></span>
          <a
            href="#"
            className="mx-2 text-white hover:text-yellow-300 transition durantion-300"
          >
            Soluções
          </a>
          <span className="border-l border-gray-300 h-6"></span>
          <a
            href="#"
            className="mx-2 text-white hover:text-yellow-300 transition durantion-300"
          >
            Nossos Clientes
          </a>
          <span className="border-l border-gray-300 h-6"></span>
          <a
            href="#"
            className="mx-2 text-white hover:text-yellow-300 transition durantion-300"
          >
            Downloads
          </a>
          <span className="border-l border-gray-300 h-6"></span>
          <a
            href="#"
            className="mx-2 text-white hover:text-yellow-300 transition durantion-300"
          >
            Sobre
          </a>
          <span className="border-l border-gray-300 h-6"></span>
          <a
            href="/Application/SignIn"
            className="mx-2 text-white hover:text-yellow-300 transition durantion-300"
          >
            Área do cliente
          </a>
        </div>
      </div>
    </div>
  )
}
