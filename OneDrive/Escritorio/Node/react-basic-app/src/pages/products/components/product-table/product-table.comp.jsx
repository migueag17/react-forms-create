import React from 'react';
import './product-table.style.css'
import ProductCategoryRow from '../product-category-row/product-category-row.comp'
import ProductRow from '../product-row/product-row.comp'
import ProductCategoryRow2 from '../product-category-row/product-category-row2.comp';
import ProductRow2 from '../product-row/product-row2.comp';

const ProductTable = () => {
    return (
    <div className="product-table-container">
            <p className="titulo">Name</p> 
            <p className="titulo titulo2">Price</p> 
            <ProductCategoryRow/>
            <ProductRow/>
            <ProductCategoryRow2/>
            <ProductRow2/>
    </div>
    )
}

export default ProductTable;