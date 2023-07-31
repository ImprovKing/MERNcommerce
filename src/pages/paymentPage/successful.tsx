import React from 'react'
import { Link } from 'react-router-dom'

export default function SuccessfulPage() {
  return (
    <div className='w-full h-full ' id=''>

      <div className='' id='pay-conf'>
        <div className='' id='pay-icon'>
          <img src='https://cdn.dribbble.com/users/1751799/screenshots/5512482/check02.gif' alt='/' />
       </div>   
        <h2 className='text-green-400 font-bold text-2xl text-center'> Payment Successful ! </h2><br /><br />
      <h2 className='hover:text-red-800 text-black text-center text-xl font-medium'> 
      <Link to='/user/profile'>
      &larr; to Orders
      </Link>
       </h2>
      </div>

    </div>


  )
}
