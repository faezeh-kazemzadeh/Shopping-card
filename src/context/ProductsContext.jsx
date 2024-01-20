import React, { createContext, useContext, useEffect , useState } from "react";
import api from "../services/config";
const ProductsContext = createContext();
export default function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response= await api.get("/products")
        setProducts(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, []);
  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
}

const useProducts = () => {
  const products = useContext(ProductsContext);
  return products;
};

const useProductDetails=(id)=>{
  const products= useContext(ProductsContext)
  const result = products.find(product=> product.id===id)
return result
}
export { useProducts , useProductDetails};
