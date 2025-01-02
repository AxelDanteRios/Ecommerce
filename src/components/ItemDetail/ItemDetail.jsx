import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { useCart } from "../../hooks/useCart"
import { useNotification } from "../../context/NotificationContext";

export default function ItemDetail({id, name, img, description, category, price, stock}) {
  const {addItem, isInCart} = useCart()
  const {setNotification} = useNotification()

  const handleAdd = (count) => {
    const productToAdd = {
      id,name,price, quantity: count
    }
    addItem(productToAdd)
    setNotification("success", `Se agregaron ${count} de ${name}`);
  }

  return (

    <article className="cardArticle">
    <h2>{name}</h2>
    <div className="card">
      <img
        src={img}
        style={{ width: 200 }}
        className="card-img-top"
        alt={name}
      />
      <div className="card-body">
        <p className="card-text">{description}</p>
        <p className="card-text">Categoria: {category}</p>
        <h2 className="card-text">Precio: $ {price}</h2>
        <h2 className="card-text">Disponible - {stock}</h2>
      </div>
    </div>
    <div className="divArticle">
    {
      isInCart(id) ? (
        <Link to='/cart'>Finalizar Compra</Link>
      ): (
        <ItemCount stock={stock} onAdd={handleAdd} />
      )
    }
    </div>
  </article>
  )
}