import * as types from './constants'

export const getProducts = () => (dispatch:any) =>
    fetch(`https://api.npoint.io/62b0164b2e3e7e644ab0`)
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: types.FETCH_PRODUCTS,
          payload: response.cars
        })
      })

export const compare = (product:any) => ({
    type: types.COMPARE_PRODUCT,
    product
  })
