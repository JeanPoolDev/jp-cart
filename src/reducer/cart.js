//* Estado Inicial
export const initialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

//TODO:  state: cart, action: product
export const Reducer = ( state, action ) => {
  const { type: actionType, payload: actionPayload } = action

  switch ( actionType ) {

    case CART_ACTION_TYPES.ADD_TO_CART: {
      const { id } = actionPayload
      const findIndexCart = state.findIndex(item => item.id === id)

      if ( findIndexCart >= 0 ) {
        const newState = structuredClone(state)
        newState[findIndexCart].quantity += 1
        updateLocalStorage(state)
        return newState
      }

      const newState = [
        ...state,
        {
          ...actionPayload, //* product
          quantity: 1
        }
      ]

      updateLocalStorage(state)
      return newState
    }

    case CART_ACTION_TYPES.REMOVE_FROM_CART: {
      const { id } = actionPayload
      const newState = state.filter(item => item.id !== id)
      updateLocalStorage(state)
      return newState
    }
    
    case CART_ACTION_TYPES.CLEAR_CART: {
      updateLocalStorage(state)
      return initialState
    }
   }

  return state
}