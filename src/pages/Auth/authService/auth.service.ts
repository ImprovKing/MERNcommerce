import axios from 'axios'

const ServerURI = "http://localhost:8000"  ;

const LoginUser = "http://localhost:8000/login"  ;

class AuthenticationService {

    //Login func
    static Login(username : any , password : any ){
        return axios.post(
            LoginUser , {
                username , 
                password 
            }
        ) .then( res => {
            if(res.data) {
                localStorage.setItem("accessToken" , JSON.stringify(res.data)) ;
            }
            console.log(res.data) ;
            return res.data ;
        }) ;
    }
    static Register(fullname: any, username: any, password : any ) {
        return axios.post(ServerURI + "/Users/register", {
            username , password , fullname
        }) ;
    }

    static getUserData( ) {
        let userData = axios.get(ServerURI + "/profile") ;
        console.log(userData) ;
        return userData ;
    }

    //google Auth
    static googleAuth(){
        return  window.open("http://localhost:5000/Users/auth/google", "_self");
    }


    //google Auth callback
    static googleAuthCallback(){
            return axios.get(ServerURI + "/Users/auth/google/callback").then() ;
    }

    //facebook Auth
    static facebookAuth(){
        return axios.get(ServerURI + "/Users/login/facebook") ;
    }

    static facebookAuthCallback(){
        return axios.get(ServerURI + "/Users/login/facebook/callback") ;
    }
        
    static getCurrentUser() {
        return JSON.parse(localStorage.getItem('token' || '') as '' ) ;
    }

    //Logout Function
    static Logout() {
        const storage = localStorage.removeItem('accessToken') ;
        // const backendStorage = axios.get(ServerURI + "/Users/logout") ; 
        return storage ;
    }
}


export default AuthenticationService ;
