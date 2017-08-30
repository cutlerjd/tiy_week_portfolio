import React, { Component } from 'react'

class Home extends Component {
    render() {
        return (
            <div className="inner cover">
                <h1 className="cover-heading">Coding Outfitters.</h1>
                <p className="lead">A site with random products, that make no sense and are likely not real. Enjoy looking around. Bootstrap is the layout, React is the Front End. The Iron Yard Las Vegas, hire me.</p>
                <p className="lead">
                    <a href="http://jasecutler.com" className="btn btn-lg btn-secondary">Learn more</a>
                </p>
            </div>
        )
    }
}

export default Home