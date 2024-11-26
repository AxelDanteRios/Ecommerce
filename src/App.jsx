import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {


  return (
    <BrowserRouter>
    <NavBar title="Retro Replay"/>
    <Routes>
      <Route path="/" element={<ItemListContainer  greeting="Bienvenidos"/>} />
      <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
      <Route path="/detail/:productId" element={<ItemDetailContainer/>} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<h2>404</h2>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
