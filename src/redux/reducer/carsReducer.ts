import * as types from '../constants'

const INITIAL_STATE = {
  products: []
}

export default function (state = INITIAL_STATE, action:any) {
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      return {
        ...state, products: action.payload.map((product:any) =>
          ({...product, compare: false})
        )
      }
    case types.COMPARE_PRODUCT:
      return {
        ...state, products: state.products.map((product:any) =>
          product.id === action.product.id ?
            ({...product, compare: !product.compare}) :
            product
        )
      }
    default:
      return state
  }
}
