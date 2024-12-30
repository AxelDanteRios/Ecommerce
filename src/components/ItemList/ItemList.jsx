import {memo} from 'react'
import Item from "../Item/Item"
import './ItemList.css'

 function ItemList({products}) {
  return (
    <div className="container">
        {products.map(product =>  <Item product={product} key={product.id} />)}
    </div>
  )
}

export default memo(ItemList)