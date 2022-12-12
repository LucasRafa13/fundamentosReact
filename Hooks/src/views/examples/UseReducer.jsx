import React from "react"
import PageTitle from "../../components/layout/PageTitle"

const initialState = {
  cart: [],
  products: [],
  user: null,
  number: 0
}

function reducer(state, action) {
  switch (action.type) {
    case "number_add2":
      return { ...state, number: state.number + 2 }
    default:
      return state
  }
}

const UseReducer = props => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <div className="center">
        <span className="text">{state.number}</span>
        <div>
          <button
            className="btn"
            onClick={() => dispatch({ type: "number_add2" })}
          >
            +2
          </button>
        </div>
      </div>
    </div>
  )
}

export default UseReducer
