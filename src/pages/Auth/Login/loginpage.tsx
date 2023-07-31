import React, { useState } from "react";
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import AuthenticationService from "../authService/auth.service";
import Service from '../../Services/products.service' ;
import Nav from "../../../components/nav/navbar";
import Footer from "../../../components/footer/footer";
import '../Login/loginpage.css' ;


type Props = {}

const Login : React.FC<Props> = () => {

  let navigate: NavigateFunction = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");


  const initialValues: {
    username: string;
    password: string;
  } = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("This field is required!"),
    password: Yup.string().required("This field is required!"),
  });

  const handleLogin = (formValue: { username: string; password: string }) => {
    
    const { username, password } = formValue;

    setMessage("");
    setLoading(true);

    AuthenticationService.Login(username , password).then(
      () => {
        navigate("/user/profile");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setLoading(false);
        setMessage(resMessage);
      }
    );
  };

  return (
    <>
    <Nav />
    <div className=" mx-auto my-auto w-4/5 p-10 md:p-2 md:w-full  ">
      <div className="mx-auto my-auto w-4/5 md:w-full mt-24 ">
        <h1 className='font-bold text-black text-4xl text-center m-10' > Sign in </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          <Form>
            <div className="form-group pt-10 pb-10">
              <label htmlFor="username"  className='text-lg pb-2'>Username <span className='text-red-800 font-bold'> * </span> </label>
                  <Field name="username" type="text" className="bg-white text-black text-2xl rounded border-2 w-full p-2 " />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-left text-red-600"
                  />
            </div>

            <div className="form-group pt-10 pb-10">
              <label htmlFor="password"  className='text-lg pb-2' >Password <span className='text-red-800 font-bold'> * </span></label>
              <Field name="password" type="password" className="bg-white text-black text-2xl rounded border-2 w-full p-2 " />
              <ErrorMessage
                name="password"
                component="div"
                className="text-left text-red-600"
              />
            </div>
               <div className='text-lighter float-right text-base text-black hover:text-red-600 '> Forgot password ? </div><br /><br />

            <div className="p-0 block ">
              <button type="submit" className="bg-black text-white text-lg text-center p-3 rounded" disabled={loading}>
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div><br />

            <div className="border-2 border-gray-900 text-black text-center p-3 ">
            <Link to={'/newcustomer/signup'} className='text-black w-full block no-underline text-center text-lg' >            
            <p >Become a member </p> 
            </Link> 
            </div>

            {message && (
              <div className="form-group">
                <div className="text-left text-red-600" role="alert">
                  {message}
                </div>
              </div>
            )}
          </Form>
        </Formik>
  </div><br />


    </div>
    

    <Footer />
 </>
  );
};

export default Login;
