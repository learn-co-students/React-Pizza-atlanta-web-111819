import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzas: [],
    selectedPizza: {}
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas').then(res => res.json()).then(pizzas => this.setState({pizzas: pizzas}))
  }

  updateSelectedPizza = (attr, value) => {
    console.log('updating', attr, 'to', value)
    const newPizza = {...this.state.selectedPizza}
    if (attr === 'vegetarian')
      newPizza[attr] = value === 'Vegetarian'
    else
      newPizza[attr] = value
    this.setState({selectedPizza: newPizza})
  }

  handleEditClicked = pizza => {
    this.setState({selectedPizza: pizza})
  }

  updatePizzaInList = pizza => {
    const pizzas = [...this.state.pizzas]
    let index = pizzas.findIndex(p => p.id === pizza.id)
    pizzas[index] = pizza
    this.setState({pizzas: pizzas})
  }

  savePizza = () => {
    const {id} = this.state.selectedPizza

    if (id) {
      fetch(`http://localhost:3000/pizzas/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({...this.state.selectedPizza})
      }).then(res => res.json()).then(pizza => {
          console.log(pizza)
          if (pizza.id) { 
            this.setState({selectedPizza: {topping: '', size: 'Small', vegetarian: true}})
          }
      })
      this.updatePizzaInList(this.state.selectedPizza)
    }
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.selectedPizza} updateSelectedPizza={this.updateSelectedPizza} updatePizza={this.savePizza}/>
        <PizzaList pizzas={this.state.pizzas} handleEditClicked={this.handleEditClicked}/>
      </Fragment>
    );
  }
}

export default App;
