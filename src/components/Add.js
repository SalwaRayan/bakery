import React, { Component } from 'react';

class Add extends Component {
  constructor() {
    super()

    this.state = {
      name: "",
      price: 0,
    }
  }

  render() {
    return (
      <div>
        <h1>Add</h1>
        <div className="d-flex align-items-center">
            <input 
              type="text"
            />
            <input 
              className="mx-4"
              type="range"
              min={1}
              max={10}
            />
            <span>{this.state.price}</span>
            <button className="btn btn-success ms-5">Add</button>
        </div>
      </div>
    );
  }
}

export default Add;