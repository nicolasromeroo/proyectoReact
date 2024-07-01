import { useState } from 'react'
import './assets/styles/styles.css'
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'
import Body from './Components/Body'
import PieDePagina from './Components/PieDePagina'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer titulo="Special Travel" subtitulo="Encontrá tu próximo destino" parrafo="Consultá fechas disponibles"/>
      <Body />
      <PieDePagina />
    </>
  )
}

export default App
