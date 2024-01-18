import React from 'react'
import { Link } from 'react-router-dom'
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { truncate } from '../helper/helper';
import style from './product.module.css'
function Product({data}) {
    const {id,title,image , price}=data
  return (
    <div className={style.card}>
      <img src={image} alt={title} />
      <h3>{truncate(title,20)}</h3>
      <p>{price}</p>
      <div className={style.actions}>
      <Link to={`/products/${id}`}><TbListDetails/></Link>
      <div>
      <button type="button"><TbShoppingBagCheck /></button>
      </div>
      </div>
    </div>
  )
}

export default Product
