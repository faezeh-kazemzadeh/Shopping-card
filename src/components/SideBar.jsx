import React from "react";
import { FaListUl } from "react-icons/fa";

import { createQueryObject } from "../helper/helper";
export default function SideBar({ setQuery }) {
  const categoryHandler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLocaleLowerCase();
    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject(query, { category }));
  };
  return (
    <div>
      <p>
        <FaListUl />
        <span>Categories</span>
      </p>
      <ul onClick={categoryHandler}>
        <li>All</li>
        <li>Electronics</li>
        <li>jewelery</li>
        <li>Men's Clothing</li>
        <li>Women's Clothing</li>
      </ul>
    </div>
  );
}
