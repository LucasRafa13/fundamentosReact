import React from "react"

const InitialState = {
  number: 1234,
  text: "Context API + Hooks"
}

export const AppContext = React.createContext(InitialState)

const Store = props => {
  const [state, setState] = React.useState(InitialState)

  function updateState(key, value) {
    setState({
      ...state,
      [key]: value
    })
  }

  return (
    <AppContext.Provider
      value={{
        number: state.number,
        text: state.text,
        setNumber: n => updateState("number", n),
        setText: t => updateState("text", t)
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default Store
