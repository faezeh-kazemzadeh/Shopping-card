import React from "react";
import { Link } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { useCart } from "../context/CartContext";
import styles from './layout.module.css'
export default function Layout({ children }) {
  const [state] = useCart();
  return (
    <>
      <header className={styles.header}>
        <Link to="/products">Shop</Link>
        <Link to="/checkout">
            <div>
          <PiShoppingCartSimpleBold />
         {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
            </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed At 2024</p>
      </footer>
    </>
  );
}
