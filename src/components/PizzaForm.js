import React from "react"

const PizzaForm = (props) => {
  const {topping, size, vegetarian} = props.pizza
  
  const updatePizza = e => props.updateSelectedPizza(e.target.name, e.target.value)

  return(
      <div className="form-row">
        <div className="col-5">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Pizza Topping" 
              name="topping"
              value={topping}
              onChange={updatePizza}
            />
        </div>
        <div className="col">
          <select 
            value={size} 
            className="form-control" 
            name="size"
            onChange={updatePizza}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input 
              name="vegetarian"
              className="form-check-input" 
              type="radio" 
              value="Vegetarian" 
              checked={vegetarian}
              onChange={updatePizza}
            />
            <label className="form-check-label">
              🥦 Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input 
            name="vegetarian"
            className="form-check-input" 
            type="radio" 
            value="Not Vegetarian" 
            checked={!vegetarian}
            onChange={updatePizza}
            />
            <label className="form-check-label">
              🥩 Not Vegetarian
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
