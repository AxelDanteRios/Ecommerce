import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase";
export default function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const {productId} = useParams()

  useEffect(()=>{ 
    getDoc(doc(db, "productos", productId))

    .then((querySnapshot)=>{
      const prod = {id:querySnapshot.id, ...querySnapshot.data()}

      setProduct(prod)
  })
  .catch((err)=>
    err = "No se cargaron los productos"
  )
  .finally(() => {
    setLoading(false);
  });
  }, [productId])


  return (
    
    <div className="ItemDetailContainer"style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "100vh" 
    }}>
      {loading ? (
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
          Cargando...
        </h3>
      ) : (
        <ItemDetail {...product} />
      )}
    </div>
  );
}