import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <>
      <div>   
      <NavBar />
      <ItemListContainer greeting='Bienvenidos a Drummer Mind'/>
      </div>
      
    </>
  )
}

export default App
