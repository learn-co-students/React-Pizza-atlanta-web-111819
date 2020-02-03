import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state = {
    pizzas: [],
    topping: null,
    size: null,
    vegetarian: null,
  }



  componentDidMount(){
    fetch("http://localhost:3000/pizzas")
    .then(res => res.json())
    .then(pizzas => {
      this.setState({
        pizzas: pizzas
      })
    })
  }

  formInfo = (pizza) => {
    console.log(pizza);
    this.setState({
      topping: pizza.topping,
      size: pizza.size,
      id: pizza.id,
      vegetarian: pizza.vegetarian
    })
  }

  editForm = (id) => {
    let pizza = {
      id: id,
      topping: this.state.topping,
      size: this.state.size,
      vegetarian: this.state.vegetarian 
    }
    // console.log(e);
    fetch(`http://localhost:3000/pizzas/${id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pizza)
    }).then(res => res.json())
    .then(newPizza => {
      
      fetch('http://localhost:3000/pizzas')
      .then(res => res.json())
      .then(allPizza => {
        this.setState({
          pizzas: allPizza,
          topping: null,
          size: null,
          vegetarian: null,
        })
      })
      
    })

    
  }

  fromChange = (e) => {


    if(e.target.name === 'vegetarian'){
      this.setState({
        [e.target.name]: !this.state.vegetarian
      })
    }else{
      console.log(e.target.value);
      this.setState({
        [e.target.name]: e.target.value
      })
    }
    
  }


  render() {

    return (
      <Fragment>
        <Header/>
        <PizzaForm 
        fromChange = {this.fromChange}
        editForm={this.editForm}
        topping={this.state.topping}
        id={this.state.id}
        size={this.state.size}
        vegetarian={this.state.vegetarian}
        />
        <PizzaList pizzas={this.state.pizzas} formInfo={this.formInfo}/>
      </Fragment>
    );
  }
}

export default App;
