//Primera lineas se importan las librerias y assets
import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
//Importacion de componentes

import Map from './components/Map';
function App() {
  

  return (
    //<> Contenedores influyen en el diseno y son con la etiqueta <>
    <>
    <Map/>
    </>
  )
}

export default App;
