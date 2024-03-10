import { Link } from "react-router-dom"
import { useCarritoContext } from "../../context/CartContext"


export const Cart = () => {
    const { Carrito, totalPrice, emptyCart } = useCarritoContext()
    return (
    <>
        {
            Carrito.length === 0 ?
            <>
                <h1>Carrito Vacio</h1>
                <button className="bg-indigo-500 text-white px-4 py-2 rounded" >
                <Link to={'/'}>
                    Volver al Inicio 
                </Link>

                </button>    
            </>
            :
            <>
            <h1>Carrito Lleno</h1>
            </>
        }

        
    </>
    )
}