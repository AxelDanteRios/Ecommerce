import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"
import { collection, getDocs, query, where } from "firebase/firestore";
import { useNotification } from "../../context/NotificationContext";
import { db } from "../../services/firebase";

function ItemListContainer({greetings}) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()
    const {setNotification} = useNotification()
useEffect(()=>{ 

    setLoading(true)
    const collectionRef = categoryId
    ? query (collection(db, "productos"), where("category", "==", categoryId))
    : collection (db, "productos")

    getDocs (collectionRef) 

    .then((querySnapshot)=>{
        const productosRes = querySnapshot.docs.map((doc)=>{

        return{id: doc.id, ...doc.data()}
    })
    setProducts(productosRes)
    })
    .catch(() => {
        setNotification("danger", `No es posible cargar los productos`)
      })
      .finally(()=>{
        setLoading(false);
      })


},[categoryId])
if(loading) {
    return (
      <div 
      style={{
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "100vh",
      }}
    >
      <h3
        style={{
          color: "white",
          height: "100%",
          width: "100%",
          backgroundColor: "#070926",
          textAlign: "center",
          alignContent: "center",
        }}
      >
        Cargando productos...
      </h3>
    </div>
  );
  }

return (
  <>
    <h2>{greetings}</h2>
    <ItemList products={products} />
  </>
    )
}

export default ItemListContainer