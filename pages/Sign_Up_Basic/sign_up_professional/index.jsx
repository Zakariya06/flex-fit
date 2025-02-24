import React from "react";
import sign_in from "@/public/assets/Sign_Up_Basic_Details_img.png";
import inspire_logo from "@/public/assets/Sign_Up_Basic _Details_inspice_logo.png";
import FlexFit_logo_line from "@/public/assets/FlexFit_logo_line.png";
import logo from "@/public/assets/brand_logo.png";
import back_arrow from "@/public/assets/back_arrow.svg";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import Input from "@/components/Input";
import ToggleForm from "@/components/ToggleForm";
import OptionInput from "@/components/OptionsInput";
import { FileUpload } from "@/components/FileUpload";

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

                <div className="orlineContainer my-5 px-lg-4">
                  <div className="orline"></div>
                </div>

                <Link href={"/Sign_Up_Basic/sign_up_basic_details"} className="backLink">
                  <Image src={back_arrow} className="backArrow" alt="back" />{" "}
                  Professional Details
                </Link>

                <form action="" className="singInForm">
                  <OptionInput
                    options={[
                      "Sports Therapy",
                      "Sports Therapy",
                      "Sports Therapy",
                      "Sports Therapy",
                    ]}
                    label="Specialization"
                  />
                  <Input label="Years of Experience" type="number" />
                  <Input label="License/Certification Number" type="number" />
                  <OptionInput options={["male", "female"]} label="Gender" />
                  <FileUpload />
                  <Button value="Submit" className="active" type="submit" />
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
