import PageSlider from "@/components/mobilepages/PageSlider"; 
import FlexFit_logo_line from "@/public/assets/FlexFit_logo_line.png";
import Image from "next/image"; 
import Button from "@/components/Button"; 
import back_arrow from "@/public/assets/back_arrow.svg";
import Link from "next/link"; 
import HeightRuler from "@/components/HeightRuler"; 
import { useRouter } from "next/router";

function SetHeight() {  

  
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
              <p onClick={handleBack} className="backLink mb-3">
                <Image src={back_arrow} className="backArrow" alt="back" /> Back
              </p>
              <h1 className="lgHeading">
              What Is Your <span>Height?</span>
                <Image
                  src={FlexFit_logo_line}
                  alt="FlexFit_logo_line"
                  className="FlexFitlogoline"
                />
              </h1>
              
             <HeightRuler min={0} max={200} initialValue={150} />

              <Link href={"/mobile_pages/workout_experience"}>
                <Button value="Next"  className="active mb-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetHeight;
