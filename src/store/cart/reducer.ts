import { TypeActionCart, actionTypes } from "./types";
import { CartState } from '../../types'




const initialState: CartState = {
   carts: [],
   products: [],
   loading: false,
   error: null
}

export const cartReducer = (state = initialState, action: TypeActionCart): CartState => {
   switch (action.type) {
      case actionTypes.CART_ADD_ITEM:
         {
            const cart = [...state.carts]
            const { count, product } = action.payload

            const foundProduct = cart.find(item => item.id === product.id)

            if (foundProduct) {
               foundProduct.count = count
            }
            else {
               cart.push({
                  ...product,
                  count
               })
            }

            

            return { ...state, loading: false, error: null, carts: cart }
         }
      case actionTypes.CART_REMOVE_ITEM:
         const cart = [...state.carts]
         return { ...state, loading: false, error: null, carts: cart.filter(item => item.id !== action.payload) }
      case actionTypes.FETCH_CART:
         return { ...state, loading: true, error: null }
      case actionTypes.FETCH_CART_SUCCESS:
         return { ...state, loading: false, error: null, products: action.payload }
      case actionTypes.FETCH_CART_ERROR:
         return { ...state, loading: false, error: action.payload, products: [] }
      default:
         return state
   }
}