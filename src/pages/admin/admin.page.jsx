import React from "react";
import '../admin/admin.css';
import { Link } from 'react-router-dom';
import ScrollToTop from "../../components/Uppernav/ScrollTop";
import AdminBar from '../../AdminBar.svg';
import toast, { Toaster } from 'react-hot-toast';

const createNoti = () => toast(" Successfully created a new product !!! ")


class Admin extends React.Component {
    render() {
        return (
            <>
                <ScrollToTop />
                <div className='admin'>

                    <div className="sidebar shadow-xl ">

                        <input id="menu-switch" type="checkbox" />

                        <nav id="menu" role="navigation">
                            <div class="brand">
                                <div className="admin-img-cont">
                                    <img src="https://images.generated.photos/ganxqQFBPoJRnr1zFw3NtwBtqHgTww0vfRK3RYsv-wY/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDI5NzE4LmpwZw.jpg" alt='/' />
                                </div>
                                <p className='admin-name text-'> Alexander Philip </p>
                            </div>
                            <ul className="pages block justify-left text-left ">
                                <li>
                                    <label for='two' className='text-xl font-medium pb-5 text-white'>
                                        <Link to='/private/admin/add-a-new-product'>
                                        Products
                                        </Link>
                                    </label><br />
                                </li>
                                <li>
                                    <label for='three' className='text-xl font-medium pb-5 text-white'>
                                        Users
                                    </label><br />
                                </li>
                                <li>
                                    <label for='four' className='text-xl font-medium pb-5 text-white'>
                                        Orders
                                    </label><br />
                                </li>
                            </ul>
                        </nav>
                        <input type="radio" name='group' id="one" checked />
                        <input type="radio" name='group' id="two" />
                        <div class="page-wrap"><br />
                            <h2 className='text-xl font-medium text-center text-black'> Admin Dashboard </h2>
                            <label for="menu-switch" className="btn btn-success" id="menu-toggle">
                                <img src={AdminBar} alt='/' />
                            </label><br />
                            <div className=" flex gap-6 absolute right-5 top-5 md:top-24 ">
                                <span className='font-medium text-black text-xl capitalize hover:text-red-800'><Link to='/'> view site </Link></span>
                                <span className='font-medium text-black text-xl capitalize hover:text-red-800'> logout </span>
                            </div><br /><br />

                            <div className="absolute right-12 sm:block sm:relative sm:right-0 ">

                                <div className='text-black font-medium right-4 top-5'> Example of how it will look like.... </div><br />

                                <div className=''>

                                    <div className="product-grid" id='adminPC'>
                                        <div className="product-image">
                                            <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/86/690064/1.jpg?7852" alt='/' />

                                            <span className="product-discount-label">-23%</span>

                                        </div>
                                        <div className="product-content">
                                            <h3 className="title text-base"> Item Name </h3>
                                            <div className="price text-base">$50.23<span>$68.88</span></div>
                                        </div>
                                    </div>
                                
                                </div>
                            </div><br /><br />

                            {/* the Products Page */}

                            <div className='product' id='tab-one'>
                                <Toaster
                                    toastOptions={{
                                        className: '',
                                        style: {
                                            background: 'green',
                                            padding: '10px 15px ',
                                            color: '#fff',
                                        },
                                    }}
                                />

                                <h5 className="font-medium text-2xl capitalize pl-3">Products </h5>

                                <div className="block " >

                                    <div className="p-3">
                                        <h6 className='font-medium text-2xl pl-3'> Add a new Product </h6><br />

                                        <form className=''>

                                            <div className=" pb-2 pt-2 block ">
                                                <label className='text-gray-400 font-medium capitalize'> Product name </label><br />
                                                <input type='text' placeholder='Product name i.e Smothie box' className='border-2 p-4 rounded w-3/5  xs:w-full' /><br />
                                            </div>
                                            <div className=" pb-2 pt-2 block ">
                                                <label className='text-gray-400 font-medium capitalize'> Product price</label><br />
                                                <input type='number' placeholder='Product price i.e 89.65' className='border-2 p-4 rounded w-3/5  xs:w-full' /><br />
                                            </div>
                                            <div className=" pb-2 pt-2 block ">
                                                <label className='text-gray-400 font-medium capitalize'> Product Discount </label><br />
                                                <input type='number' placeholder='Product Discount i.e 50' className='border-2 p-4 rounded w-3/5  xs:w-full' /><br />
                                            </div>
                                            <div className=" pb-2 pt-2 block ">
                                                <label className='text-gray-400 font-medium capitalize'> Product Category </label><br />
                                                <input type='text' placeholder='Product Category.....' className='border-2 p-4 rounded w-3/5  xs:w-full' /><br />
                                            </div>
                                            <div className=" pb-2 pt-2 block ">
                                                <label className='text-gray-400 font-medium capitalize'> Product Quantity </label><br />
                                                <input type='number' placeholder='Product Quantity.....' className='border-2 p-4 rounded w-3/5  xs:w-full' /><br />
                                            </div>
                                            <div className=" pb-2 pt-2 block ">
                                                <label className='text-gray-400 font-medium capitalize'> Product ImageURL 1 </label><br />
                                                <input type='text' placeholder='Product imgurl i.e https://google.com/imgs' className='border-2 p-4 rounded w-3/5  xs:w-full' /><br />
                                            </div>
                                            <div className=" pb-2 pt-2 block ">
                                                <label className='text-gray-400 font-medium capitalize'> Product ImageURL 2 </label><br />
                                                <input type='text' placeholder='Product name i.e https://google.com/imgs' className='border-2 p-4 rounded w-3/5  xs:w-full' /><br />
                                            </div>
                                            <div className=" pb-2 pt-2 block ">
                                                <label className='text-gray-400 font-medium capitalize'> Product ImageURL 3 </label><br />
                                                <input type='text' placeholder='Product name i.e https://google.com/imgs' className='border-2 p-4 rounded w-3/5  xs:w-full' /><br />
                                            </div><br /><br />
                                            <div className=" pb-2 pt-2 block ">
                                                <label className='text-gray-800 font-medium text-2xl xsx:mb-10 capitalize'> Product Sizes </label><br /><br />

                                                <div className='flex flex-wrap shrink gap-4'>
                                                    <input type='checkbox' className='border-2 p-4 rounded w-3/5  xs:w-fullblock' id='size' />
                                                    <b >Large</b>
                                                </div>
                                                <br />
                                                <div className='flex flex-wrap shrink gap-4'>
                                                    <input type='checkbox' className='border-2 p-4 rounded w-3/5  xs:w-fullblock' id='size' />
                                                    <b >Medium</b>
                                                </div>
                                                <br />
                                                <div className='flex flex-wrap shrink gap-4'>
                                                    <input type='checkbox' className='border-2 p-4 rounded w-3/5  xs:w-fullblock' id='size' />
                                                    <b >Small</b>
                                                </div>
                                                <br />
                                                <div className='flex flex-wrap shrink gap-4'>
                                                    <input type='checkbox' className='border-2 p-4 rounded w-3/5  xs:w-fullblock' id='size' />
                                                    <b >XXL</b>
                                                </div>
                                                <br />
                                                <div className='flex flex-wrap shrink gap-4'>
                                                    <input type='checkbox' className='border-2 p-4 rounded w-3/5  xs:w-fullblock' id='size' />
                                                    <b >FIT</b>
                                                </div>
                                                <br />  <br />
                                                <div className='w-12 h-12 grid'>
                                                    <input type='checkbox' className='border-2 p-4 rounded w-3/5  xs:w-fullblock' id='size' />
                                                </div><br />
                                                <label className='text-gray-800 font-medium text-2xl xsx:mb-10 xsx:mt-10 capitalize'> Shoe Size </label><br /><br />

                                                <div className=" pb-2 pt-2 block ">
                                                    <label className='text-gray-400 font-medium capitalize'> Specify Shoe size </label><br />
                                                    <input type='text' placeholder='Shoe Size i.e Smothie box' className='border-2 p-4 rounded w-3/5  xs:w-full' /><br />
                                                </div><br /><br /><br />

                                                <button className='bg-black text-white px-2 py-2 text-center w-3/5  xs:w-fullmx-auto my-auto' onClick={() => createNoti()}> Add new Product </button>
                                            </div>
                                        </form>
                                    </div>


                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Admin 