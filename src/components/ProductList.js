import React, { Component } from 'react'
import ProductListItem from './ProductListItem'

class ProductList extends Component {
    render() {
        return (
                <div>
                <h2>Product List:</h2>
                <div className="row">
                <ProductListItem/>                
                </div>

                </div>	
                )
    }
}

export default ProductList