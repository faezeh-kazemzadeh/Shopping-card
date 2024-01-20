import React from 'react'
import {useCart} from '../context/CartContext'
import BasketCard from '../components/BasketCard'
import BasketSideBar from '../components/BasketSideBar'
import styles from './checkOutPage.module.css'
export default function CheckoutPage() {
  const[state,dispatch]=useCart()
  const clickHandler =(type,payload)=>{
    dispatch({type,payload})
  }
  if(!state.itemsCounter){
    return (
      <div className={styles.container}>
        <p>empty</p>
      </div>
    )
  }
  return (
    <div className={styles.container}>
      <BasketSideBar state={state} clickHandler={clickHandler}/>
      <div className={styles.products}>
        {state.selectedItems && state.selectedItems.map(product=>(
      <BasketCard key={product.id} data={product} clickHandler={clickHandler}/>
            
        ))}
      </div>
     
    </div>
  )
}
