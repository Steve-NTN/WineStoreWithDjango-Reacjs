const initialState = {
  token: null,
  phone: null,
  first_name: null,
  email: null
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        token: action.payload.token,
        phone: action.payload.phone,
        first_name: action.payload.first_name,
        email: action.payload.email
      }
      default:
      return state
  }
}

export default userReducer