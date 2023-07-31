import React from "react";

interface Props {}

const PageCard : React.FC<Props> = () => {

    return (
        <>
        <div className="product-grid" id='product-card'>
            <div className="product-image">
                <a href="#" className="image">
                    <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/86/690064/1.jpg?7852" alt='/' />
                </a>
                <span className="product-discount-label">-23%</span>

            </div>
            <div className="product-content text-left ">
                <h3 className="title truncate text-base">Vintage Classic Top</h3>
                <div className="price truncate text-base ">$53.55 <span>$68.88</span></div>
            </div>
        </div>
        </>
    )
    
}


export default PageCard ;