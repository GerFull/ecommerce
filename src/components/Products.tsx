import React, { FC, useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { IProduct } from '../types'
import ProductItem from './ProductItem'



const Products: FC = () => {

   const { products, error, loading } = useTypedSelector(state => state.cart)


   const { fetchCarts } = useActions()


   useEffect(() => {
      fetchCarts()
   }, [])

   if (loading) {
      return <div className='flex justify-center h-screen items-center font-bold text-5xl'>Loading...</div>
   }

   if (error) {
      return <div className='flex justify-center h-screen items-center font-bold text-5xl'>{error}</div>
   }


   return (
      <div className=' mt-4'>
         {
            products.map(product => (
               <ProductItem product={product} />
            ))
         }
      </div>
   )
}

export default Products
