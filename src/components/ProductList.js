import React, { Component } from 'react'
import ProductListItem from './ProductListItem'
import products from '../productitems'

class ProductList extends Component {
    render() {
        return (
                <div>
                <h2>Product List:</h2>
                <div className="row">
                {products.map( item => <ProductListItem product={item}/>)}            
                </div>

                </div>	
                )
    }
}

export default ProductList