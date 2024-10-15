//Primera lineas se importan las librerias y assets
import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
//Importacion de componentes

import AtmosphericConditions from './components/AtmosphericConditions';
import ExampleAxios from './components/ExampleAxios';
import ExampleMap from './components/ExampleMap';
function App() {
  

  return (
    //<> Contenedores influyen en el diseno y son con la etiqueta <>
    <>
    <ExampleMap/>
    </>
  )
}

export default App;
