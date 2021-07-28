import React from 'react'

const Compare = ({products}:any) => {
    return (
  <div className="row compare">
    <h1 className="text-center">Result</h1>
    <div className="col-12 mt-5 text-center">
      <table className="table">
        <thead className="thead-default">
          <tr>
            <th></th>
            {products.map((product:any) =>
              <th key={product.id}>
                {product.name}
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          <tr className="price">
            <th scope="row">Price</th>
            {products.map((product:any) =>
              <td key={product.id} className="text-center">{product.price}</td>
            )}
          </tr>
          <tr className="price">
            <th scope="row">Weight</th>
            {products.map((product:any) =>
              <td key={product.id} className="text-center">{product.weight}</td>
            )}
          </tr>
          <tr className="price">
            <th scope="row">Year</th>
            {products.map((product:any) =>
              <td key={product.id} className="text-center">{product.description}</td>
            )}
          </tr>
          <tr className="horse_power">
            <th scope="row">Horse Power</th>
            {products.map((product:any) =>
              <td key={product.id} className="text-center">{product.horse_power}</td>
            )}
          </tr>
          <tr className="fuel_type">
            <th scope="row">Fuel Type</th>
            {products.map((product:any) =>
              <td key={product.id} className="text-center">{product.fuel_type}</td>
            )}
          </tr>
          <tr className="doors">
            <th scope="row">Doors</th>
            {products.map((product:any) =>
              <td key={product.id} className="text-center">{product.doors}</td>
            )}
          </tr>
          <tr className="colors">
          <th scope="row">Colors</th>
            {products.map((product:any) =>
              <td key={product.id} className="text-center">{product.colors}</td>
            )}
          </tr>
        
        </tbody>
      </table>
    </div>
  </div>
    )}
export default Compare
