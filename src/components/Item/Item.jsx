import {Link} from "react-router-dom"
// import { formatPrice } from "../../asyncMock";
import './Item.css'
 function Item({product}) {
  return (

    //      <div className="card" style={{width: "18rem" , height: "27rem"}}>
    //     <img src={product.img} alt={product.name} className="card-img-top" />
    //     <div className="card-body">
    //         <h2 className="card-title">{product.name}</h2>
    //         <p>{"$" + formatPrice(product.price)}</p>
    //         <p>{product.description}</p>
    //         <Link to={`/detail/${product.id}`} className="btn btn-primary">Ver detalle</Link>
    //     </div>

    // </div>
    
    <div className="card" style={{ width: "18rem" }}>
    <img
      src={product.img}
      style={{ width: 100, margin: "0 auto" }}
      className="card-img-top"
      alt={product.name}
    />
    <div className="card-body">
      <h5 className="card-title">{product.name}</h5>
      <Link to={`/detail/${product.id}`} className="btn btn-primary">
        Ver Detalle
      </Link>
    </div>
  </div>




  )
}

export default Item