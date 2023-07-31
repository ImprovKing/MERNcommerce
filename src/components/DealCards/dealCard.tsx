import React from 'react'
import '../DealCards/deal.css'

export default function DealCards() {
  return (
    <div id='cardCont' className=''> 
        <div className='text-red-600 absolute text-2xl pt-3  pl-3' > -30% </div>
        <img src='https://img.staticdj.com/52a8a04f9eb7cba44136da03eda3e828.jpeg' alt='' />
    <div className='  -mt-24 w-auto p-3 bg-blend-screen backdrop-blur-xl backdrop-opacity-60'>
        <h3 className='text-lighter text-black text-2xl '>Denim curvy jeans</h3>
        <h3 className='text-right text-black font-bold text-2xl'>$ 30.65 </h3>
     </div>
    </div>
  )
}
