import React from "react";
import { truncate } from "../helper/helper";

import { MdDeleteOutline } from "react-icons/md";

import styles from './basketCard.module.css'
export default function BasketCard({ data ,clickHandler }) {
    const {image,title,quantity}=data
    return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h5>{truncate(title, 30)}</h5>
      <div className={styles.actions}>
        {quantity === 1 && (
          <button onClick={()=>clickHandler('REMOVE_ITEM' , data)}>
            <MdDeleteOutline />
          </button>
        )}
            {quantity > 1 && (
          <button onClick={()=>clickHandler("DECREASE" , data)}>
            -
          </button>
        )}
        <span>{quantity}</span>
          <button onClick={()=>clickHandler("INCREASE" , data)}>
            +
          </button>
      </div>
    </div>
  );
}
