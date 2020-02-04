import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  constructor(){
    super()
    this.state = {
      pizzaList: [],
      pizza: {}
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/pizzas")
    .then(res => res.json())
    .then(pizzas => {
      this.setState({
        pizzaList: pizzas
      })
    })
  }


  setPizza=(e)=>{
    console.log(e.target.name)
    this.setState({
      pizza: {
        ...this.state.pizza,
        [e.target.name]: e.target.value
      }
    })
  }

  setPizVeg=(e)=>{
    console.log(e.target.checked)
    if(e.target.name === 'true'){
      this.setState({
        pizza: {
          ...this.state.pizza,
          vegetarian: true
        }
      })
    }else{
      this.setState({
        pizza: {
          ...this.state.pizza,
          vegetarian: false
        }
      })
    }
    
  }

  updatePizza=()=>{

    let index = this.state.pizzaList.findIndex(el => el.id === pizza.id)
      let tempArr = this.state.pizzaList
      tempArr[index] = pizza
      this.setState({
        pizzaList: tempArr
      })

    fetch(`http://localhost:3000/pizzas/${this.state.pizza.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(this.state.pizza)
    })
    .then(resp => resp.json())
    .then(pizza => {console.log(pizza)})
  }

  getPizza=(e)=>{
    console.log(e.target.id)
    let temp = this.state.pizzaList.find(el => el.id === parseInt(e.target.id))
    console.log(temp)
    this.setState({
      pizza: temp
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.pizza} setPizza={this.setPizza} setPizVeg={this.setPizVeg} updatePizza={this.updatePizza}/>
        <PizzaList pizzaList={this.state.pizzaList} getPizza={this.getPizza}/>
      </Fragment>
    );
  }
}

export default App;
