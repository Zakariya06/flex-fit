import React from "react";
import sign_in from "@/public/assets/Sign_Up_Basic_Details_img.png";
import inspire_logo from "@/public/assets/Sign_Up_Basic _Details_inspice_logo.png";
import FlexFit_logo_line from "@/public/assets/FlexFit_logo_line.png";
import logo from "@/public/assets/brand_logo.png";
import Button from "../../components/Button";
import Image from "next/image";
import Link from "next/link";


function SignUpBasic() {
  return (
    <div className="SignUpPage">
      <div className="row">
        <div className="col-lg-4">
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
        <div className="col-xxl-7 col-xl-6 ms-auto">
          <div className="signUpMainContent">
            <div className="signHeader">
              <Link href={"/"} className="d-xl-none">
                <Image src={logo} alt="brand logo" className="brandLogo " />
              </Link>
              <p className="mainText">
                have an account?{" "}
                <Link href="/Sign_In" className="mainLink">
                  Sign in!
                </Link>
              </p>
            </div>
            <div className="col-xx-6 col-lg-8 mx-auto">
              <div className="signBody">
                <h1 className="lgHeading">
                  Get Start With Flex<span>Fit</span>{" "}
                  <sup>
                    {" "}
                    <Image
                      src={FlexFit_logo_line}
                      alt="FlexFit_logo_line"
                      className="FlexFitlogoline"
                    />
                  </sup>{" "}
                </h1>
                <p className="mainText">Getting started is easy</p>

                <div className="signBtnWrrper">
                  <p className="mainText">I would like to</p>

                  <Link href={"/Sign_Up_Basic/sign_up_client"}>
                    <Button value="sign up as a therapist" className="active" />
                  </Link>

                  <Link href={"/Sign_Up_Basic/sign_up_client"}>
                    <Button value="sign up as a client " />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpBasic;
