import { Link } from 'react-router-dom';
import '../nav/nav.css'
import React from 'react'
import deltraLogo from '../../delt1.svg'
import AuthenticationService from '../../pages/Auth/authService/auth.service'

interface Props{}

class Nav extends React.Component{

    constructor(props : any ) {
        super(props);
        this.logOut = this.logOut.bind(this);
    
        this.state = {
          currentUser: undefined,
        };

      }

      componentDidMount() {
        const user = AuthenticationService.getCurrentUser();
    
        if (user) {
          this.setState({
            currentUser: user,
          });
        }
      }

      logOut() {
        AuthenticationService.Logout();
        this.setState({
          currentUser: undefined,
        });
      }

    render(){
        const currentUser  = this.state;

        return(
            <>
                <nav className='navBar bg-blend-screen backdrop-blur-xl backdrop-opacity-100'>         
    
                    <input type={'checkbox'} className="openSidebarMenu" id="openSidebarMenu" />
                   
                    <label htmlFor="openSidebarMenu" id='sideIcon' className="sidebarIconToggle" >
                        <div className="spinner diagonal part-1"></div>
                        <div className="spinner horizontal"></div>
                        <div className="spinner diagonal part-2"></div>
                    </label>

                    <div className='logo' data-aos="fade-down"> <Link to={'/'} ><img src={deltraLogo} alt='' /></Link> </div>
                    
   
                    <div id="sidebarMenu" className='bg-white absolute h-full z-99' >
                        <ul className="sidebarMenuInner text-left"><br /><br /><br />
                            <li  >
                            <Link to={'/'} className='no-underline text-xl text-white hover:text-red-500 uppercase  sm:text-xl no-underline'>
                                Home
                             </Link>
                            </li>
                            <li >
                            <Link to={'/newarrival'} className='no-underline text-xl text-white hover:text-red-500 uppercase  sm:text-xl no-underline'>
                                NewArrival
                                </Link>
                            </li>
                            <li >
                            <Link to={'/jewelries'} className='no-underline text-xl text-white hover:text-red-500 uppercase  sm:text-xl no-underline'>
                            jewelries
                                </Link>
                            </li>
                            <li >
                            <Link to={'/accessories'} className='no-underline text-xl text-white hover:text-red-500 uppercase  sm:text-xl no-underline'>
                                Accessories
                                </Link>
                            </li>
                            <li >
                            <Link to={'/men'} className='no-underline text-xl text-white hover:text-red-500 uppercase  sm:text-xl no-underline'>
                                Men 
                            </Link>
                            </li>
                            <li >
                            <Link to={'/women'} className='no-underline text-xl text-white hover:text-red-500 uppercase  sm:text-xl no-underline'>
                               Women 
                            </Link>
                            </li>
                            <li >
                            <Link to={'/popular'} className='no-underline text-xl text-white hover:text-red-500 uppercase  sm:text-xl no-underline'>
                               Popular 
                            </Link>
                            </li>
                            <li >
                            <Link to={'/items/trackorder'} className='no-underline text-xl text-white hover:text-red-500 uppercase  sm:text-xl no-underline'>
                                Track Order 
                                </Link>
                            </li>
                            <li>
                                {/* This is the Auth Section */}

                                <div className="text-white">

                                    {currentUser ? (
                                        <ul className=" " >
                                            <li >
                                                <Link to={"/auth/login"} onClick={this.logOut} className="no-underline text-xl text-white hover:text-red-500 uppercase  sm:text-xl no-underline">
                                                    Sign out
                                                </Link>
                                            </li>
                                            <li >
                                                <Link to={"/user/profile"} className="no-underline text-xl text-white hover:text-red-500 uppercase  sm:text-xl no-underline">
                                                    Profile
                                                </Link>
                                            </li>
                                        </ul>
                                    ) : (
                                        <><ul className="">
                                            <li >
                                                <Link to={"/auth/login"} className="no-underline text-xl text-white hover:text-red-500 uppercase  sm:text-xl no-underline">
                                                    login
                                                </Link>
                                            </li>
                                        </ul><ul className="">
                                                <li >
                                                    <Link to={"/register"} className="no-underline text-xl text-white hover:text-red-500 uppercase  sm:text-xl no-underline">
                                                        Sign up
                                                    </Link>
                                                </li>
                                            </ul></>
                                    )}
                                </div>
                            </li>
                        </ul>
                    </div>




                </nav>
    
                
            </>
        )
    }

}

export default Nav ;