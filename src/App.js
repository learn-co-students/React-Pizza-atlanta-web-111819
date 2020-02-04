import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
constructor() {
  super()

  this.state = {
     pizzas : [],
     myPizza : null
  }
}

componentDidMount() {
  fetch('http://localhost:3000/pizzas')
  .then((res) => res.json())
  .then(pizzas => this.setState({
    pizzas : pizzas
  }))
}

handleEditBtn = (pizza) => {
  this.setState({
    myPizza : pizza
  })
  console.log(this.state.myPizza)
}

handleEditPizza = (pizza) => {
  console.log("working")
}

handleEditTopping = (event) => {
  console.log(event.target.value)
  
}



  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm myPizza={this.state.myPizza} subEditTopping={this.handleEditTopping} onNewPizza={this.handlePizzaChange}/>
        <PizzaList pizzas={this.state.pizzas} editPizza={this.handleEditBtn}/>
      </Fragment>
    );
  }
}

export default App;
