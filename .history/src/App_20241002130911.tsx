//Primera lineas se importan las librerias y assets
import { useState } from 'react'
import './App.css'
//Importacion de componentes
import Button from './components/Button';
function App() {
  const [count, setCount] = useState(0)

  return (
    //<> Contenedores influyen en el diseno y son con la etiqueta <>
    <>
      <h1>Bienvenidos</h1>
      
    </>
  )
}

export default App;
