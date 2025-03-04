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
import OptionInput from "@/components/OptionsInput";
import { useRouter } from "next/router";

function SingupBasicMobile() {
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
                Get Start With Flex<span>Fit</span>
                <Image
                  src={FlexFit_logo_line}
                  alt="FlexFit_logo_line"
                  className="FlexFitlogoline"
                />
              </h1>

              <Input label="First name " type="text" />
              <Input label="Last name " type="text" />
              <Input label="Email Address " type="email" />
              <OptionInput options={["Male", "Female"]} label="Gender" />
              <Input label="Date of Birth" type="date" />
              <div className="row align-items-center phoneInputHolders">
                <div className="col-5 pe-0">
                  <OptionInput  options={["+1", "+1223"]} label="Country Code" />
                </div>
                <div className="col-7">
                  <Input  className="px-1 py-2" label="Phone"  />
                </div>
              </div>

              <Button type="submit" value="Next" className="active" />

              <p className="mainText">
              have an account? &nbsp;
                <Link href={"/mobile_pages/signin"} className="mainLink">
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

export default SingupBasicMobile;
