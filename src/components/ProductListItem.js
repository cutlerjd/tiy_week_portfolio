import React, { Component } from 'react'

class ProductListItem extends Component {
    render() {
        return (
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Special title treatment</h4>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductListItem