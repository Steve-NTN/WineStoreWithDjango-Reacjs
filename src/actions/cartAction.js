export const reduceCart = (product) => {
  return {
    type: "REDUCE_CART",
    payload: product
  }
}

export const addCart = (product) => {
  return {
    type: "ADD_CART",
    payload: product
  }
}
