import React from "react";
import sign_in from "@/public/assets/sign_in.png";
import inspire_logo from "@/public/assets/Sign_Up_Basic _Details_inspice_logo.png";
import FlexFit_logo_line from "@/public/assets/FlexFit_logo_line.png";
import logo from "@/public/assets/brand_logo.png";
import google from "@/public/assets/google_icon.png";
import facebook from "@/public/assets/facebook_icon.png";
import Button from "../../components/Button";
import Image from "next/image";
import Link from "next/link";
import Input from "@/components/Input";
import ToggleForm from "@/components/ToggleForm";

function SignIn() {
  return (
    <div className="SignUpPage sinInPage">
      <div className="row">
        <div className="SignUpPageImageContainer">
          <Image
            src={sign_in}
            alt="Sign_Up_Basic_Details"
            className="SignUpImage"
          />
          <Image
            src={inspire_logo}
            alt="inspire_logo"
            className="inspirelogo"
          />
        </div>
        <div className="col-xxl-7 col-xl-6  ">
          <div className="signUpMainContent">
            <div className="signHeader">
              <Link href={"/"}>
                <Image src={logo} alt="brand logo" className="brandLogo" />
              </Link>

              <p className="mainText">
                Don’t have an account? &nbsp;
                <Link href={"/Sign_Up_Basic"} className="mainLink">
                  Sign up!
                </Link>
              </p>
            </div>
            <div className="col-xx-6 col-lg-8   mx-auto">
              <div className="signBody">
                <h1 className="lgHeading">
                  Welcome Back  
                  <Image
                    src={FlexFit_logo_line}
                    alt="FlexFit_logo_line"
                    className="FlexFitlogoline"
                  />
                </h1>
                <p className="mainText">Login into your account</p>

                <div className="socialAuthBtns">
                  <Button image={google} value="Google" className="googleBtn" />
                  <Button
                    image={facebook}
                    value="Facebook"
                    className="facebookBtn"
                  />
                </div>

                <div className="orlineContainer">
                    <div className="orline"></div>
                    <p className="mainText">Or continue with</p>
                    <div className="orline"></div>
                </div>


                <form action="" className="singInForm">
                    <Input label="Email Address *" type="email" /> 
                    <Input label="Password *" type="password" />   
                    <ToggleForm />

                    <Button value='Log In' className="active" type="submit" />
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
