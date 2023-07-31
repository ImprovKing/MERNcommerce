import './product.css' ;
import { Link , NavigateFunction, useNavigate , useParams} from 'react-router-dom' ;
import Footer from "../../components/footer/footer";
import toast, { Toaster } from 'react-hot-toast';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import Navbar from '../../components/nav/navbar';
import GooglePayButton from '@google-pay/button-react';
import qs from 'query-string';
import { StoreData , ItemDetails as Item, CartItemDetails, } from '../../data/store-data';
import { buildPaymentRequest , getUpdatedPaymentData} from '../google-pay/google-pay-confirmation';
import CartPage from '../../components/Cart/cart';
import { StorageProvider } from '../../data/storage-provider';
import AOS from "aos";
import "aos/dist/aos.css";


import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import PayPalButton from '../google-pay/Paypal/paypalBtn';


// This values are the props in the UI
const amount = "2";
const currency = "USD";
const style = {"layout":"vertical"};

const cartFromLocalStorage: any = JSON.parse(localStorage.getItem('Bag' || '[]') as '[]')

export default function  ProductDetails () {

  const storeData = useMemo(() => new StoreData(), []);
  const query = qs.parse(window.location.search.replace(/^\?/, ''));
  const params : any = useParams();
  const [item, setItem] = useState<Item>();
  const [size, setSize] = useState((query.size as string) || 'M');
  const [quantity, setQuantity] = useState(1);  
  const [paymentRequest, setPaymentRequest] = useState(buildPaymentRequest([]));
  const navigate: NavigateFunction = useNavigate(); 

  // const {setBag}  = useContext(BagContext) ;
  const [bag, setBag]  = useState(cartFromLocalStorage)  ;

  let product = StoreData.getProducts();
  // let productDetails = getProductsId( parseInt (params.id , 10))  ;


  useEffect(() => {
    AOS.init();
    AOS.refresh();
    localStorage.setItem('Bag', JSON.stringify(bag));
    storeData.getProductsId(parseInt (params.id , 10)).then((data : any) => setItem(data)) ;
  } , [params , storeData , bag])  ;


  useEffect(() => {
    Object.assign(
      paymentRequest,
      buildPaymentRequest(
        item
          ? [
              {
                label: `${item.title} (${size}) x ${quantity}`,
                price: (item.price * quantity).toFixed(2),
                
                type: 'LINE_ITEM',
              },
            ]
          : [],
      ),
    );
    setPaymentRequest(paymentRequest);
  }, [item, size, quantity, paymentRequest]);  

    function addToCart() {
    if (item) {
      storeData.addItemToCart(item, size, quantity);
      toast('Item Successfully added to Bag ') ;
      window.location.reload();
    }
  }

  function handleLoadPaymentData(paymentData: google.payments.api.PaymentData) {
    console.log('Payment data', paymentData);
    navigate('/user/payment/payment-successful');
  }

  return (
    <>
      <Navbar /><br />  <br />
       <main className='md:mt-12'>
      <CartPage bag={bag} setBag={setBag} />        
        <div>
          <Toaster
            toastOptions={{
              className: '',
              style: {
                background: 'black',
                padding: '10px 15px ',
                color: '#fff',
                fontWeight: "lighter"
              },
            }} />
        </div>
        <div className="details mt-20 md:mt-12">
          {item && (
                        <div className="det-main-cont">
            <div className="det-img " 
                data-aos="zoom-out">
              <img src={item.image} alt='/' />
            </div>
            <div className="det-info">
              <h4 className="text-3xl text-left capitalize" data-aos="zoom-in">
                {item.name}
              </h4><br />
              <h2 className="detprice text-xl font-medium" data-aos="zoom-in"> $ {item.price} </h2><br />

              <div className="other-details" >

              <div 
                className='grid grid-cols-2 gap-12 w-4/5 md:w-4/5 mx-auto my-auto p-3'>
                <select 
                className='border-2 rounded shadow-xl p-2'
                aria-label='Size '
                value={size}
                onChange={event => setSize(event.target.value as string)}
                >
                  <option value='XS' className='text-lighter text-gray-600 '> XS </option>
                  <option value='S' className='text-lighter text-gray-600 '> S </option>
                  <option value='M' className='text-lighter text-gray-600 '> M </option>
                  <option value='L' className='text-lighter text-gray-600 '> L </option>
                  <option value='XL' className='text-lighter text-gray-600 '> XL </option> 
                  <option value='XXL' className='text-lighter text-gray-600 '> XXL </option>
                </select> 

                <select
                className='border-2 rounded shadow-xl p-2'
                aria-label='Quantity '
                value={quantity}      
                onChange={event => setQuantity(Number(event.target.value))}
                >
                  <option value='1' className='text-lighter text-gray-600 '> 1 </option>
                  <option value='2' className='text-lighter text-gray-600 '> 2 </option>
                  <option value='3' className='text-lighter text-gray-600 '> 3 </option>
                  <option value='4' className='text-lighter text-gray-600 '> 4 </option>
                  <option value='5' className='text-lighter text-gray-600 '> 5 </option>
                 
                </select>        

              </div>
                <div className="mt-10 mb-5">
                  <h2 className='font-bold text-lg text-left'> Description </h2>
              <div className="text-base capitalize w-auto text-truncate">{item.description}</div>
              </div> 
              <div className=''>  
              <GooglePayButton
                  environment="TEST"
                  buttonSizeMode="fill"
                  paymentRequest={paymentRequest}
                  onLoadPaymentData={handleLoadPaymentData}
                  onError={error => console.error(error)}
                  onPaymentDataChanged={paymentData => getUpdatedPaymentData(paymentRequest, paymentData)}
                />
                </div><br/>

                  <button
                    className='pl-2 pr-2 pt-2 pb-2 bg-black w-full text-center rounded text-white '
                    aria-label='Add to Bag '
                    onClick={addToCart}
                  > Add to Bag </button>

                </div>
                <br /><br />
              </div>
            </div>
          ) 
      }
      </div><br /><br /><br /><br />
          
        <div>
          <h2 className="pl-5 pt-5 font-medium text-2xl"> Other Items </h2><br />
          
          <div>
            <div className="slides" 
                data-aos="zoom-in"
                data-aos-duration='400'
                >
              {product.map((item : any) => (
                <Link to={`/product-details/${item.id}`} key={item.id}>
                  <div className="slideProduct-grid">
                    <div className="slideProduct-image">*
                      <span className="image">
                        <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filtonClickers:fill(white)/product/86/690064/1.jpg?7852" alt='/' />
                      </span>
                      <span className="slideProduct-discount-label">-23%</span>

                    </div>
                    <div className="h-full border-gray-900 border-t-4 p-3">
                      <h3 className="slidetitle text-sm no-underline truncate">{item.name}</h3><br />
                      <div className="slidePrice text-xl no-underline">${item.price}<span>$68.88</span></div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>

  );
}
