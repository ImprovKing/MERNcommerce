import React, { useEffect, useState, useMemo } from "react";
import Nav from "../../components/nav/navbar";
import SideBar from "../../components/sideBarComponent/side.bar";
import Footer from "../../components/footer/footer";
import CartPage from "../../components/Cart/cart";
import ScrollToTop from "../../components/Uppernav/ScrollTop";
import Pagination from '../PagesSec/Pagination/pagination';
import '../../../src/components/pageCard/page.css';
import { StoreData } from '../../data/store-data';
import { Link } from "react-router-dom";



const cartFromLocalStorage: any = JSON.parse(localStorage.getItem('Bag' || '[]') as '[]')

interface Props { }

let PageSize = 15;

const Accessories : React.FC<Props> = () => {

    let product = StoreData.getProducts();

    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return product.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    const [bag, setBag] = useState(cartFromLocalStorage);

    useEffect(() => {
        localStorage.setItem('Bag', JSON.stringify(bag));
    }, [bag]);

    /////////   PAGINATION    //////////////




    return (
        <>
         <CartPage bag={bag} setBag={setBag} />
            <main>
                <ScrollToTop />
                <Nav /><br /><br />
                <section className="pt-10 pb-10 " >

                    <div className=' absolute boder-0 sm:hidden' id='sideBar' >
                        <SideBar />
                    </div>

                    <div className='' id="prod-container">
                        <div id='titlebox' className='li:p-1'>
                            <h2 className='p-4 text-left text-5xl font-bold sm:text-3xl sm:text-center sm:font-medium'>Accessories  </h2>
                            <p className='text-sm text-lighter pl-2 sm:text-xs capitalize'> It all new . Browse our versatile selection and choose from a range of styles and washes that are
                                perfect for you . we have all the standout, on-trend and inexpensive styles you're looking for.
                                Browse our Accessories  collection below and find your new favorite pairs.</p>
                            <div className='flex shrink gap-4 pt-2 pb-2'>
                                <span className='font-bold p-2 cursor-pointer sm:text-sm'> SORT BY : </span>
                            </div>
                        </div>


                        <ul className='pl-2 grid grid-cols-4 3xl:grid-cols-4  gap-0 lg:grid-cols-4 Llg:grid-cols-4 gi:grid-cols-3 sxs:grid-cols-2 sxs:gap-0 li:grid-cols-1 li:p-2 li:grid-cols-0 li:w-4/5 li:mx-auto li:my-auto ' >

                        {currentTableData.map((item : any ) => {
                                return (
                                    <Link to={`/product-details/${item.id}`} key={item.id}>
                                    <div className="product-grid" id='product-card'>
                                    <div className="product-image">
                                            <a href="#" className="image">
                                                <img src={item.image} alt='/' />
                                            </a>
                                            {/* <span className="product-discount-label">-23%</span> */}

                                        </div>
                                        <div className="product-content text-left ">
                                            <h3 className="title truncate text-base">{item.name}</h3>
                                            <div className="price truncate text-base ">$ {item.price}  <span> $ 68.88</span></div>
                                        </div>
                                    </div>
                                    </Link>
                                );
                            })}

                        </ul><br /><br />
                    </div>

                </section>
                <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={product.length}
                    pageSize={PageSize}
                    onPageChange={(page: React.SetStateAction<number>) => setCurrentPage(page)}
                />
                <section className='pt-10 '>
                    <Footer />
                </section>
            </main>

        </>
    )
}

export default Accessories ;