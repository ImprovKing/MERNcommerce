import React from 'react';
import '../sideBarComponent/side.css'
import { Link } from 'react-router-dom';
interface Props {}

const SideBar:React.FC<Props> = () => {
    return (
        <div className='absolute left-0 sm:hidden pl-2 border-2' id='sideBarCom'>
            <ul>
                        <li className='pb-5 pt-5 '>
                            <div >
                                <Link to='/newarrival'  className='no-underline text-base text-black  no-underline truncate hover:text-red-600 font-medium'>
                                       NewArrival
                                 </Link>
                            </div>
                        </li>
                        <li className='pb-5 pt-5 '>
                            <div  >
                            <Link to='/popular'  className='no-underline text-base text-black  no-underline truncate hover:text-red-600 font-medium'>
                                       Popular
                                 </Link>
                            </div>
                        </li>
                        <li className='pb-5 pt-5 '>
                            <div >
                            <Link to='/men'  className='no-underline text-base text-black  no-underline truncate hover:text-red-600 font-medium'>
                                       Men
                                 </Link>
                            </div>
                        </li>
                        <li className='pb-5 pt-5 '>
                            <div >
                            <Link to='/women'  className='no-underline text-base text-black  no-underline truncate hover:text-red-600 font-medium'>
                                       Women
                                 </Link>
                            </div>
                        </li>
                        <li className='pb-5 pt-5 ' >
                            <div>
                            <Link to='/kids'  className='no-underline text-base text-black  no-underline truncate hover:text-red-600 font-medium'>
                                       Kids
                                 </Link>
                            </div>
                        </li>
                        <li className='pb-5 pt-5 '>
                            <div >
                            <Link to='/jewelries'  className='no-underline text-base text-black  no-underline truncate hover:text-red-600 font-medium'>
                                       Jewelries
                                 </Link>
                            </div>
                        </li>
                        <li className='pb-5 pt-5 '>
                            <div >
                            <Link to='/accessories'  className='no-underline text-base text-black  no-underline truncate hover:text-red-600 font-medium'>
                                       Accessories
                                 </Link>
                            </div>
                        </li>
            </ul>
        </div>
    );
}

export default SideBar;
