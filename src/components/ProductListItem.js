import React, { Component } from 'react'

class ProductListItem extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div key={this.props.product.id} className="col-sm-6">
                <div className="card">
                    <img className="card-img-top w-25 h-25" src={this.props.product.img} alt={this.props.product.name} />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.product.name}</h4>
                        <p className="card-text">{this.props.product.description}</p>
                        <ul>
                        <li>Price: ${this.props.product.price}</li>
                        </ul>
                        <a href={this.props.product.amazon} className="btn btn-primary">Amazon</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductListItem