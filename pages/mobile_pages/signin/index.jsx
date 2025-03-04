import PageSlider from "@/components/mobilepages/PageSlider";
import React from "react";
import FlexFit_logo_line from "@/public/assets/FlexFit_logo_line.png";
import Image from "next/image";
import Input from "@/components/Input";
import ToggleForm from "@/components/ToggleForm";
import Button from "@/components/Button";
import google from "@/public/assets/google_icon.png";
import facebook from "@/public/assets/facebook_icon.png";
import Link from "next/link";
import InputPassword from "@/components/InputPassword";
import { useRouter } from "next/router";

function SignInMobile() {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/mobile_pages/set_weight");
  };
  return (
    <div className="SignInMobilePage">
      <div className="col-sm-6 col-lg-4 mx-auto">
        <div className="SignInMobilePageWrrper">
          <PageSlider />

          <div className="singInMobileContent p-4">
            <form className="singInForm" onSubmit={handleSubmit}>
              <h1 className="lgHeading">
                Welcome Back
                <Image
                  src={FlexFit_logo_line}
                  alt="FlexFit_logo_line"
                  className="FlexFitlogoline"
                />
              </h1>

              <Input label="Email Address *" type="email" required={true} />
              <InputPassword
                label="Password *"
                type="password"
                required={true}
              />

              <ToggleForm Linkvalue="/mobile_pages/set_password" />

              <Button type="submit" value="Log In" className="active" />

              <p className="mainText">
                Don’t have an account? &nbsp;
                <Link
                  href={"/mobile_pages/signup_basic_details"}
                  className="mainLink"
                >
                  Sign up!
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

export default SignInMobile;
