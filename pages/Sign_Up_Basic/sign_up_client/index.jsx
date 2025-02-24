import React, { useState } from "react";
import sign_in from "@/public/assets/Sign_Up_Basic_Details_img.png";
import inspire_logo from "@/public/assets/Sign_Up_Basic _Details_inspice_logo.png";
import FlexFit_logo_line from "@/public/assets/FlexFit_logo_line.png";
import therapist from "@/public/assets/therapist_icon.png";
import therapist_active from "@/public/assets/therapist_active.png";
import client from "@/public/assets/client_icon.png";
import client_active from "@/public/assets/client_active.png";
import Button from "@/components/Button";
import Image from "next/image";
import check_icon from "@/public/assets/check_icon.svg";
import logo from "@/public/assets/brand_logo.png";
import Link from "next/link";

function SingUpClients() {
  const [checkValue, setCheckValue] = useState("");
  const handleChange = (value) => {
    setCheckValue(value);
  };

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
                <Image src={logo} alt="brand logo" className="brandLogo  " />
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
                  <Image
                    src={FlexFit_logo_line}
                    alt="FlexFit_logo_line"
                    className="FlexFitlogoline"
                  />
                </h1>
                <p className="mainText">I would like to sign up as</p>

                <div className="signBtnWrrper col-sm-8 mx-auto">
                  <div className="clientCardWrapper">
                    <div
                      className={`clientCard ${
                        checkValue === "therapist" && "active"
                      } `}
                      onClick={(e) => handleChange("therapist")}
                    >
                      <div className="clientCheckBox">
                        {checkValue === "therapist" ? (
                          <Image
                            src={check_icon}
                            alt="therapist"
                            className="clientCardIcon"
                          />
                        ) : (
                          <div className="checkCardCircle"></div>
                        )}
                      </div>
                      <div className="clientCardImageWrapper">
                        <Image
                          src={
                            checkValue === "therapist"
                              ? therapist_active
                              : therapist
                          }
                          alt="therapist"
                          className="clientCardIcon"
                        />
                        <h4 className="mdHeading">therapist</h4>
                      </div>
                    </div>

                    <div
                      className={`clientCard ${
                        checkValue === "client" && "active"
                      }  `}
                      onClick={(e) => handleChange("client")}
                    >
                      <div className="clientCheckBox">
                        {checkValue === "client" ? (
                          <Image
                            src={check_icon}
                            alt="therapist"
                            className="clientCardIcon"
                          />
                        ) : (
                          <div className="checkCardCircle"></div>
                        )}
                      </div>
                      <div className="clientCardImageWrapper">
                        <Image
                          src={checkValue === "client" ? client_active : client}
                          alt="therapist"
                          className="clientCardIcon"
                        />
                        <h4 className="mdHeading">client</h4>
                      </div>
                    </div>
                  </div>
                  {checkValue && (
                    <Link href={"/Sign_Up_Basic/sign_up_basic_details"}>
                      <Button value="CONTINUE" className="active" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingUpClients;
