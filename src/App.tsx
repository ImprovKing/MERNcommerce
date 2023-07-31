import './App.css'
import React, { useEffect, useState } from 'react'
import Card from './components/card'
import Nav from './components/nav/navbar'
import Footer from './components/footer/footer'
import CartPage from './components/Cart/cart'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import DealCards from './components/DealCards/dealCard'
import { Link } from 'react-router-dom'
import ScrollToTop from './components/Uppernav/ScrollTop'
import AOS from "aos";
import { StoreData , ItemDetails as Item, CartItemDetails, } from './data/store-data';
import "aos/dist/aos.css";

interface Props { }

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const cartFromLocalStorage: any = JSON.parse(localStorage.getItem('Bag' || '[]') as '[]')

const App: React.FC<Props> = () => {

  let loveProds = StoreData.getMenLoveProducts();
  let loveMenProds = StoreData.getWomenLoveProducts();


  const [bag, setBag] = useState(cartFromLocalStorage);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    localStorage.setItem('bag', JSON.stringify(bag));
  }, [bag]);

  return (
    <div className='home'>
    <CartPage bag={bag} setBag={setBag} />
      <Nav />
      <ScrollToTop />
      <div className='headshotMobile'>
        <Carousel
          customTransition="all 1.5"
          autoPlay={true}
          infinite={true}
          transitionDuration={1500}
          showDots={false}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          autoPlaySpeed={3000}
          responsive={responsive}
          keyBoardControl={true}
          partialVisible={true}
          focusOnSelect={true}
        >
          <div id='headshotImg-cont'>
            <img src='https://images.pexels.com/photos/2005355/pexels-photo-2005355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />

          </div>
          <div id='headshotImg-cont'>
            <img src='https://images.pexels.com/photos/4124201/pexels-photo-4124201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
          </div>
          <div id='headshotImg-cont'>
            <img src='https://images.pexels.com/photos/15787380/pexels-photo-15787380/free-photo-of-young-fashionable-woman-sitting-on-steps-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
          </div>
          <div id='headshotImg-cont'>
            <img src='https://i.pinimg.com/originals/4a/ce/05/4ace050e3a715a1d328fd4cb2a8a67dd.jpg' alt='' />
          </div>
          <div id='headshotImg-cont'>
            <img src='https://th.bing.com/th/id/R.ff98f228cc90ee79fc565ceb1dc0c8d2?rik=8AND4z4Khvb%2f%2bQ&pid=ImgRaw&r=0' alt='' />
          </div>
          <div id='headshotImg-cont'>
            <img src='https://images.flannels.com/images/imgzoom/23/23413140_xxl_a4.jpg' alt='' />
          </div>
        </Carousel>
      </div>

      <div className='headshotDesktop'>
          <div id='headshotImg-cont'   data-aos="zoom-in"
                data-aos-duration='400'>
            <img src='https://images2.alphacoders.com/608/thumbbig-608831.webp' alt='' />

          </div>
      </div><br /><br /><br />


      <section className='sec p-0 mt-24'>

        <h3 className="font-lighter text-2xl mt-12 pl-8 sm:pl-2" > Category </h3><br /><br />

        <div className='' >

          <div className='grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 '>

            <div id='outerCard' 
                data-aos="zoom-in"
                data-aos-duration='400'>
                  <Link to={'/accessories'} >
              <div className="text-center mx-auto my-auto block" id='cat-img'>
                <img src='https://images.pexels.com/photos/6862129/pexels-photo-6862129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' />
              </div>
              </Link >
              <p className='capitalize text-lighter'>Accessories</p>
            </div>

            <div id='outerCard' 
                data-aos="zoom-in"
                data-aos-duration='400'>
                  <Link to={'Kids'} >
              <div className="text-center mx-auto my-auto block" id='cat-img'>
                <img src='https://images.pexels.com/photos/2048716/pexels-photo-2048716.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/' />
              </div>
              </Link >
              <p className='capitalize text-lighter'>Kids</p>
            </div>

            <div id='outerCard' 
                data-aos="zoom-in"
                data-aos-duration='400'>
                  <Link to={'/women'} >
              <div className="text-center mx-auto my-auto block" id='cat-img'>
                <img src='https://media.istockphoto.com/id/1141294352/photo/three-women-with-different-skin-color-wearing-camisoles.jpg?b=1&s=612x612&w=0&k=20&c=FxhLwOKwmszUCMvfdW7CI4e6elqvVpPSmNq9q8j_ZRo=' alt='/' />
              </div>
              </Link >
              <p className='capitalize text-lighter'>Women</p>
            </div>

            <div id='outerCard' 
                data-aos="zoom-in"
                data-aos-duration='400'>
                  <Link to={'/men'} >
              <div className="text-center mx-auto my-auto block" id='cat-img'>
                <img src='https://images.pexels.com/photos/3170635/pexels-photo-3170635.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/' />
              </div>
              </Link >
              <p className='capitalize text-lighter'>Men</p>
            </div>

            <div id='outerCard' 
                data-aos="zoom-in"
                data-aos-duration='400'>
                  <Link to={'/newarrival'} >
              <div className="text-center mx-auto my-auto block" id='cat-img'>
                <img src='https://images.pexels.com/photos/4210863/pexels-photo-4210863.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/' />
              </div>
              </Link >
              <p className='capitalize text-lighter'>New arrival</p>
            </div>

            <div id='outerCard' 
                data-aos="zoom-in"
                data-aos-duration='400'>
                  <Link to={'/popular'} >
              <div className="text-center mx-auto my-auto block" id='cat-img'>
                <img src='https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/' />
              </div>
              </Link >
              <p className='capitalize text-lighter'>Popular</p>
            </div>

          </div>

        </div>

      </section>

      <section className='w-full p-1'>

        <h3 className="font-lighter text-2xl mt-12 pl-8 sm:pl-2"  >Super Deals</h3><br /><br />

        <div className='grid grid-cols-2 gap-2 lg:gap-0 ip:grid-cols-2 ip:pl-2 sm:grid-cols-1 sm:pl-5 mx-auto my-auto w-4/5 md:w-full'>

        <div id='cardCont' className=''   data-aos="zoom-in"
          data-aos-duration='400' > 
        <div className='text-red-600 absolute text-2xl pt-3  pl-3' > -30% </div>
        <img src='https://img.staticdj.com/52a8a04f9eb7cba44136da03eda3e828.jpeg' alt='' />
    <div className='  -mt-24 w-auto p-3 bg-blend-screen backdrop-blur-xl backdrop-opacity-60'>
        <h3 className='text-lighter text-black text-2xl '>Denim curvy jeans</h3>
        <h3 className='text-right text-black font-bold text-2xl'>$ 30.65 </h3>
     </div>
    </div>
    <div id='cardCont' className=''   data-aos="zoom-in"
          data-aos-duration='400' > 
        <div className='text-red-600 absolute text-2xl pt-3  pl-3' > -30% </div>
        <img src='https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
    <div className='  -mt-24 w-auto p-3 bg-blend-screen backdrop-blur-xl backdrop-opacity-60'>
        <h3 className='text-lighter text-black text-2xl '>Denim curvy jeans</h3>
        <h3 className='text-right text-black font-bold text-2xl'>$ 30.65 </h3>
     </div>
    </div>
    <div id='cardCont' className=''   data-aos="zoom-in"
          data-aos-duration='400' > 
        <div className='text-red-600 absolute text-2xl pt-3  pl-3' > -30% </div>
        <img src='https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
    <div className='  -mt-24 w-auto p-3 bg-blend-screen backdrop-blur-xl backdrop-opacity-60'>
        <h3 className='text-lighter text-black text-2xl '>Denim curvy jeans</h3>
        <h3 className='text-right text-black font-bold text-2xl'>$ 30.65 </h3>
     </div>
    </div>
    <div id='cardCont' className=''   data-aos="zoom-in"
          data-aos-duration='400' > 
        <div className='text-red-600 absolute text-2xl pt-3  pl-3' > -30% </div>
        <img src='https://images.pexels.com/photos/2085739/pexels-photo-2085739.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
    <div className='  -mt-24 w-auto p-3 bg-blend-screen backdrop-blur-xl backdrop-opacity-60'>
        <h3 className='text-lighter text-black text-2xl '>Denim curvy jeans</h3>
        <h3 className='text-right text-black font-bold text-2xl'>$ 30.65 </h3>
     </div>
    </div>

        </div><br />

        <button className='moreCardBtn px-2 py-4'> 
        <Link to={'/superdeals'}>
        Show more </Link> </button>
      </section>

      <section className='w-full mt-10  bigcardSect md:mt-0'>

        <div className='flex shrink gap-6 pr-5 pl-5  w-full md:gap-0 md:h-auto seasonBox xs:p-1'>

          <div className='bigCard md:mb-5' data-aos-duration='400' data-aos="zoom-in">
            <div className='bigCardImg'>
              <img src='https://i.pinimg.com/originals/34/aa/c2/34aac255eaec1b3f903593ec3b03c5ac.jpg' alt='' />
            </div>
            <div className='pt-3 lg:text-base pb-3 md:p-2'>
              <h2 className='font-bold text-2xl '>Seasonal switch-up</h2>
              <h2 className='text-lighter pb-3 text-xl'>Deliver hits of happiness to your wardrobe with versatile
                additions and forever favorites .</h2>
              <a className='no-underline text-lighter text-xl no-underline'><Link to='/seasonal'>Shop seasons &rarr;</Link> </a>
            </div>
          </div>

          <div className='bigCard md:mb-5' data-aos-duration='400' data-aos="zoom-in">
            <div className='bigCardImg'>
              <img src='https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d715c688-9590-45b6-b7fe-9dac82ee6bc0/air-force-1-07-womens-shoes-b19lqD.png' alt='' />
            </div>
            <div className='pt-3 lg:text-base pb-3 md:p-2'>
              <h2 className='font-bold text-2xl  '>Must have’s</h2>
              <h2 className='text-lighter pb-3 text-xl'>Deliver hits of happiness to your wardrobe with versatile
                additions and forever favorites and the must haves.</h2>
              <span className='no-underline text-lighter text-xl'><Link to='must-haves'> Shop Must have’s  &rarr; </Link></span>
            </div>
          </div>

        </div>

      </section>

      <section className='w-full h-full pt-5 pb-5 iceBg'>

        <div className='flex shrink gap-6 pr-5 pl-5 bm:flex-0 bm:block bm:p-0 bm:gap-0'>

          <div className="iceImg"  data-aos-duration='400' data-aos="zoom-in">
            <img src='https://i.pinimg.com/originals/4a/ce/05/4ace050e3a715a1d328fd4cb2a8a67dd.jpg' alt='' />
          </div>

          <div className='ice p-2'>
            <h3  data-aos-duration='400' data-aos="zoom-in"> Jewelries </h3>
            <div className='text-lighter pb-3 text-xl lg:text-base'>Accessories , jewelries , add-ons and so much more
              to add to your collections and find your ride and joy.
            </div>
            <span className='no-underline text-lighter text-xl lg:text-base'><Link to='/jewelries' > Shop jewelries  &rarr;</Link> </span>
          </div>
        </div>
      </section>

      <section id='parallax'>


        </section>

      <section className='w-full h-full pt-5 '>

        <h3 className='text-center text-3xl '> More to Love </h3>

        <div className='pt-5'>
          <input type='radio' name='group' id='menBoxID' defaultChecked={true} />
          <input type='radio' name='group' id='womenBoxID' />

          <div className='w-full pr-1 pl-1 pb-10 '>
            <label htmlFor='menBoxID'  className='float-left text-lighter hover:text-red-800 text-2xl lg:text-base'id='menBoxBUN' > Men </label>
            <label htmlFor='womenBoxID'  className='float-right text-lighter hover:text-red-800 text-2xl lg:text-base'id='womenBoxBUN' > Women </label>
          </div>

          <div className='mt-10 pr-1 pl-5 grid grid-cols-4 gap-4 md:pl-2 md:grid md:shrink-0 md:grid-cols-2 md:pl-0 md:p-2 md:pr-0 md:gap-2 xs:grid-cols-1 sm:gap-1 xs:pl-2 sm:pl-2' id='menBox'>

          {loveMenProds.map((item : any) => (
          <Link to={`/product-details/${item.id}`} key={item.id} >
                        <div className='loveCard  pb-10'  data-aos-duration='400' data-aos="zoom-in" > 
              <div className='loveImg'>
                <img src={item.image} alt='' />
              </div>
              Male

              <div className='p-2 pb-5'>
                <h3 className='text-lighter text-2xl pb-2 lg:text-base '>{item.name}</h3>
                <h3 className='font-bold text-xl pb-2 lg:text-base '> $ {item.price}</h3>
                <p className='pt-3 lg:text-base md:p-2'>{item.category} </p>
              </div>
            </div>
            </Link>
             ))}

          </div>



          <div className='mt-10 pr-1 pl-5 grid grid-cols-4 gap-4 md:pl-2 md:grid md:shrink-0 md:grid-cols-2 md:pl-0 md:p-2 md:pr-0 md:gap-2 xs:grid-cols-1 sm:gap-1 xs:pl-2 sm:pl-2' id='womenBox'>

          {loveProds.map((item : any) => (
          <Link to={`/product-details/${item.id}`} key={item.id} >
            <div className='loveCard  pb-10'  data-aos-duration='400' data-aos="zoom-in" > 
              <div className='loveImg'>
                <img src={item.image} alt='' />
              </div>
              Female

              <div className='p-2 pb-5'>
                <h3 className='text-lighter text-2xl pb-2 lg:text-base '>{item.name}</h3>
                <h3 className='font-bold text-xl pb-2 lg:text-base '> $ {item.price}</h3>
                <p className='pt-3 lg:text-base md:p-2'>{item.category} </p>
              </div>
            </div>
            </Link>
            ))}

          </div>
        </div>

        <p className='text-gray-400 text-center pt-5'> Show more ...</p>

      </section>
      {/* all the other elements */}
      <Footer />
    </div>
  );
}

export default App;
