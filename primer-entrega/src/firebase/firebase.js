import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCiZYcjfradYRfOeKbPV56Ui51yfpmlR5c",
    authDomain: "react-fonsalido.firebaseapp.com",
    projectId: "react-fonsalido",
    storageBucket: "react-fonsalido.appspot.com",
    messagingSenderId: "794549710501",
    appId: "1:794549710501:web:892b45a99f3dac5ca6a74c"
};

const app = initializeApp(firebaseConfig);


const bdd = getFirestore()

const Prods = [
    {
        
        "title": "Pearl",
        "description": "Profesional bombo 16",
        "price": 2675,
        "stock": 108,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-fonsalido.appspot.com/o/bateria%201.webp?alt=media&token=caf6861b-b1b6-4dd3-a6e6-38b5ffa1ed58",
        "Category": "Bateria"

    },
    {
        
        "title": "Pearl",
        "description": "Profesional bombo 20",
        "price": 2480,
        "stock": 122,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-fonsalido.appspot.com/o/bateria%202.webp?alt=media&token=b13b7319-ed08-4549-8e06-b351841f05d1",
        "Category": "Bateria"
    },
    {
        
        "title": "Paiste",
        "description": "Set de platos Pst7",
        "price": 2600,
        "stock": 100,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-fonsalido.appspot.com/o/paiste%20pst7.webp?alt=media&token=2112397b-a378-4d39-9007-157afb11dde6",
        "Category": "platillos"
    },
    {
        
        "title": "Paiste",
        "description": "Set de Platos pstx",
        "price": 2350,
        "stock": 130,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-fonsalido.appspot.com/o/paiste%20pstx.webp?alt=media&token=1576016a-9355-428f-9490-829a37088fe4",
        "Category": "platillos"
    }
    
]

export const createProducts = async () => {

    Prods.forEach(async (prod) => {
        await addDoc(collection(bdd, "Productos"), {
            title: prod.title,
            description: prod.description, 
            price: prod.price,
            stock: prod.stock,
            img: prod.img,
            Category: prod.Category
        })
    })
}

export const getProducts = async () => {
    const Productos = await getDocs(collection(bdd, "Productos"))
    console.table(Productos.docs)
    const items = Productos.docs.map(prod => {return { ...prod.data(), id: prod.id}})
    return items
}
export const getProduct = async (id) => {
    const Productos = await getDoc(doc(bdd, "Productos", id))
    const items =  { ...Productos.data(), id: Productos.id}
    return items
}

export const updateProduct = async (id, info) => {
    const respuesta = await updateDoc(doc(bdd, "Productos", id), info)
    return respuesta

}

export const deleteProduct = async (id) => {
    const respuesta = await deleteDoc(doc(bdd, "Productos", id))
    return respuesta
}


export const createOrdenCompra = async (cliente, precioTotal, carrito, fecha) => {
    const ordenCompra = await addDoc(collection(bdd, "ordenesCompra"), {
        cliente: cliente,
        items: carrito,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(bdd, "ordenesCompra", id))
    const item = { ...ordenCompra.data(), id: ordenCompra.id }
    return item
}

createProducts()