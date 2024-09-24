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
      <h2>Carlos Gonzalez Mollinedo</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore reprehenderit praesentium necessitatibus, illum architecto fugit iure facere ab ut voluptatibus? Illum qui provident dolores doloremque voluptate nesciunt explicabo fugit alias.</p>
      
    </>
  )
}

export default App;
