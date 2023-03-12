
export interface IProduct {
   id: string,
   title: string,
   images: string[],
   price: number,
}

export interface ICartItem extends IProduct {
   count: number
}


export interface CartState {
   carts: ICartItem[];
   products:IProduct[]
   loading: boolean;
   error: null | string;
}