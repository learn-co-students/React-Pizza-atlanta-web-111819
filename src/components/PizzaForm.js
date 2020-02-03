import React from "react"

const PizzaForm = (props) => {

  

  // fetchFormInfo = (e) => {
  //   fetch('http://localhost:3000/pizzas/')
  //   .then(res => res.json())
  //   .then(pizza => {
  //     console.log(pizza);
      
  //   })
  // }

  const pizza = {
    topping: props.topping,
    size: props.value,
    vegetarian: props.vegetarian,
    id: props.id
  }

  const handleChange = (e) => {
    console.log(e.target.value);
    pizza[e.target.name] = e.target.value
  }

  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" name='topping' className="form-control" placeholder="Pizza Topping" onChange={props.fromChange} value={props.topping}/>
        </div>
        <div className="col">
          <select name='size' value={props.size} onChange={props.fromChange} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" onChange={props.fromChange} type="radio" name="vegetarian" value="Vegetarian" checked={props.vegetarian? true : false}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" onChange={props.fromChange} type="radio" name="vegetarian" value="Not Vegetarian" checked={props.vegetarian? false : true}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={(e) => {props.editForm(props.id)}}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
