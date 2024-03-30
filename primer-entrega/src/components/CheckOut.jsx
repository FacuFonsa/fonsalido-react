import { useRef } from "react"
import { useCarritoContext } from "../context/CartContext"
import { Link, useNavigate } from "react-router-dom"
import { createOrdenCompra, getOrdenCompra } from "../firebase/firebase"

export const Checkout = () => {

const formRef = useRef()
const navigate = useNavigate()
const { carrito, totalPrice, emptyCart } = useCarritoContext()

const handleSubmit = (e) => {
    e.prenetDefault()
    console.log(formRef.current)
    const datForm = new FormData(formRef.current)
    console.log(datForm)
    const data = Object.fromEntries(datForm)
    console.log(data)

    const aux = [...carrito]
    aux.forEach(prodCarrito => {
        getProduct(prodCarrito.id).then(prodBDD => {
            if (prodBDD.stock >= prodCarrito.quantity) {
                prodBDD.stock -= prodCarrito.quantity
                updateProduct(prodBDD.id, prodBDD)
            } else {
                    console.log(`El producto con el nombre ${prod.title} no puede continuar con la compra ya que no posee stock suficiente`,)
                    aux.filter(prod => prod.id != prodBDD.id)
                    }
                })
            })
    aux.map(prod => ({id: prod.id, quantity: prod.quantity, price: prod.price }))

    createOrdenCompra(cliente, totalPrice(), aux, new Date().toLocaleDateString('es-AR', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }))
    .then(ordenCompra => {
        toast.success(`🛒 Muchas gracias por comprar con nosotros, su ID de compra es: ${ordenCompra.id} por un total de $${totalPrice()}. En breve nos contactaremos para realizar envio`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        })

        emptyCart()
        e.target.reset()
        navigate('/')
    })
    .catch(e => {
        toast.error(`Error al generar orden de compra: ${e}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        })
    })

}

return (
    <>
        {
            carrito.length === 0 ?
                <>
                    <h2>Para finalizar compra debe tener productos en el carrito</h2>
                    <Link to={"/"}>
                        <button className="bg-indigo-500 text-white px-4 py-2 rounded">
                            Volver al inicio
                        </button>
                    </Link>
    
                </>
                :
        
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

        }
    </>
    )
    
}
