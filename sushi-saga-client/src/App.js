import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  
  state = 
  {
    allSushis: [],
    currentFour: [],
    count: 0,
    eaten: [],
    money: 100
  }

  componentDidMount()
  {
    fetch(API)
    .then(resp => resp.json())
    .then((data) => {
      this.setState ({
        allSushis: data
      })
      this.sliceFour();
    })
  }
  sliceFour = () => 
  {
    let four = this.state.allSushis.slice(this.state.count, this.state.count+4)
    
    this.setState({
      currentFour: four,
      count: this.state.count + 4
    })
  }
  handleMoneyChange = (amount) => 
  {
    let total = this.state.money - amount;
    this.setState({
      money: total
    })
  }
  
  render() {
  
    return (
      <div className="app">
        <SushiContainer currentFour = {this.state.currentFour} sliceFour = {this.sliceFour} handleMoneyChange = {this.handleMoneyChange} money = {this.state.money}/>
        <Table money = {this.state.money}/>
      </div>
    );
  }
}

export default App;