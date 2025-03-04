import PageSlider from "@/components/mobilepages/PageSlider";
import React, { useState } from "react";
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
import WeightRuler from "@/components/WeightRuler";
import { useRouter } from "next/router";

function SetWeight() {
  const [isBtnActive, setIsBtnActive] = useState("KG");
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div className="SignInMobilePage">
      <div className="col-sm-6 col-lg-4 mx-auto">
        <div className="SignInMobilePageWrrper">
          <PageSlider />

          <div className="singInMobileContent ">
            <div className="weightPageHead py-3 p-4">
              <p onClick={handleBack}  className="backLink mb-3">
                <Image src={back_arrow} className="backArrow" alt="back" /> Back
              </p>
              <h1 className="lgHeading">
                What Is Your <span>Weight?</span>
                <Image
                  src={FlexFit_logo_line}
                  alt="FlexFit_logo_line"
                  className="FlexFitlogoline"
                />
              </h1>

              <div className="weightTabs">
                <Button
                  value="KG"
                  type="button"
                  className={isBtnActive === "KG" && "active"}
                  onClick={() => setIsBtnActive("KG")}
                />
                <Button
                  value="LB"
                  type="button"
                  className={isBtnActive === "LB" && "active"}
                  onClick={() => setIsBtnActive("LB")}
                />
              </div>


              <WeightRuler />

            <Link href={"/mobile_pages/set_height"}>
              <Button value="Next"  className="active mb-4" />
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetWeight;
