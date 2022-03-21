const initialState = {
  token: null,
  phone: null,
  name: null
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        token: action.payload.token,
        phone: action.payload.phone,
        name: action.payload.name
      }
      default:
      return state
  }
}

export default userReducer