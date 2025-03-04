import PageSlider from "@/components/mobilepages/PageSlider";
import React from "react";
import FlexFit_logo_line from "@/public/assets/FlexFit_logo_line.png";
import Image from "next/image";
import Input from "@/components/Input";
import ToggleForm from "@/components/ToggleForm";
import Button from "@/components/Button";
import google from "@/public/assets/google_icon.png";
import facebook from "@/public/assets/facebook_icon.png";
import back_arrow from "@/public/assets/back_arrow.svg";
import Link from "next/link";
import InputPassword from "@/components/InputPassword";

function SetPassword() {
  return (
    <div className="SignInMobilePage">
      <div className="col-sm-6 col-lg-4 mx-auto">
        <div className="SignInMobilePageWrrper">
          <PageSlider />

          <div className="singInMobileContent p-4">
            <form className="singInForm">
              <h1 className="lgHeading">
                Get Start With Flex<span>Fit</span>
                <Image
                  src={FlexFit_logo_line}
                  alt="FlexFit_logo_line"
                  className="FlexFitlogoline"
                />
              </h1>

              <Link href={"/mobile_pages/signin"} className="backLink">
                <Image src={back_arrow} className="backArrow" alt="back" />{" "}
                Professional Details
              </Link>

              <InputPassword label="Password" />
              <InputPassword label="Confirm Password" />

              <Button type="submit" value="Sign Up" className="active" />

              <p className="mainText">
                have an account? &nbsp;
                <Link href={"/Sign_Up_Basic"} className="mainLink">
                  Sign in!
                </Link>
              </p>

              <div className="socialAuthBtns">
                <Button
                  image={google}
                  value="Google"
                  type="button"
                  className="facebookBtn"
                />
                <Button
                  image={facebook}
                  value="Facebook"
                  className="facebookBtn  "
                  type="button"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetPassword;
