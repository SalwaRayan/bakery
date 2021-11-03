import React, { Component } from 'react';

class Add extends Component {
  constructor() {
    super()

    this.state = {
      name: "",
      price: 0,
    }

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handlePriceChange = this.handlePriceChange.bind(this)

  }

  handleNameChange(e) {
    this.setState({ name: e.target.value })
  }
  
  handlePriceChange(e) {
    this.setState({ price: e.target.value })
  }

  render() {
    return (
      <div>
        <h1 className="mb-5">Add</h1>
        <div className="d-flex align-items-center">
            <input 
              type="text"
              onChange={this.handleNameChange}
            />
            <input 
              className="mx-4"
              type="range"
              min={1}
              max={10}
              onChange={this.handlePriceChange}
            />
            <span>{this.state.price}</span>
            <button 
              className="btn btn-success ms-5" 
              onClick={() => this.props.addItem(this.state.name, this.state.price)}
            >
              Add
            </button>
        </div>
      </div>
    );
  }
}

export default Add;