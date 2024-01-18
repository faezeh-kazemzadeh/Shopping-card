import { useEffect, useState } from "react";
import { useProducts } from "../context/ProductsContext";
import Product from "../components/Product";
import styles from "./style.module.css";
import Loader from "../components/Loader";

import {
  searchProducts,
  filterProducts,
  createQueryObject,
  getInitialQuery,
} from "../helper/helper";
import { useSearchParams } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import SideBar from "../components/SideBar";
export default function ProductsPage() {
  const products = useProducts();
  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalProducts = searchProducts(products, query.search);
    setDisplayed(finalProducts);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed &&
            displayed.map((product) => (
              <Product data={product} key={product.id} />
            ))}
        </div>
        <SideBar setQuery={setQuery} />
      </div>
    </>
  );
}
