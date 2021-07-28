import React from 'react'
import Product from './Cars'
import './list.scss'
const ProductList = ({products, compare}:any) => {
    return (
  <div>
    <div className="row mt-3">
        {products.map((product:any) =>
          <Product key={product.id} product={product} compare={compare} />
        )}
    </div>
  </div>
    )}
export default ProductList
