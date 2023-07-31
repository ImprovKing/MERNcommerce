import React, { Component } from 'react'
import Nav from '../../components/nav/navbar';
import Footer from '../../components/footer/footer';
import { Navigate } from 'react-router-dom';
import '../user/profile.css'
import AuthenticationService from '../Auth/authService/auth.service';


export default class Profile extends Component<any , any >  {

    constructor (props: any ){
        super(props)  ;

        this.state = {
            redirect: null,
            userReady: false,
            currentUser: undefined 
          };

    }

    // userData = AuthenticationService.getUserData();

    componentDidMount() {        

        const currentUser = AuthenticationService.getCurrentUser();

        
        if (!currentUser) this.setState({ redirect: "/auth/login" });
        this.setState({ currentUser: currentUser, userReady: true , })
      }

      logOut() {
        AuthenticationService.Logout();
        window.location.reload() ;
        this.setState({
          currentUser: undefined,
        });
      }
      
  render(): JSX.Element {

    if (this.state.redirect) {
        return <Navigate to={this.state.redirect} />
      }
  
    //   const { currentUser } = this.state;
      const userData : any = AuthenticationService.getUserData();
      
  
    return (
        <>
        <Nav /><br /><br />
        <div className='w-full bg-gray-200 '><br /><br />
            <h3 className='font-medium text-3xl text-center'>  My account </h3>
            
            <div className=' p-5 border-2 rounded-xl bg-white shadow-xl'> 
                    <img src='https://www.jing.fm/clipimg/full/115-1152777_profile-png-man-user-icon.png' alt='' id='imgUser' /> <br />
                       <p className='font-medium text-2xl'> Amanda Colber </p>
            </div>

          <div className='border-2 w-4/5 mx-auto my-auto gap-2 mt-5 flex shrink md:block md:w-full'>

                <div className='w-2/5 border-2  md:flex md:w-full md:shrink md:flex-wrap' id='profileBox'>
                <div className=' p-2 border-2 rounded-xl bg-white shadow-xl  mt-10 mb-10 md:p-0 md:m-2'> 
                    <p className='font-medium text-xl text-center p-5 hover:text-red-700 md:text-sm md:p-5' > Account overview </p>
                </div>
                <div className=' p-2 border-2 rounded-xl bg-white shadow-xl  mt-10 mb-10 md:p-0 md:m-2'> 
                    <p className='font-medium text-xl text-center p-5 hover:text-red-700 md:text-sm md:p-5' > My orders </p>
                </div>
                <div className=' p-2 border-2 rounded-xl bg-white shadow-xl  mt-10 mb-10 md:p-0 md:m-2'> 
                    <p className='font-medium text-xl text-center p-5 hover:text-red-700 md:text-sm md:p-5' > My details </p>
                </div>
                <div className=' p-2 border-2 rounded-xl bg-white shadow-xl  mt-10 mb-10 md:p-0 md:m-2' onClick={this.logOut}  > 
                    <p className='font-medium text-xl text-center p-5 hover:text-red-700 md:text-sm md:p-5' > &larr; Sign out </p>
                </div>
                </div>

                <div className='w-4/5 h-auto p-5 border-2  bg-white shadow-xl md:w-full md:p-1' id='profileBox'>
                    
                    <div className='border-2'>
                        <ul className='p-5'>
                            <li className='font-medium pb-3 pt-3 text-xl text-gray-600 text-base'> <span> Email : </span> <span className='text-truncate' > {userData.name}  </span></li>
                            <li className='font-medium pb-3 pt-3 text-xl text-gray-600 text-base'> <span> Phonenumber : </span> <span > 08072629638  </span></li>
                            <li className='font-medium pb-3 pt-3 text-xl text-gray-600 text-base'> <span> Address  : </span> <span > 18 Adepitan Street Ogudu Lagos  </span></li>
                            <li className='font-medium pb-3 pt-3 text-xl text-gray-600 text-base'> <span> Country  : </span> <span > Nigeria  </span></li>
                            <li className='font-medium pb-3 pt-3 text-xl text-gray-600 text-base'> <span> Zipcode  : </span> <span > 100242  </span></li>
                        </ul>
                    </div>

                    <div className='border-2'>
                        <ul className='p-5'>
                            <li id="orderCard" className='flex shrink gap-2'>
                                <img src='' alt='' id='imgOrder' />
                                <div className='p-2 rounded-xl border-2 text-left'>
                                <h2 className='font-bold text-lg md:text-base'> <span> Order number : 0198638646783 </span> </h2>
                                    <h2 className='text-lighter text-xl md:text-base'> Chealsea boots </h2>
                                    <p className='text-lg font-medium text-gray-600 md:text-base' > Placed on :  03-12-2023 </p>
                                    <p className='text-lg font-medium text-gray-600 md:text-base' > QTY : 1 </p>
                                    <p className='text-lg font-medium text-gray-600 md:text-base' > Total : $ 15.65 </p>
                               </div>       
                            </li>
                        </ul>
                    </div>

                    <div className='border-2'>
                        <form className='p-5'>

                            <div className='pb-2 pt-2'>
                                <label className='text-lighter text-xl md:text-base'> Email <span className='text-red-800'> * </span> </label><br />
                                <input type='email' className='border-2 rounded-xl p-2 text-gray-600 w-full' /><br />
                            </div>

                                                        <div className='pb-2 pt-2'>
                                <label className='text-lighter text-xl md:text-base'> First name <span className='text-red-800'> * </span> </label><br />
                                <input type='email' className='border-2 rounded-xl p-2 text-gray-600 w-full' /><br />
                            </div>

                                                        <div className='pb-2 pt-2'>
                                <label className='text-lighter text-xl md:text-base'> Address <span className='text-red-800'> * </span> </label><br />
                                <input type='email' className='border-2 rounded-xl p-2 text-gray-600 w-full' /><br />
                            </div>

                                                        <div className='pb-2 pt-2'>
                                <label className='text-lighter text-xl md:text-base'> Phone  <span className='text-red-800'> * </span> </label><br />
                                <input type='email' className='border-2 rounded-xl p-2 text-gray-600 w-full' /><br />
                            </div>

                            <button className='bg-black text-white rounded-xl shadow-xl px-2 py-2 md:text-base ' type='submit' > SAVE CHANGES </button>

                        </form>
                    </div>
                        
                </div> 
            </div> 
            
        <Footer />
       </div><br /><br />
       </>
    )
} 
}
