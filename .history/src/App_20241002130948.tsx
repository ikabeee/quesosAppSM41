//Primera lineas se importan las librerias y assets
import { useState } from 'react'
import './App.css'
//Importacion de componentes
import Button from './components/Button';
import ExampleHookOne from './components/ExampleHookOne';
function App() {
  const [count, setCount] = useState(0)

  return (
    //<> Contenedores influyen en el diseno y son con la etiqueta <>
    <>
      
      <ExampleHookOne></ExampleHookOne>
      <Button></button>
    </>
  )
}

export default App;
