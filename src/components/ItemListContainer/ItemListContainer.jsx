
import { useParams } from "react-router-dom";
import {getProducts, getProductsByCategory} from "../../asyncMock";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"

export default function ItemListContainer(props){
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()
    useEffect(()=>{    
        const asyncFunction = categoryId ? getProductsByCategory : getProducts;
        asyncFunction(categoryId)
          .then(data => setProducts(data))
  }, [categoryId]);

    return(
        <>
        <h2>{props.greeting}</h2>
        <ItemList products={products}/>
        </>
    )
}