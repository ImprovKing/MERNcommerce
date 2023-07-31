import '../components/card.css' ;
import React from "react";
import { StoreData } from '../data/store-data';
import { Link } from 'react-router-dom';


interface Props {}

const Card : React.FC<Props> = () => {

    let product = StoreData.getProducts() ; // getting all static products

    return (
        <>
        <div className='text-center' id='prod-cont'>
            
            {
              product.map((item : any ) => (
                <Link to={`/product-details/${item.id}`} key={item.id} >
                <div className="product-grid" >
                  <div className="product-image">
                    <a href="#" className="image">
                      <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/86/690064/1.jpg?7852" alt='/' />
                    </a>
                    <span className="product-discount-label">-23%</span>

                    <a className="add-to-cart bg-black">
                      Add to Cart</a>
                  </div>
                  <div className="product-content">
                    <h3 className="title text-base">{item.name}</h3>
                    <div className="price text-base">${item.price}<span>$68.88</span></div>
                  </div>
                </div>
                </Link>
              ))
            }
        </div>
        </>
    )
    
}


export default Card;