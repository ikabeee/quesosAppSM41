//Primera lineas se importan las librerias y assets
import { useState } from 'react'
import './App.css'
//Importacion de componentes

import AtmosphericConditions from './components/AtmosphericConditions';
function App() {
  

  return (
    //<> Contenedores influyen en el diseno y son con la etiqueta <>
    <>
    <AtmosphericCondition></AtmosphericCondition>
    </>
  )
}

export default App;
