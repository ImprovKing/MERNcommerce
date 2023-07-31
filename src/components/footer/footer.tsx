import React, { useEffect } from "react";
import '../footer/footer.css'
import deltraLogo from '../../delt1.svg';
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

interface Props { }

const Footer: React.FC<Props> = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <footer className="text-base">

        <div id='footLogo' data-aos-duration='400' data-aos="zoom-out">
          <img src={deltraLogo} alt='logo' />
        </div>

        <div className="flex shrink gap-32 mt-12 gap-6 xs:gap-2 sm:flex-0 sm:block">

          <div className=''>

            <div className="p-2">

              <h2 className="font-bold "> SHOP </h2>

              <ul className='pt-5'>
                <li
                  className='text-light capitalize text-black pb-2 hover:text-red-700'>
                  <Link className='text-light capitalize text-black pb-2 hover:text-red-700' to='/women'>
                    Women
                  </Link></li>
                <li
                  className='text-light capitalize text-black pb-2 hover:text-red-700'>
                  <Link className='text-light capitalize text-black pb-2 hover:text-red-700' to='/men'>
                    Men
                  </Link>
                </li>
                <li
                  className='text-light capitalize text-black pb-2 hover:text-red-700'>
                  <Link className='text-light capitalize text-black pb-2 hover:text-red-700' to='/kids'>
                    Kids
                  </Link>
                </li>
                <li
                  className='text-light capitalize text-black pb-2 hover:text-red-700'>
                  <Link className='text-light capitalize text-black pb-2 hover:text-red-700' to='/newarrivals'>
                    New Arrivals
                  </Link>
                </li>
                <li
                  className='text-light capitalize text-black pb-2 hover:text-red-700'>
                  <Link className='text-light capitalize text-black pb-2 hover:text-red-700' to='/women'>
                    Women
                  </Link>
                   </li>
                   <li
                  className='text-light capitalize text-black pb-2 hover:text-red-700'>
                  <Link className='text-light capitalize text-black pb-2 hover:text-red-700' to='/popular'>
                    Popular
                  </Link>
                   </li>
                   <li
                  className='text-light capitalize text-black pb-2 hover:text-red-700'>
                  <Link className='text-light capitalize text-black pb-2 hover:text-red-700' to='/accessories'>
                    accessories
                  </Link>
                   </li>
                   <li
                  className='text-light capitalize text-black pb-2 hover:text-red-700'>
                  <Link className='text-light capitalize text-black pb-2 hover:text-red-700' to='/musthave'>
                    Must have
                  </Link>
                   </li>
                   <li
                  className='text-light capitalize text-black pb-2 hover:text-red-700'>
                  <Link className='text-light capitalize text-black pb-2 hover:text-red-700' to='/seasonalwears'>
                    Seasonal wears
                  </Link>
                   </li>
              </ul>
            </div>

          </div>

          <div className=''>

            <div className="p-2">

              <h2 className="font-bold "> CORPORATE INFO </h2>

              <ul className='pt-5'>
                <li
                  className='text-light capitalize text-black pb-2 hover:text-red-700'>
                  <Link className='text-light capitalize text-black pb-2 hover:text-red-700' to='/privacy-and-policy'>
                    About Deltra Commerce
                  </Link> </li>
                <li
                  className='text-light capitalize text-black pb-2 hover:text-red-700'>
                  <Link className='text-light capitalize text-black pb-2 hover:text-red-700' to='/privacy-and-policy'>
                    Privacy
                  </Link>
                </li>
                <li
                  className='text-light capitalize text-black pb-2 hover:text-red-700'>
                  <Link className='text-light capitalize text-black pb-2 hover:text-red-700' to='/FAQs'>
                    Shipping policies
                  </Link>
                </li>
                <li
                  className='text-light capitalize text-black pb-2 hover:text-red-700'>
                  <Link className='text-light capitalize text-black pb-2 hover:text-red-700' to='/privacy-and-policy'>
                    Terms and conditions
                  </Link>
                </li>
              </ul>
            </div>

          </div>

          <div className=''>

            <div className="p-2">

              <h2 className="font-bold "> HELP </h2>

              <ul className='pt-5'>
                <li
                  className='text-light capitalize text-black pb-2 hover:text-red-700'>
                  <Link className='text-light capitalize text-black pb-2 hover:text-red-700' to='/FAQs'>
                    Customer’s service
                  </Link>
                </li>
                <li
                  className='text-light capitalize text-black pb-2 hover:text-red-700'>
                  <Link className='text-light capitalize text-black pb-2 hover:text-red-700' to='/contact'>
                    Contact
                  </Link>
                </li>
                <li
                  className='text-light capitalize text-black pb-2 hover:text-red-700'>
                  <Link className='text-light capitalize text-black pb-2 hover:text-red-700' to='/FAQs'>
                    FAQ’s
                  </Link>
                </li>
                <li
                  className='text-light capitalize text-black pb-2 hover:text-red-700'>
                  <Link className='text-light capitalize text-black pb-2 hover:text-red-700' to='/privacy-and-policy'>
                    Privacy rights
                  </Link> </li>
                <li
                  className='text-light capitalize text-black pb-2 hover:text-red-700'>
                  <Link className='text-light capitalize text-black pb-2 hover:text-red-700' to='/user/profile'>
                    My account
                  </Link>
                </li>
                <li
                  className='text-light capitalize text-black pb-2 hover:text-red-700'>
                  <Link className='text-light capitalize text-black pb-2 hover:text-red-700' to='/items/trackorder'>
                    Track an order
                  </Link>
                </li>
              </ul>
            </div>

          </div>

        </div>

        <div className='w-full flex flex-warp shrink gap-32 pt-8 md:block'>

          <div className="p-2">
            <h2 className='text-lighter italic text-md'> Payment powered by : </h2><br />
            <div className='flex shrink gap-2 lg:gap-1'>
              <img src='https://www.svgrepo.com/show/508716/paypal.svg' alt='' id='card-icon' />
              <img src='https://www.svgrepo.com/show/330565/googlepay.svg' alt='' id='card-icon' />
              <img src='https://www.svgrepo.com/show/362035/visa-3.svg' alt='' id='card-icon' />
              <img src='https://www.svgrepo.com/show/508701/mastercard-full.svg' alt='' id='card-icon' />
            </div>

          </div>

          <div className='p-2'>
            <h2 className='font-bold text-black pb-2 '> Enjoy 15% off your first order </h2>
            <span className="text-light " > Claim your exclusive discount code when you subscribe to our emails.
              Terms and conditions apply </span>

            <form className='flex flex-wrap gap-2 mt-2'>
              <input type="email" placeholder="your@address.com" className="p-2 border-2 border-gray-300 w-3/5" />
              <div className='bg-transparent border-2 border-black px-4 py-2 text-center text-black ' >Submit</div>
            </form>

          </div>



        </div>

        <div className='p-2 pb-12 flex shrink gap-2' >
          <img src='https://www.svgrepo.com/show/506477/facebook.svg' alt='/' id='social-icon' />
          <img src='https://www.svgrepo.com/show/503575/social-twitter.svg' alt='/' id='social-icon' />
          <img src='https://www.svgrepo.com/show/506668/instagram.svg' alt='/' id='social-icon' />
          <img src='https://www.svgrepo.com/show/500461/whatsapp.svg' alt='/' id='social-icon' />
          <img src='https://www.svgrepo.com/show/350579/messanger.svg' alt='/' id='social-icon' />
        </div>

        <p className="capitalize text-light text-center ">The content of this site is copyright-protected and is the property of Deltra Commerce.</p>

      </footer>
    </>
  )
}

export default Footer;