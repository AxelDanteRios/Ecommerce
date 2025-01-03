import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import CartItem from "../CartItem/CartItem";

function Cart() {
  const {cart, clearCart, getTotal, totalQantity} = useCart()

  const total = getTotal()

  if(totalQantity === 0 ){
    return <h1>No hay items</h1>
  }
  return (
    <div style={{ justifyItems: "center" }}>
    <h1>Carrito</h1>
    {cart.map((item)=>(
      <CartItem key={item.id} {...item}/>
    ))}
    <h3>Total: ${total}</h3>
    <div style={{ 
      display:"flex",
      flexDirection: "column-reverse"
      }}>
      <button onClick={clearCart}> Limpiar carrito</button>
      <Link to='/checkout' className="btn btn-primary">Comprar</Link>
      </div>
    </div>
  );
}

export default Cart