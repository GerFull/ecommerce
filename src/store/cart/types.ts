import { IProduct,ICartItem } from "../../types";

export enum actionTypes{
   CART_ADD_ITEM='CART_ADD_ITEM',
   CART_REMOVE_ITEM='CART_REMOVE_ITEM',
   FETCH_CART = 'FETCH_USERS',
   FETCH_CART_SUCCESS = 'FETCH_USERS_SUCCESS',
   FETCH_CART_ERROR = 'FETCH_USERS_FETCH_USERS_ERROR',
}

interface FetchCartsAction {
   type: actionTypes.FETCH_CART;
}
interface FetchCartsSuccessAction {
   type: actionTypes.FETCH_CART_SUCCESS;
   payload: ICartItem[]
}
interface FetchCartsErrorAction {
   type: actionTypes.FETCH_CART_ERROR;
   payload: string;
}

interface ICartAddItemPalyload {
   product:IProduct,
   count: number
}

interface ICartAddItem{
   type:actionTypes.CART_ADD_ITEM
   payload: ICartAddItemPalyload
}

interface ICartRemoveItem{
   type: actionTypes.CART_REMOVE_ITEM,
   payload: string
}

export type  TypeActionCart = ICartAddItem | ICartRemoveItem |FetchCartsAction |FetchCartsSuccessAction | FetchCartsErrorAction