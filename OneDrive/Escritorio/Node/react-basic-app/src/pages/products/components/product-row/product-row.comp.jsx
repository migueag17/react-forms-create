import React from 'react';
import './product-row.style.css'



const ProductRow2 = () => {
    return (
    <div>
        <div className="product-row">
        <label htmlFor="titulo">Football $49.99</label>    
        </div>

        <div className="product-row">
            <label htmlFor="titulo">Baseball $9.99</label>    
        </div>

        <div className="product-row">
            <label htmlFor="titulo"><span className="rojo">Basketball</span> $29.99</label>    
        </div>

    </div>

    )
}

export default ProductRow2;