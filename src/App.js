import React  from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import Button from './components/Button'
import Add from './components/Add'
import List from './components/List'
import Pay from './components/Pay'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      activeTab: "Add",
      items: [],
    }

    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.addItem = this.addItem.bind(this)
    this.removeItem = this.removeItem.bind(this)
  }

  handleButtonClick(tab) {
    this.setState({ activeTab: tab })
  }

  addItem(name, price) {
    const item = {
      name,
      price
    }

    this.setState({ items: [item, ...this.state.items]})
  }

  removeItem(index) {
    const newItemsList = this.state.items

    newItemsList.splice(index, 1)
    this.setState({ items: newItemsList})
  }
  
  render() {
    return (
      <div className="container">
        <Button 
          children="Add"
          handleClick={this.handleButtonClick}
          isSelected={this.state.activeTab === "Add"}
        />
        <Button 
          children="List"
          handleClick={this.handleButtonClick}
          isSelected={this.state.activeTab === "List"}
          />
        <Button 
          children="Pay"
          handleClick={this.handleButtonClick}
          isSelected={this.state.activeTab === "Pay"}
        />
        {this.state.activeTab === "Add" && <Add addItem={this.addItem}/>}
        {this.state.activeTab === "List" && <List items={this.state.items} removeItem={this.removeItem}/>}
        {this.state.activeTab === "Pay" && <Pay />}
      </div>
    )
  }
}

export default App