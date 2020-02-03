import React from "react"

const PizzaForm = (props) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input onChange={props.setPizza}
            type="text" name='topping' className="form-control" placeholder="Pizza Topping" value={
              props.pizza ? props.pizza.topping : null
                
              }/>
        </div>
        <div className="col">
          <select onChange={props.setPizza} name='size' value={props.pizza ? props.pizza.size : null} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input onChange={props.setPizVeg} name='true' className="form-check-input" type="radio" value="Vegetarian" checked={props.pizza.vegetarian === true ? true : false}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input onChange={props.setPizVeg} name='false' className="form-check-input" type="radio" value="Not Vegetarian" checked={props.pizza.vegetarian === false ? true : false}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.updatePizza}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
