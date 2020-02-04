import React from "react"

const PizzaForm = (props) => {
  let topping
  let size
  let vegetarian
  props.myPizza ? topping = props.myPizza.topping : topping = null
  props.myPizza ? size = props.myPizza.size : size = null
  props.myPizza ? vegetarian = props.myPizza.vegetarian : vegetarian = null

  console.log(props.myPizza)
  return(
      <div className="form-row">
        <div className="col-5">
            <input onChange={(event) => props.subEditTopping(event)} type="text" className="form-control" placeholder="Pizza Topping" value={
                //Pizza Topping Should Go Here
                topping
              }/>
        </div>
        <div className="col">
          <select value={size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={vegetarian === true}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={vegetarian === false}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={() => this.props.subEditPizza()}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
