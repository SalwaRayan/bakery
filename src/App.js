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

  }

  handleButtonClick(tab) {
    this.setState({ activeTab: tab })
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
        {this.state.activeTab === "Add" && <Add />}
        {this.state.activeTab === "List" && <List />}
        {this.state.activeTab === "Pay" && <Pay />}
      </div>
    )
  }
}

export default App