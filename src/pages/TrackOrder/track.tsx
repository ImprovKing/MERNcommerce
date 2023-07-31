import React, { useEffect, useState } from "react";
import '../TrackOrder/track.css' ;
import Nav from "../../components/nav/navbar";
import Footer from "../../components/footer/footer";
import CartPage from "../../components/Cart/cart";


interface Props {}

const cartFromLocalStorage: any = JSON.parse(localStorage.getItem('cart' || '[]') as '[]')

const Track:React.FC<Props> = () => {
    const [cart, setCart] = useState(cartFromLocalStorage);

    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
  
    return (
      <main>
      {/* <CartPage /> */}
        <Nav /><br /><br />
                <div className='w-4/5 mx-auto my-auto  block sm:w-full'>
                    <div className=' mt-5 sm:pl-2' id='sect'>
                <h2 className="text-3xl font-bold   "> Track Your Package </h2><br />
                <p className='text-lighter text-base'> Enter your order number in the box below to review your purchase and view its delivery status.
If you have just placed an order, it will take a few minutes to update. </p>
                </div>
                <div id='sect'>

                    <form className='w-full'>
                        <div className='mb-2'>
                            <label className='font-medium'> Email <span className='text-red-800'> * </span></label><br />
                        <input type={'search'}className="w-full border-2 rounded p-2" placeholder="Enter your order..." />
                        </div><br />
                        <div className='mb-2'>
                            <label className='font-medium'> Order number  <span className='text-red-800'> * </span></label><br />
                        <input type={'search'}className="w-full border-2 rounded p-2" placeholder="Enter your order..." />
                        </div>
                        <button className="bg-black px-2 py-4 rounded text-white hover:text-gold-500" type={'submit'} > Search </button> 
                    </form>

                    <div className="border-2 w-4/5  mx-auto my-auto md:m-0 md:w-full ">

                        <div className="">

                        </div>
                        
                    </div>
                </div>
                </div>
                <Footer />
            </main>
    )
} 

export default Track ;