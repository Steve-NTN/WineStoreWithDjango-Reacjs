import CircularProgress from '@mui/material/CircularProgress';

const initialState = {
  open: false,
  content: <CircularProgress/>
}

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        open: action.payload.open
      }
      default:
      return state
  }
}

export default loadingReducer