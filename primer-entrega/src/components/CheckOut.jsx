import { useRef } from "react"

export const Checkout = () => {

const formRef = useRef()

const handleSubmit = (e) => {
    e.prenetDefault()
    console.log(formRef.current)
    const datForm = new FormData(formRef.current)
    console.log(datForm)
    const data = Object.fromEntries(datForm)
    console.log(data)
}

    return (
        <div className="max-w-md mx-auto p-6 bg-blue-200 rounded-md shadow-md">
            <form action="" ref={formRef} onSubmit={handleSubmit}>
                <label className="block mb-2 text-gray-700">Nombre: </label>
                <input type="text" className="w-full p-2 mb-4 border rounded-md" />
                <label className="block mb-2 text-gray-700">Apellido: </label>
                <input type="text" className="w-full p-2 mb-4 border rounded-md" />
                <label className="block mb-2 text-gray-700">DNI: </label>
                <input type="number" className="w-full p-2 mb-4 border rounded-md" />
                <label className="block mb-2 text-gray-700">Domicilio: </label>
                <input type="number" className="w-full p-2 mb-4 border rounded-md" />
                <label className="block mb-2 text-gray-700">Email: </label>
                <input type="email" className="w-full p-2 mb-4 border rounded-md" />
                <label className="block mb-2 text-gray-700">Telefono: </label>
                <input type="number" className="w-full p-2 mb-4 border rounded-md" />
                <button type="sumbit" className="w-full p-2 bg-blue-500 text-white rounded-md">Finalizar Compra</button>
            </form>
            
        </div>
    )
}