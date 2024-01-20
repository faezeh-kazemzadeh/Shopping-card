import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa6";
import { BsPatchCheck } from "react-icons/bs";
import styles from './basketSideBar.module.css'
export default function BasketSideBar({ state ,clickHandler}) {
  return (
    <div className={styles.sidebar}>
      <div>
        <TbChecklist />
        <p>Total: </p>
        <span>{state.total}</span>
      </div>
      <div>
        <FaHashtag />
        <p>Quantity: </p>
        <span>{state.quantity}</span>
      </div>
      <div>
        <BsPatchCheck />
        <p>status: </p>
        <span>{!state.checkPut &&'Pending...'}</span>
      </div>
      <button
        onClick={() => {
          clickHandler( "CHECKOUT");
        }}
      >
        CheckOut
      </button>
    </div>
  );
}
