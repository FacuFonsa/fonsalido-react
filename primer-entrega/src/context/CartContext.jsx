const CarritoContext = createContext()

export const useCarritoContext = () => useContext(CarritoContext)

export const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState ([])

    const isInCart = (id) => {
        return carrito.some(prod => prod.id === id)
    }

    const addItem = (item, cantidad) => {
        if(isInCart(item.id)) {
            const indice = carrito.findIndex(prod => prod.id === id)
            const aux = [...carrito]
            aux[indice].quantity = quantity
            setCarrito(aux)

        } else {
            const newItem = {
                ...item,
                quantity: cantidad
            }

            setCarrito([...carrito, newItem])
        }

    }

    const removeItem = (id) => {
        const aux = [...carrito]
        const indice = aux.findeIndex(prod => prod.id === id)

        if (indice != -1) {
            setCarrito(aux.splice(indice, 1))
        }

        setCarrito(carrito.filter(prod => prod.id !== id))

    }

    const emptyCart = () => {
        setCarrito([])
    }

    const getItemQuantity = () => {
        return carrito.reduce((acum, prod) => acum += prod.quantity, 0)
    }

    const totalPrice = () => {
        return carrito.reduce((acum,prod) => acum += (prod.quantity * prod.prize), 0)
    }

    console.log(carrito)
    return (
        <CarritoContext.Provider value={{ carrito, addItem, removeItem, emptyCart, getItemQuantity, totalPrice}}>
            {props.children}

        </CarritoContext.Provider>    
    )

}