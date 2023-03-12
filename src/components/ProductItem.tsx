import React, { FC,useState } from 'react'
import { useActions } from '../hooks/useActions'
import { IProduct } from '../types'
import Quantity from './Quantity'

interface Props {
   product: IProduct
}

const ProductItem: FC<Props> = (props) => {
   const { product } = props

   const [count, setCount] = useState(1)
   const {addToCart}=useActions()


   const addHandler = () => {
      addToCart(product,count)
   }

   return (
      <div className=' shadow-md rounded-md p-5 w-2/5 mx-auto mb-5 mt-7 bg-white flex flex-col items-center justify-center '>
         <img src={product.images[0]} width='300' />
         <div className='text-lg font-bold my-2'>{product.title}</div>
         <div className='text-sm text-gray-600'>{product.price}$</div>
         <Quantity count={count} setCount={setCount}/>
         <button className='bg-indigo-900 text-white rounded-sm px-3 py-1' onClick={addHandler}>В корзину</button>
      </div>
   )
}

export default ProductItem
