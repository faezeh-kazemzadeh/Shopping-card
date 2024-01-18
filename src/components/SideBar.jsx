import React from "react";
import { FaListUl } from "react-icons/fa";
import styles from './sidebar.module.css'
import { createQueryObject } from "../helper/helper";
import { categories } from "../constants/list";

export default function SideBar({query, setQuery }) {
  const categoryHandler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLocaleLowerCase();
    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject(query, { category }));
  };
  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={categoryHandler}>
        {categories.map(category=>(
        <li key={category.id} className={category.type.toLocaleLowerCase()  === query.category ? styles.selected : null}>{category.type}</li>
        ))}
       </ul>
    </div>
  );
}
