import React from 'react'
import { Link } from 'react-router-dom'

export default function FailedPage() {
  return (
    <div>
           <div className='w-full h-full bg-black-800' id=''>

<div className='' id='pay-confail'>
  <div className='' id='pay-icon'>
    <img src='https://cdn.dribbble.com/users/936407/screenshots/2536049/load.gif' alt='/' />
 </div>   
  <h2 className='text-red-400 font-bold text-2xl text-center'> Payment Failed ! </h2><br /><br />
<h2 className='hover:text-red-800 text-black text-center text-xl font-medium'> 
<Link to='/'>
Try again
</Link>
 </h2>
</div>

</div>
    </div>
  )
}
