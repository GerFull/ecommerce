import React, { FC, useState } from 'react'
import logo from '../assets/images/fastify.svg'
import cartIcon from '../assets/images/bx-cart.svg'
import cn from 'classnames'
import { ICartItem } from '../types'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'






const Header: FC = () => {

   const [show, setShow] = useState(false)
   const { carts } = useTypedSelector(state => state.cart)
   const {removeFromCart} = useActions()

   const total: number = carts.reduce((acc, item) =>
      item.price + acc
      , 0)

   const removeHandler = (id: string) => {
      removeFromCart(id)
   }

   return (
      <div className='flex items-center justify-between relative bg-indigo-500 w-full py-2 px-3 '>
         <img src={logo} alt='logo' width='180' />
         <div className='flex justify-between w-14 items-center'>
            <button className=' bg-transparent border-none' onClick={() => setShow(!show)}>
               <img src={cartIcon} alt='cart icon' />
            </button>
            <div className='bg-white rounded-md w-5 h-5 flex justify-center items-center font-bold'>{carts.length}</div>
         </div>
         <div
            className={cn('absolute right-0 shadow-md p-5 bg-white ', {
               hidden: !show
            })}

            style={{
               top: 60
            }}
         >
            {
               carts.map(item => (
                  <div key={item.title} className=' flex items-center'>
                     <img src={item.images[0]} alt='imageItem' className=' mr-3' width='55' height='55' />
                     <div>
                        <div>{item.title}</div>
                        <div>{`${item.count} x $${item.price}`}</div>
                        <button onClick={() => removeHandler(item.id)} className='text-red-600 bg-transparent border-0'>
                           Удалить
                        </button>
                     </div>
                  </div>
               ))
            }
            <div className='text-lg border-t-2 border-solid border-red-300 pt-1 mt-5'>Total: ${total}</div>
         </div>
      </div>
   )
}

export default Header
