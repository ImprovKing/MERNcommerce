import { Fragment, useEffect, useState } from "react";
import Nav from '../../components/nav/navbar'
import '../FAQs/faq.css'
import Footer from '../../components/footer/footer'
import CartPage from "../../components/Cart/cart";

const cartFromLocalStorage: any = JSON.parse(localStorage.getItem('cart' || '[]') as '[]')

export default function FAQs() {

  const [cart, setCart] = useState(cartFromLocalStorage);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <main>
      <Nav />
      <div className=''>
    {/* <CartPage /> */}
      </div>
        <div id='faqHeadshot'>

          <img src='' alt='' />

          <div className='headTxt'>
            <p className='text-lighter text-sm'> Customer Care</p>
            <h2 className='text-3xl font-medium '> Frequently Asked Questions </h2>
          </div>

        </div>

        <div className='w-4/5 mx-auto my-auto mt-10 md:w-full block h-auto'>
          <div className="faq-box">

            <div className="faq">

              <input type="checkbox" id="faq1" />

              <label className="faq-label text-base " htmlFor="faq1">Do I need an account to place an order?</label>

              <div className="faq-content">

                You can shop without creating an account. However, if you register with us, you’ll enjoy the following benefits:
                <br /><br />
                Track your orders and review past purchases
                Request an exchange or return directly from your account
                Add pieces you love or missed out on to your Wish List
                Save your address and card details so you can shop even quicker in future

              </div>

            </div>

            <div className="faq">

              <input type="checkbox" id="faq2" />

              <label className="faq-label" htmlFor="faq2">Where do you ship my order from?</label>

              <div className="faq-content">

                We ship all orders from our US and Italian locations. You will be notified in the order confirmation email if a part of your order might be shipped from Italy and you will receive one or more emails containing your tracking number once each package has left us.

                For items coming from Italy, no additional taxes and duties will be charged.
              </div>

            </div>

            <div className="faq">

              <input type="checkbox" id="faq3" />

              <label className="faq-label" htmlFor="faq3">When will my credit card be charged?</label>

              <div className="faq-content">

                As soon as you complete your order, authorization for the necessary payment will be requested automatically to verify the validity of the credit card and availability of funds; however, the card is not charged at this time. The actual payment occurs when the order is dispatched, at which point you will receive a notification email.
              </div>

            </div>

            <div className="faq">

              <input type="checkbox" id="faq4" />

              <label className="faq-label" htmlFor="faq4">How can I exchange or return an item?</label>

              <div className="faq-content">

                You have 28 days from the date you received your order to exchange or return item(s).
              </div>

            </div>

            <div className="faq">

              <input type="checkbox" id="faq5" />

              <label className="faq-label" htmlFor="faq5">Do you offer price adjustments on sale items?</label>

              <div className="faq-content">

                We offer a price adjustment on items purchased up to seven days prior to the start of a sale. Please be aware that the exact style and size must be available for purchase at the time your request is made before any adjustment in the price can be approved.

              </div>

            </div>

            <div className="faq">

              <input type="checkbox" id="faq6" />

              <label className="faq-label" htmlFor="faq6">Can I amend or cancel an item from my order?</label>

              <div className="faq-content">

                Depending on the status of your order, it may be possible to cancel an item or change it to a different size. Please note, we’re unable to combine or add an item to an existing order.

                If you need to make any amendments to your purchase, please call our Customer Care team as soon as possible and we’ll see what we can do.
              </div>

            </div>

            <div className="faq">

              <input type="checkbox" id="faq7" />

              <label className="faq-label" htmlFor="faq7">What do I do if I think an item that I purchased from your site is faulty?</label>

              <div className="faq-content">Simply email customercare@net-a-porter.com and we’ll look into this for you.  When you get in touch with us, please provide your order number and photographs of your item. Please be aware that items which have been damaged as a result of normal wear and tear, by accident, or your own misuse, will not be considered faulty. This does not affect your statutory rights.

              </div>

            </div>

            <div className="faq">

              <input type="checkbox" id="faq8" />

              <label className="faq-label" htmlFor="faq8">Do you offer price adjustments on sale items?</label>

              <div className="faq-content">

                We offer a price adjustment on items purchased up to seven days prior to the start of a sale. Please be aware that the exact style and size must be available for purchase at the time your request is made before any adjustment in the price can be approved.

              </div>

            </div>

            <div className="faq">

              <input type="checkbox" id="faq9" />

              <label className="faq-label" htmlFor="faq9">Your Delivery Options</label>

              <div className="faq-content">

                <b> Express</b>: 5 USD

                Enjoy Free Standard Delivery on orders over £200
                Receive your purchase within 3 business days after your order has been accepted. If your items are coming from another location, they will be delivered within 5 business days

              </div>

            </div>

            <div className="faq">

              <input type="checkbox" id="faq10" />

              <label className="faq-label" htmlFor="faq10">Our Delivery partners</label>

              <div className="faq-content">
                Our shipping partner, DHL, offers you the flexibility to make changes to your delivery while it’s on its way to you using DHL On Demand Delivery (ODD). Whether you need to schedule a delivery for another day or remove the signature requirement, ODD makes it easy for you.

                Once your order has left us and is with DHL, they will contact you via SMS and/or email to let you know when to expect the delivery. If ODD is available in your location, this message will also contain a link to the ODD site). All you need is your tracking (shipment waybill) number.

                Here’s a few options you can select to customize your delivery:

                Schedule Your Delivery

                If your estimated delivery date doesn’t suit, you have the option to select another date within 5 working days.

                Where available, you’ll also be able to select a timed window to receive your order.

                Signature Release

                If you’d prefer not to sign for your delivery, you can remove the signature requirement. Please note that if you choose to remove this,Deltra and DHL cannot be held responsible for any loss or damage that may occur once your order has been delivered.

                Leave With Neighbor

                Request for your order to be left with your neighbor by providing DHL with their house number and any further instructions. Please note that if you select this option,Deltra and DHL cannot be held responsible for any loss or damage that may occur once your order has been delivered.

                Collection from a DHL Service Point or Parcel Locker

                If you won’t be in for your delivery, you can choose to pick this up from DHL Service Point.

                DHL ODD will show you the nearest DHL Service Points, so you can select which one works best for you. They’ll then contact you to let you know when it’s ready to collect and how long you have to pick up your delivery. Please note that if the parcel is not collected within this timeframe, it’ll be sent back to the DHL depot.

                To collect your parcel from a DHL Service Point you’ll need to bring two forms of ID:

                A photographic ID (e.g. passport or driving license)
                Your email/SMS notification from DHL
                In the UK, you can also select an InPost Locker to pick up your order from. When your order is ready to collect, DHL will provide you with a key code by email and/or SMS which you’ll need to collect your parcel. They’ll also let you know how long you have to pick up your purchase.

                Vacation Hold

                Still on vacation? You can request DHL to hold your delivery for up to 30 calendar days for you.

                Where available, you’ll also be able to select a timed window to receive your delivery.
              </div>

            </div>

          </div>
        </div>

        <Footer />
      </main>
      )
}
