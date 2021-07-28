import React from 'react'

const Product = ({product, compare}:any) =>{
    return (

    <div key={product.id}  className="col-sm-6 col-md-3">
        <div className={"product " + (product.compare ? "compare" : "")} >
            <img src={product.image} alt={product.name} className="mb-5" />
            <div className="image_overlay"></div>
            <div className="view_details" onClick={() => compare(product)}>
              {product.compare ? "Remove" : "Compare"}
            </div>
            <div className="stats">
                <div className="stats-container">
                    <p style={{marginLeft:"50px",marginRight:"10px"}} className="product_price">{product.price}</p>
                    <p  className="product_name">{product.name}</p>
                    <p className="product_weight">{`Weight : ${product.weight}`}</p>
                    <p className="product_horse_power">{`Horse Power : ${product.horse_power}`}</p>
                    <p className="product_top_speed">{`Top Speed : ${product.top_speed}`}</p>
                    <p className="product_drive">{`Drive : ${product.drive}`}</p>
                    <p className="product_fuel_type">{`Fuel Type : ${product.fuel_type}`}</p>


                    <p> Year {product.description}</p>
                </div>
            </div>
        </div>
    </div>
    )}

export default Product
