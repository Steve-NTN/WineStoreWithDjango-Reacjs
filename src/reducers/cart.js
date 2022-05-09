const initialState = []

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CART':
      return {
        ...state
      }
      default:
      return state
  }
}

export default cartReducer