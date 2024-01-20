export const truncate = (text, length) => {
  return text.split(" ").slice(0, 3).join("") + "...";
  // return text.substring(0, length) + "...";
};

export const searchProducts = (products, search) => {
  if (!search) return products;
  const searchedProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search)
  );
  return searchedProducts;
};

export const filterProducts = (products, category) => {
  if (!category) return products;
  const filteredProducts = products.filter(
    (prod) => prod.category === category
  );
  return filteredProducts;
};

export const createQueryObject = (currentQuery, newQuery) => {
  if (newQuery.category === "all") {
    const { category, ...rest } = currentQuery;
    return rest;
  }
  if (newQuery.search === "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }
  return {
    ...currentQuery,
    ...newQuery,
  };
};

export const getInitialQuery = (searchParams) => {
  const query = {};
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  if (category) query.category = category;
  if (search) query.search = search;
  return query;
};

export const sumProducts=(products)=>{
  const itemsCounter=products.reduce((counter,product)=>{
    return counter+product.quantity
  },0)
  const total = products.reduce((total,product)=>{
    return total + product.price * product.quantity
  },0).toFixed(2)
  return {total,itemsCounter}
}

export const productQuantity=(state,id)=>{
  const index = state.selectedItems.findIndex(item=>item.id===id)
  if(index === -1){
    return 0
  }else{
    return state.selectedItems[index].quantity
  }
}