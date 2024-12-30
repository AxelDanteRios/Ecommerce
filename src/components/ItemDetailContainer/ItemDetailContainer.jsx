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

  // return (
  //   <div>
  //     <h2>Detalle del producto</h2>
  //     <hr />
  //     <ItemDetail {...product} />
  //   </div>



  return (
    <div className="ItemDetailContainer">
      {loading ? (
        <h3
          style={{
            color: "white",
            backgroundColor: "#d68fff",
            textAlign: "center",
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