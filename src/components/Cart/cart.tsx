import React, { useContext, useEffect, useState } from 'react';
import '../Cart/cartPage.css';
import cartSvg from '../../cart.svg'; 
import { CartItemDetails, ItemDetails, StoreData } from '../../data/store-data';
import { Link, useNavigate , NavigateFunction } from 'react-router-dom';
import GooglePayButton from "@google-pay/button-react";
import { buildPaymentRequest, getUpdatedPaymentData } from '../../pages/google-pay/google-pay-confirmation';
import AuthenticationService from '../../pages/Auth/authService/auth.service';
import AOS from "aos";
import "aos/dist/aos.css";
import bin from '../../Bin.svg' ;

import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import PayPalButton from '../../pages/google-pay/Paypal/paypalBtn';


// This values are the props in the UI

const currency = "USD";

interface Props {}

// const cartFromLocalStorage = JSON.parse(localStorage.getItem('Bag' || '[]') as '[]')

const CartPage = ({ bag, setBag }: {
  bag: any ;
  setBag: any;
}) => {

  const [paymentRequest, setPaymentRequest] = useState(buildPaymentRequest([]));
  const [price, setPrice] = useState(0);

  let navigate: NavigateFunction = useNavigate();

    const handlePrice = () => {
      let ans = 0;
      bag.map((item : any) => (ans += item.quantity * item.item.price));
      setPrice(ans);
  };

  function handleRemoveClick() {
    const index = bag.findIndex(
      (cartItem: any)  => cartItem.size === cartItem.size && cartItem.item.id === cartItem.item.id,
    );

    if (index !== -1) {
      const newCart = [...bag];
      newCart.splice(index, 1);
      setBag(newCart);
      window.location.reload() ;
    }
  }


  useEffect(() => {
    AOS.init();
    AOS.refresh();
    // handlePrice();
    Object.assign(
      paymentRequest,
      buildPaymentRequest(
        bag.map((cartItem: { item: { title: any; price: number; }; size: any; quantity: number; }) => ({
          label: `${cartItem.item.title} (${cartItem.size}) x ${cartItem.quantity}`,
          price: (cartItem.item.price * cartItem.quantity).toFixed(2),
          type: 'LINE_ITEM',
        })),
      ),
    );
    setPaymentRequest(paymentRequest);
  }, [bag, paymentRequest]);

  function handleLoadPaymentData(paymentData: google.payments.api.PaymentData) {
    console.log('Payment data', paymentData);
    setBag([]);
    navigate("/user/payment/payment-successful");
  }

  return(
    <>
    <div className=''>

    <input type='checkbox' id='cartIconIn' className='hidden' />

    <label className=' p-2 text-center ' id='cartIcon' htmlFor='cartIconIn' data-aos="fade-down">
      <img src={cartSvg} alt='' />
    </label>



    <div className='' id='cartPage'>

      <div className=' w-full h-full mx-auto my-auto absolute' >
        
    <h4 className='text-2xl font-medium text-left pl-5 pt-24'> Shopping Bag </h4>

        <div className='p-5' >
        {
                bag.map((item : CartItemDetails) =>(
                    <div className='mt-24 p-2 relative' key={item.item.id} >

                    <div className='flex flex-wrap gap-6'>
                      <div className='cartImage'>
                      <Link to={`/product-details/${item.item.id}`}>
                      <img src={item.item.image} alt='' />
                      </Link>
                     </div>

                      <p className='font-bold text-base text-lg'>
                        {item.item.name}<br />
                        <p className='font-bold'> Size : {item.size} </p>
                        <p className='font-bold'> Price : USD {item.item.price} </p>
                        <div className='font-bold'>QTY : {item.quantity}</div>
                      </p>
                    </div>

                    <div className='absolute right-10 top-0 w-10 h-10 sm:w-7 sm:h-7 sm:relative sm:block sm:mx-8 sm:my-8 '  onClick={() => handleRemoveClick()}>
                        <img src={bin} alt='/' />
                    </div>{/*onClick={() => handleRemove(item.id)}*/}
                </div>
                ))
            }
        </div>
        <br />

        <span className='p-5'><b> Total </b> $ : 100</span>

        <br /><br /> 
        {/* <div style={{ maxWidth: "600px", minHeight: "200px" }} id='payBun'>
        <GooglePayButton
                  environment="TEST"
                  buttonSizeMode="fill"
                  buttonType= 'buy'
                  paymentRequest={paymentRequest}
                  onLoadPaymentData={handleLoadPaymentData}
                  onError={error => console.error(error)}
                  onPaymentDataChanged={paymentData => getUpdatedPaymentData(paymentRequest, paymentData)}
                />
        </div> 
        <br />
                  <div id='palBun'>
                    <PayPalScriptProvider
                      options={{
                        "client-id": "test",
                        components: "buttons",
                        currency: "USD"
                      }}
                    >
                      <PayPalButton
                        currency={currency}
                        amount={price}
                        showSpinner={true}
                      />
                    </PayPalScriptProvider>
                  </div>       */}
        <button className='bg-black px-2 py-2 text-align w-3/4 mx-auto my-auto'> Proceed to checkout </button>
      </div>

      </div>
    </div>  

    </>

  )
}

export default CartPage;
