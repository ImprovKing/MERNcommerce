import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import IUser from "../types/user.type";
import AuthenticationService from "../authService/auth.service";
import { Link } from "react-router-dom";
import Nav from "../../../components/nav/navbar";
import Footer from "../../../components/footer/footer";
import '../../Auth/Login/loginpage.css' ;

const Register: React.FC = () => {
  const [successful, setSuccessful] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const initialValues: IUser = {
    fullname: "",
    email: "",
    password: "",
    homeaddress: "",
    phonenumber: "",
    token: undefined
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .test(
        "len",
        "The username must be between 3 and 20 characters.",
        (val: any) =>
          val &&
          val.toString().length >= 3 &&
          val.toString().length <= 20
      )
      .required("This field is required!"),
    email: Yup.string()
      .email("This is not a valid email.")
      .required("This field is required!"),
    password: Yup.string()
      .test(
        "len",
        "The password must be between 6 and 40 characters.",
        (val: any) =>
          val &&
          val.toString().length >= 6 &&
          val.toString().length <= 40
      )
      .required("This field is required!"),
  });

  const handleRegister = (formValue: IUser) => {
    const { fullname, email, password  } = formValue;

    AuthenticationService.Register( fullname , email, password  ).then(
      (response) => {
        setMessage(response.data.message);
        setSuccessful(true);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage(resMessage);
        setSuccessful(false);
      }
    );
  };

  return (
    <>
    <Nav />
    <div className=" mx-auto my-auto w-4/5 p-10 md:p-2 md:w-full ">
      <div className="mx-auto my-auto w-4/5 md:w-full mt-24 ">
        <h1 className='font-bold text-black text-4xl text-center m-10' > Create account </h1>
      
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleRegister}
        >
          <Form>
            {!successful && (
              <div>
                <div className="form-group pt-10 pb-10">
              <label htmlFor="username"  className='text-lg pb-2'>Fullname <span className='text-red-800 font-bold'> * </span> </label>
                  <Field name="username" type="text" className="bg-white text-black text-2xl rounded border-2 w-full p-2" />
                  <ErrorMessage
                    name="fullname"
                    component="div"
                    className="text-left text-red-600 "
                  />
                </div>

                <div className="form-group pt-10 pb-10">
              <label htmlFor="email"  className='text-lg pb-2'>Email <span className='text-red-800 font-bold'> * </span> </label>
                  <Field name="email" type="email" className="bg-white text-black text-2xl rounded border-2 w-full p-2" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-left text-red-600 "
                  />
                </div>

                <div className="form-group pt-10 pb-10">
              <label htmlFor="password"  className='text-lg pb-2'>Password <span className='text-red-800 font-bold'> * </span> </label>
                  <Field
                    name="password"
                    type="password"
                    className="bg-white text-black text-2xl rounded border-2 w-full p-2"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-left text-red-600 "
                  />
                </div><br />

                <div className="p-0 block ">
                  <button type="submit" className="bg-black text-white text-center p-3 rounded ">Sign Up</button>
                </div>
              </div>
            )}

            {message && (
              <div className="form-group pt-10 pb-10">
                <div
                  className={
                    successful ? "alert alert-success" : "text-left text-red-600 "
                  }
                  role="alert"
                >
                  {message}
                </div>
              </div>
            )}
          </Form>
        </Formik>
      </div><br />

      <Link to={'/auth/login'} className='text-black w-full block no-underline text-center text-lg' >            
        <p >Already a member ,  Sign In Here </p> 
         </Link> <br />


    </div>
    <Footer />
    </>
  );
};

export default Register;