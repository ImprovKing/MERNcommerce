import React, { useState, useMemo } from 'react';
import Pagination from '../PagesSec/Pagination/pagination';
import '../admin/admin.css';
import { Link } from 'react-router-dom';
import { StoreData } from '../../data/store-data';
import ScrollToTop from "../../components/Uppernav/ScrollTop";
import AdminBar from '../../AdminBar.svg';
import toast, { Toaster } from 'react-hot-toast';

const editNoti = () => toast("Successfully Updated an item !!!")
const del = () => toast('Successfully deleted !!!')

let PageSize = 15;


function AdminProd () {
    let allProduct = StoreData.getProducts() ;

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return allProduct.slice(firstPageIndex, lastPageIndex);
}, [currentPage]);



        return (
            <>
                <ScrollToTop />
                <div className='admin'>

                    <div className="sidebar shadow-xl ">

                        <input id="menu-switch" type="checkbox" />

                        <nav id="menu" role="navigation">
                            <div className="brand">
                                <div className="admin-img-cont">
                                    <img src="https://images.generated.photos/ganxqQFBPoJRnr1zFw3NtwBtqHgTww0vfRK3RYsv-wY/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDI5NzE4LmpwZw.jpg" alt='/' />
                                </div>
                                <p className='admin-name text-'> Alexander Philip </p>
                            </div>
                            <ul className="pages block justify-left text-left border-2 ml-2">
                                <li className='pl-3'>
                                <div className=" ">
                                <span className='font-medium text-white text-xl capitalize hover:text-red-800'><Link to='/'> view site </Link></span >
                                
                            </div>
                                </li>
                                <li className='pl-3'>
                                    <label htmlFor='three' className='text-xl font-medium pb-5 text-white'>
                                    <span className='font-medium text-white text-xl capitalize hover:text-red-800'> logout </span>
                                    </label><br />
                                </li>
                                <li className='pl-3'>
                                    <label htmlFor='four' className='font-medium text-white text-xl capitalize hover:text-red-800'>
                                        Orders
                                    </label><br />
                                </li>
                                
                                <li className='pl-3'>
                                    <label htmlFor='four' className='font-medium text-white text-xl capitalize hover:text-red-800'>
                                        Products
                                    </label><br />
                                </li>
                                
                                <li className='pl-3'>
                                    <label htmlFor='four' className='font-medium text-white text-xl capitalize hover:text-red-800'>
                                        Users
                                    </label><br />
                                </li>
                            </ul>
                        </nav>
                        <input type="radio" name='group' id="one" checked />
                        <input type="radio" name='group' id="two" />
                        <div className="page-wrap"><br />
                            <h2 className='text-xl font-medium text-center text-black'> Admin Dashboard </h2>
                            <label htmlFor="menu-switch" className="btn btn-success" id="menu-toggle">
                                <img src={AdminBar} alt='/' />
                            </label><br />


                            <div className="absolute right-5 md:right-2 z-0" id='addbtn'>
                                <div className='bg-black text-white rounded font-medium px-2 py-2 right-4 top-5'> 
                                <Link to='/private/admin/add-a-new-product' className='text-base'> Add a new Product </Link> 
                                 </div>
                            </div>

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

                                <div className=" " >

                                    <div className="p-3">
                                        <h6 className='font-medium text-2xl pl-3'>Products  </h6><br />

                                       <div className='border-2 ' >
                          <table className='w-full ' id='tableCont' >
                            <thead>
                              <tr>
                                <th className='uppercase truncate w-auto font-medium text-base pl-5 pr-5 bg-gray-300'>ID</th>
                                <th className='uppercase truncate w-auto font-medium text-base pl-5 pr-5 '>NAME</th>
                                <th className='uppercase truncate w-auto font-medium text-base pl-5 pr-5 bg-gray-300'>price</th>
                                <th className='uppercase truncate w-auto font-medium text-base pl-5 pr-5 '>discount</th>
                                <th className='uppercase truncate w-auto font-medium text-base pl-5 pr-5 bg-gray-300'>category</th>
                                <th className='uppercase truncate w-auto font-medium text-base pl-5 pr-5'>edit</th>
                                <th className='uppercase truncate w-auto font-medium text-base pl-5 pr-5 bg-gray-300'>delete</th>
                              </tr>
                            </thead><br />
                            <tbody>
                              {currentTableData.map((item : any) => {
                                return (
                                  <tr>
                                    <td className='capitalize truncate text-lighter pl-5 pr-5 pb-12 pt-12 hover:text-red-800 w-auto'>{item.id}</td>
                                    <td className='capitalize truncate text-lighter pl-5 pr-5 pb-12 pt-12 hover:text-red-800 w-auto'>{item.name}</td>
                                    <td className='capitalize truncate text-lighter pl-5 pr-5 pb-12 pt-12 hover:text-red-800 w-auto'> $ {item.price}</td>
                                    <td className='capitalize truncate text-lighter pl-5 pr-5 pb-12 pt-12 hover:text-red-800 w-auto'>% {item.discount} off </td>
                                    <td className='capitalize truncate text-lighter pl-5 pr-5 pb-12 pt-12 hover:text-red-800 w-auto'> {item.category} </td>
                                    <td className='capitalize truncate text-lighter pl-5 pr-5 pb-12 pt-12 hover:text-red-800 w-auto'>{item.discount}</td>
                                    <td className='capitalize truncate text-lighter pl-5 pr-5 pb-12 pt-12 hover:text-red-800 w-auto'>{item.category}</td>
                                  </tr>
                                );
                              })}
                            </tbody>
                         </table>

                          <Pagination
                            className="pagination-bar"
                            currentPage={currentPage}
                            totalCount={allProduct.length}
                            pageSize={PageSize}
                            onPageChange={(page: React.SetStateAction<number>) => setCurrentPage(page)}
                          />
                                           </div>
                                    </div>


                                </div>


                            </div>
                        </div><br /><br /><br />
                    </div>
                </div>
            </>
        )
    }

export default AdminProd