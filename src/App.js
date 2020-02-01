import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzas: [],
    currentPizza: {}
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then(pizzas => this.setState({pizzas: pizzas}))
  }

  editPizza = (pizza) => {
    this.setState({currentPizza: pizza})
  }

  onPizzaSizeChanged = e => {
    let newPizza = {...this.state.currentPizza}
    newPizza.size = e.target.value
    this.setState({currentPizza: newPizza})
  }

  onIsVegetarianChanged = e => {
    let newPizza = {...this.state.currentPizza}
    if (e.target.value[0] === 'V') {
      newPizza.vegetarian = true
    } else {
      newPizza.vegetarian = false
    }

    this.setState({currentPizza: newPizza})
  }

  onToppingChanged = e => {
    let newPizza = {...this.state.currentPizza}
    newPizza.topping = e.target.value
    this.setState({currentPizza: newPizza})
  }

  onSubmitButtonClicked = e => {
    if (this.state.currentPizza.id) {
      const {id, topping, size, vegetarian} = this.state.currentPizza
      fetch(`http://localhost:3000/pizzas/${id}`,{
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({topping: topping, size: size, vegetarian: vegetarian})
      }).then(res => res.json()).then(editedPizza => {
        const idx = this.state.pizzas.findIndex(p => p.id === editedPizza.id)
        const newPizzaList = [...this.state.pizzas]
        newPizzaList[idx] = editedPizza
        this.setState({pizzas: newPizzaList})
      })
    } else {
      fetch('http://localhost:3000/pizzas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({...this.state.currentPizza})
      }).then(res => res.json()).then(newPizza => {
        const newPizzaList = [...this.state.pizzas, newPizza]
        this.setState({pizzas: newPizzaList})
      })
    }
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
          pizza={this.state.currentPizza} 
          onPizzaSizeChanged={this.onPizzaSizeChanged}
          onIsVegetarianChanged={this.onIsVegetarianChanged}
          onToppingChanged={this.onToppingChanged}
          onSubmitButtonClicked={this.onSubmitButtonClicked}
        />
        <PizzaList pizzas={this.state.pizzas} handleEditPizza={this.editPizza} />
      </Fragment>
    );
  }
}

export default App;
