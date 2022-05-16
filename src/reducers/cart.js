const initialState = {
  numberCart:0,
  Carts:[],
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REDUCE_CART':
      console.log('click re')

      if(state.numberCart > 0) {
        let check_exists = false;
        state.Carts.map((s, index) => {
          if(s.product_id === action.payload.product_id) {
            state.Carts[index].quantity--;
            check_exists = true;
          }
        })

        state.Carts = state.Carts.filter((s) => s.quantity > 0);
        state.numberCart = state.Carts.length;
      }
      localStorage.setItem('carts', JSON.stringify(state.Carts));

      return {
        ...state
      }

      case 'ADD_CART':
        console.log('click add')
        let check_exists = false;
        state.Carts.map((s, index) => {
          if(s.product_id === action.payload.product_id) {
            state.Carts[index].quantity++;
            check_exists = true;
          }
        })
        if(!check_exists) {
          state.Carts.push({
            ...action.payload,
            quantity: 1
          })
          state.numberCart++;
        }

        state.Carts = state.Carts.filter((s) => s.quantity > 0);
        state.numberCart = state.Carts.length;
        localStorage.setItem('carts', JSON.stringify(state.Carts));

        return {
          ...state
        }

      case 'RESET_CART':
        state.Carts = [];
        state.numberCart = 0;
        localStorage.setItem('carts', JSON.stringify(state.Carts));

        return {
          ...state
        }

    default:
    return state
  }
}

export default cartReducer