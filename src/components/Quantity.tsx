import React, { FC, useState } from 'react'

interface Props {
   count: number
   setCount: React.Dispatch<React.SetStateAction<number>>
}

const Quantity: FC<Props> = (props) => {
   const { count, setCount } = props



   return (
      <div className='flex items-center'>
         <button onClick={() => count > 0 && setCount(prev => --prev)} >-</button>
         <input
            type='number'
            className='mx-2'
            onChange={e => setCount(+e.target.value)}
            value={count}
         />
         <button onClick={() => count < 10 && setCount(prev => ++prev)} >+</button>
      </div>
   )
}

export default Quantity
