import React, { useEffect, useState } from 'react'
import Nav from '../components/nav/navbar'
import Footer from '../components/footer/footer'
import { Link } from 'react-router-dom'
import CartPage from '../components/Cart/cart'


// const cartFromLocalStorage: any = JSON.parse(localStorage.getItem('cart' || '[]') as '[]')

export default function Error() {

      // const [cart, setCart] = useState(cartFromLocalStorage);
  
      // useEffect(() => {
      //   localStorage.setItem('cart', JSON.stringify(cart));
      // }, [cart]);
    
      return (
        <main className='h-full'>
          <Nav />
          {/* <div className=''>
            <CartPage cart={cart} setCart={setCart} />
          </div> */}
    <div className='pt-24 pb-24 mx-auto my-auto'>
    <div className='text-center capitalize text-3xl pt-10'> 404 Page Error</div><br /><br />
    <div className=' text-center text-sm w-full hover:text-red-600 px2 py-2 block text-black cursor-pointer '
    >
      <Link to='/'> &larr; Back to homepage </Link> </div>
      
    <Footer /> 
    </div>
    </main>
  )
}
