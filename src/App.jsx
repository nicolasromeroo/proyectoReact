import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/styles/styles.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import Body from './Components/Body';
import PieDePagina from './Components/PieDePagina';
import Vuelos from './Components/Vuelos';
import ItemDetailContainer from './Components/ItemDetailContainer';
import CartContextProvider from './Components/context/CartContext';
import Cart from './Components/Cart';
import CartWidget from './Components/CartWidget';
import CheckOut from './Components/CheckOut';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar>
          <CartWidget />
        </NavBar>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/category" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/vuelos" element={<Vuelos />} />
          <Route path="/pais/:id" element={<Vuelos />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
        <PieDePagina />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;


{/* <NavBar /> */ }
{/* <Promesas></Promesas> */ }
{/* <Fetch></Fetch> */ }
{/* <Body /> */ }