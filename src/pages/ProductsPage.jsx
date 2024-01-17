import React from 'react'
import { useProducts } from '../context/ProductsContext'
export default function ProductsPage() {
  const products = useProducts()
  return (
    <div>Products</div>
  )
}
