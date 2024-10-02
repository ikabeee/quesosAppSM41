//Primera lineas se importan las librerias y assets
import { useState } from 'react'
import './App.css'
//Importacion de componentes
import ExampleHookOne from './components/ExampleHookOne';
import ExampleHookTwo from './components/ExampleHookTwo';
function App() {
  

  return (
    //<> Contenedores influyen en el diseno y son con la etiqueta <>
    <>
      
      <ExampleHookTwo></ExampleHookTwo>
    </>
  )
}

export default App;
