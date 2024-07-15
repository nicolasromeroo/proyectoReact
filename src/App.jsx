import { useEffect, useState } from 'react'
import './assets/styles/styles.css'
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'
import Body from './Components/Body'
import PieDePagina from './Components/PieDePagina'
// import Promesas from './Components/Promesas'
// import Fetch from './Components/Fetch'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Vuelos from './Components/Vuelos'
import ItemDetailContainer from './Components/ItemDetailContainer'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<Body />} />

          <Route path={"/category"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />

          <Route path={"/vuelos"} element={<Vuelos />} />
          <Route path={"/pais/:id"} element={<Vuelos />} />
          
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        </Routes>
        <PieDePagina />
      </BrowserRouter>

    </>
  )
}

export default App

{/* <NavBar /> */ }
{/* <Promesas></Promesas> */ }
{/* <Fetch></Fetch> */ }
{/* <Body /> */ }