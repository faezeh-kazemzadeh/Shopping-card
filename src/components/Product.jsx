import React from "react";
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import { TbShoppingBagCheck } from "react-icons/tb";
import { productQuantity, truncate } from "../helper/helper";
import style from "./product.module.css";
import { useCart } from "../context/CartContext";
function Product({ data }) {
  const { id, title, image, price } = data;

  const [state, dispatch] = useCart();

  const quantity = productQuantity(state, id);
  const clickHandler = (type) => {
    dispatch({ type, payload: data });
  };
  return (
    <div className={style.card}>
      <img src={image} alt={title} />
      <h3>{truncate(title, 20)}</h3>
      <p>{price}</p>
      <div className={style.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <div>
        {quantity === 1 && (
            <button
            onClick={() => {
              clickHandler("REMOVE_ITEM");
            }}
            type="button"
          >
            <MdDeleteOutline />
          </button>
          )}
          {quantity > 1 && (
            <button
              onClick={() => {
                clickHandler("DECREASE");
              }}
              type="button"
            >
              -
            </button>
            
          )}
          {
           !!quantity && <span>{quantity}</span>
          }
          
          {quantity === 0 ? (
            <button
              onClick={() => {
                clickHandler("ADD_ITEM");
              }}
              type="button"
            >
              <TbShoppingBagCheck />
            </button>
          ) : (
            <button
              onClick={() => {
                clickHandler("INCREASE");
              }}
              type="button"
            >
              +
            </button>
          )}
         
        </div>
      </div>
    </div>
  );
}

export default Product;
