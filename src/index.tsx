import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Newarrival from './pages/PagesSec/newarrival';
import Admin from './pages/admin/admin.page';
import Track from './pages/TrackOrder/track';
import Policy from './pages/privacy/conditions';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetails from './pages/productpage/product';
import Error from './pages/error';
import Profile from './pages/user/profile';
import Login from './pages/Auth/Login/loginpage' ;
import Register from './pages/Auth/SignUp/register';
import FAQs from './pages/FAQs/FAQs';
import Popular from './pages/PagesSec/Popular';
import Jewelries from './pages/PagesSec/Jewelries';
import Footwears from './pages/PagesSec/footwears';
import Kids from './pages/PagesSec/kids';
import Men from './pages/PagesSec/men';
import Women from './pages/PagesSec/women';
import Accessories from './pages/PagesSec/accessories';
import MustHave from './pages/PagesSec/MustHaves';
import Seasonal from './pages/PagesSec/Seasonal';
import SuperDeals from './pages/PagesSec/SuperDeals';
import AdminProd from './pages/admin/AdminLandPage';
import CartPage from './components/Cart/cart' ;


import ProdDetails from './pages/productpage/productDetails';
import FailedPage from './pages/paymentPage/failed';
import SuccessfulPage from './pages/paymentPage/successful';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' index  element={<App /> } />
        <Route path='/product-details/:id'  element={<ProductDetails />} />        
        <Route path='/jewelries'  element={<Jewelries />} />
        <Route path='/superdeals'  element={<SuperDeals />} />
        <Route path='/newarrival'  element={<Newarrival />} />
        <Route path='/accessories'  element={<Accessories />} />
        <Route path='/musthave'  element={<MustHave/>} />
        <Route path='/seasonal'  element={<Seasonal />} />
        <Route path='/popular'  element={<Popular />} />
        <Route path='/footwears'  element={<Footwears  />} />
        <Route path='/musthaves'  element={<MustHave  />} />
        <Route path='/seasonals'  element={<Seasonal  />} />
        <Route path='/women'  element={<Women />} />
        <Route path='/men'  element={<Men />} />
        <Route path='/kids'  element={<Kids />} />
        <Route path='/user/profile'  element={<Profile />} />
        {/*
         <Route
          path='/user/bag'  
         element={<CartPage />} 
         />  
         just in case you have to render it as a page 
        but in so doing it must not stay as an object container 
            */}
        <Route path='/auth/login'  element={<Login />} />
        <Route path='/infos'  element={<ProdDetails />} />
        <Route path='/newcustomer/signup'  element={<Register />} />
        <Route path='/items/trackorder'  element={<Track />} />
        <Route path='/user/payment/payment-failed'  element={<FailedPage />} />
        <Route path='/user/payment/payment-successful'  element={<SuccessfulPage />} />
        <Route path='/privacy-and-policy'  element={<Policy />} />
        <Route path='/private/admin/dashboard'  element={<AdminProd />} />
        <Route path='/private/admin/add-a-new-product'  element={<Admin />} />
        <Route path='/FAQs'  element={<FAQs />} />
       <Route path='*' element={<Error /> } /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
