import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";

export default function ItemListContainer(props){
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

useEffect(()=>{ 

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
   .catch((err)=>{
    err = "No se cargaron los productos"
    })



},[categoryId])
    return(
        <>
        <h2>{props.greeting}</h2>
        <ItemList products={products}/>
        </>
    )
}