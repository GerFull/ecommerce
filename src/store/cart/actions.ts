import { TypeActionCart, actionTypes } from '../cart/types'
import { Dispatch } from "redux";
import axios from "axios";
import { IProduct } from '../../types';




export const fetchCarts = () => {
   return async (dispatch: Dispatch<TypeActionCart>) => {
      try {
         dispatch({ type: actionTypes.FETCH_CART })
         const response = await axios.get('https://dummyjson.com/products/category/laptops')
         dispatch({ type: actionTypes.FETCH_CART_SUCCESS, payload: response.data.products })
      } catch (e) {
         dispatch({
            type: actionTypes.FETCH_CART_ERROR,
            payload: 'Произошла ошибка при загрузке пользователей'
         })
      }
   }
}


export const addToCart = (product: IProduct, count: number) => (
   { type: actionTypes.CART_ADD_ITEM, payload: { product, count } }
)

export const removeFromCart = (productId: string) => (
   { type: actionTypes.CART_REMOVE_ITEM, payload: productId }
)