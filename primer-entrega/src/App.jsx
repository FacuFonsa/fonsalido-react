
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/Item/ItemCount';
import { useState } from 'react';
import Products from './components/products';

function App() {

    const [cantidadProducto, setCantidadProducto] = useState(0)


    function onAdd(value) {
      setCantidadProducto(value)
    }

    console.log(cantidadProducto)

    

  return (
    
    <>
    
    
      <div>   
      <NavBar />
      <ItemListContainer greeting='Bienvenidos a Drummer Mind'/>
      <div className='cards-container'>
        <div className='product-container'>
      <Products img='https://http2.mlstatic.com/D_NQ_NP_2X_707135-MLU72867769390_112023-F.webp' title='Bateria Pearl' description='Bateria Pearl profesional Jr. Bombo 16"' price='$650.000'/>
      <ItemCount stock={15} onAdd={onAdd}/>;
      </div>
      <div className='product-container'>
      <Products img='https://http2.mlstatic.com/D_NQ_NP_2X_779734-MLA71779838606_092023-F.webp' title='Bateria Pearl' description='Bateria Pearl Roadshow Bombo 20"' price='$1.740.000'/>
      <ItemCount stock={15} onAdd={onAdd}/>;
      </div>
      <div className='product-container'>
      <Products img='https://http2.mlstatic.com/D_NQ_NP_2X_779489-MLU72268608217_102023-F.webp' title='Set de Platillos Paiste' description='Pst7 Universal Set' price='$870.000'/>
      <ItemCount stock={15} onAdd={onAdd}/>;
      </div>
      <div className='product-container'>
      <Products img='https://http2.mlstatic.com/D_NQ_NP_2X_714241-MLA48029977255_102021-F.webp' title='Set de Platillos Paiste' description='Paiste Pstxdjs45 Djset Hihat/crash/ride' price='$757.000'/>
      <ItemCount stock={15} onAdd={onAdd}/>;
      </div>
      </div>

      </div>

      
    </>
  )
}

export default App
