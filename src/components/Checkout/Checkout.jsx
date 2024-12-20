import { useState } from "react"
import { useCart } from "../../hooks/useCart";
import "./Checkout.css"
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import {db} from "../../services/firebase"
function Checkout() {

  const [orderCreated, setOrderCreated] = useState(false)

  const {cart, totalQuantity, getTotal, clearCart} = useCart();

  const total = getTotal()

  const createOrder = async () =>{
    try{
    const objOrder ={
      buyer:{
        nombre: "axel",
        apellido: "rios",
        telefono: "12345676"
      },
      items: cart,
      // totalQuantity,
      total,
      date: new Date()
    }

    const ids = cart.map ((item)=> item.id)
    const productosRef = collection (db,"productos")
    const productsAddedFromFirestore = await getDocs(
      query(productosRef, where(documentId(), "in", ids)))

      const {docs} = productsAddedFromFirestore

      const outOfStock = []

      const batch = writeBatch(db)

      docs.forEach((doc)=>{
        const dataDoc = doc.data()
        const stockDb = dataDoc.stock;

        const productAddedToCart = cart.find((prod)=> prod.id === doc.id)

        const prodQuantity = productAddedToCart.quantity

        if(stockDb >= prodQuantity){
          batch.update(doc.ref, {stock: stockDb - prodQuantity})
        }else{
          outOfStock.push({id: doc.id, ...dataDoc })
        }
      })
      if(outOfStock.length === 0){
        await batch.commit();
        const orderRef = collection(db,"orders")
        const orderAdded = await addDoc(orderRef, objOrder)
        console.log (`el id de su orden es: ${orderAdded.id}`)
        setOrderCreated(true)
        clearCart()
      }else{
        return <h2>No hay items</h2>
      }
    }catch(error){
      return <h2>No hay items</h2>
    }
    
  }

  if(orderCreated){
    <h1>La orden fue creada correctamente</h1>
  }


  return (
    <div className="divForm">
      {/* <form className="formCheck" onSubmit={createOrder}>
        <label>Nombre</label>
        <input type="text" />
        <label>Apellido</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Telefono</label>
        <input type="number" />

        <button type="submit">Generar Oden de Compra</button>      
      </form> */}
      <button onClick={createOrder}>Generar orden de compra</button>
    </div>
  )
}

export default Checkout