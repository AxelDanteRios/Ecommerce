import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Card from './components/Card';
import { CartProvider } from "./context/CartContext";
import { NotificationProvider } from "./context/NotificationContext";
function App() {
  return (
    <BrowserRouter>
    <NotificationProvider>
      <CartProvider>
    <NavBar title="Retro Replay"/>
    <Routes>
      <Route path="/" element={<ItemListContainer  greeting="Bienvenidos"/>} />
      <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
      <Route path="/detail/:productId" element={<ItemDetailContainer/>} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      {/* <Route path="/contacto" element={<Card />} /> */}
      <Route path="*" element={<h2>404</h2>} />
    </Routes>
    </CartProvider>
    </NotificationProvider>
    </BrowserRouter>
  )
}

export default App
