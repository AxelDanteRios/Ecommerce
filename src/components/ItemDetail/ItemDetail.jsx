import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
export default function ItemDetail({id, name, img, description, category, price, stock}) {


  return (
    <div className="containerDetail">
        <h2>{name}</h2>
        <div className="card">
            <img 
                src={img}
                style={{width: 300}}
                className="card-img-top"
                alt={name}
            />

            <div className="card-body">
                <p>{description}</p>
                <p>Category: {category}</p>
                <p>Precio: $ {price}</p>
                <p>Disponible: {stock}</p>
            </div>
            {/* <ItemCount stock={stock} onAdd={handleAdd}/> */}
            <Link to="/cart" className="btn btn-primary">Finalizar compra</Link> 

        </div>
    </div>
  )
}