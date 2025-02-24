import React from "react";
import sign_in from "@/public/assets/Sign_Up_Basic_Details_img.png";
import inspire_logo from "@/public/assets/Sign_Up_Basic _Details_inspice_logo.png";
import FlexFit_logo_line from "@/public/assets/FlexFit_logo_line.png";
import logo from "@/public/assets/brand_logo.png";
import google from "@/public/assets/google_icon.png";
import facebook from "@/public/assets/facebook_icon.png";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import Input from "@/components/Input";
import ToggleForm from "@/components/ToggleForm";
import OptionInput from "@/components/OptionsInput";

function SignUp() { 
  return (
    <div className="SignUpPage  SignUp">
      <div className="row">
        <div className="co-lg-5">
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
        </div>
        <div className="col-xxl-7 col-xl-6 ms-auto ">
          <div className="signUpMainContent">
            <div className="signHeader">
              <Link href={"/"} className="d-xl-none">
                <Image src={logo} alt="brand logo" className="brandLogo  " />
              </Link>

              <p className="mainText">
              have an account? &nbsp;
                <Link href={"/Sign_In"} className="mainLink">
                Sign in!
                </Link>
              </p>
            </div>
            <div className="col-xx-6 col-lg-8 pe-0  mx-auto">
              <div className="signBody">
                <h1 className="lgHeading">
                Get Start With Flex<span>Fit</span>
                  <Image
                    src={FlexFit_logo_line}
                    alt="FlexFit_logo_line"
                    className="FlexFitlogoline"
                  />
                </h1>
                <p className="mainText">Getting started is easy</p>

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
                    <div className="row">
                        <div className="col-sm-6">
                        <Input label="First name *" type="text" />
                        </div>
                        <div className="col-sm-6">
                        <Input label="Last name *" type="text" />
                        </div>
                        <div className="col-12"> 
                          <Input label="Email Address *" type="email" />
                        </div>
                        <div className="col-sm-6">
                            <OptionInput options={["male", "female"]} label="Gender" />
                        </div>
                        <div className="col-sm-6">
                        <Input label="Date of Birth" type="date" className="optionInputHolder" />
                        </div>
                        <div className="col-sm-6">
                            <OptionInput options={["United states","India", "Pakstan", "canda"]} label="Country" />
                        </div>
                        <div className="col-sm-6">
                        <Input label="Phone" type="number" />
                        </div>
                    </div> 

                    <Link href={"/Sign_Up_Basic/sign_up_professional"} > <Button value="Next" className="active"   /></Link>
                 
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
