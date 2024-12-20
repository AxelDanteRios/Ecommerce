import { useState } from "react";


export default function ItemCount({initialValue=1, stock, onAdd}) {
    const [cantidad, setCantidad] = useState(initialValue)
 
  
    const decrement = () => {
        if(cantidad>1){
            setCantidad(cantidad => cantidad -1)
        }
    }
    const increment = () => {
        if(stock > cantidad){
            setCantidad((cantidad) => cantidad + 1);
        }
    }

    return (
      <>
        <h1>{cantidad}</h1>
        <button onClick={decrement} className="btn btn-primary border-1 border-dark">Decrementar</button>
        <button onClick={() => onAdd(cantidad)} className="btn btn-primary border-1 border-dark">Agregar al carrito</button>
        <button onClick={increment} className="btn btn-primary border-1 border-dark">Incrementar</button>
      </>
    );
}