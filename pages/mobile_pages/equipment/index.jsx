import PageSlider from "@/components/mobilepages/PageSlider";
import React from "react";
import FlexFit_logo_line from "@/public/assets/FlexFit_logo_line.png";
import Image from "next/image";
import back_arrow from "@/public/assets/back_arrow.svg";
import Button from "@/components/Button";
import Link from "next/link";
import dumbbell from "@/public/assets/Dumbbells.png";
import { useRouter } from "next/router";

function Equipment() {
  const equipemntData = [
    {
      heading: "Free Weights",
      data: [
        {
          id: 1,

          label: "Dumbbells",
          image: "/assets/Dumbbells.png",
        },
        {
          id: 2,
          label: "Kettlebells",
          image: "/assets/Kettlebells.png",
        },
        {
          id: 3,
          label: "Medicine Balls",
          image: "/assets/Medicine_Balls.png",
        },
      ],
    },
    {
      heading: "Barbells",
      data: [
        {
          id: 4,
          label: "Barbells",
          image: "/assets/Barbells.png",
        },
        {
          id: 5,
          label: "EZ Bar",
          image: "/assets/EZ_Bar.png",
        },
      ],
    },
    {
      heading: "Benches & Racks",
      data: [
        {
          id: 6,
          label: "Squat Rack",
          image: "/assets/Squat_Rack.png",
        },
        {
          id: 7,
          label: "Flat_Bench",
          image: "/assets/Flat_Bench.png",
        },
        {
          id: 8,
          label: "Decline Bench",
          image: "/assets/Decline_Bench.png",
        },
        {
          id: 9,
          label: "Incline_Bench",
          image: "/assets/Incline_Bench.png",
        },
      ],
    },
  ];
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div className="SignInMobilePage EquipmentPage">
      <div className="col-sm-6 col-lg-4 mx-auto">
        <div className="SignInMobilePageWrrper">
          <PageSlider />

          <div className="singInMobileContent  p-4">
            <div className="weightPageHead ">
              <p onClick={handleBack} className="backLink mb-3">
                <Image src={back_arrow} className="backArrow" alt="back" /> Back
              </p>
              <h1 className="lgHeading">
                Do you have the <span> Equipment?</span>
                <Image
                  src={FlexFit_logo_line}
                  alt="FlexFit_logo_line"
                  className="FlexFitlogoline"
                />
              </h1>

              <p className="mainText col-11 mx-auto">
                These were chosen based on your gym type, but you can update
                them later.
              </p>

              <div className="equipmentContentContainer  ">
                {equipemntData.map((item) => (
                  <div key={item.id}>
                    <h1 className="mdHeading">
                      {item.heading && item.heading}
                    </h1>
                    <div className="equipmentPageContent">
                      {item.data.map((data) => (
                        <div className="equipmentContentItem">
                          <div className="equipmentContentItemImage">
                            <Image
                              src={data.image}
                              width={60}
                              height={60}
                              alt={data.label}
                              className="equipmentContentItemImage"
                            />
                            <label
                              htmlFor={data.label}
                              className="equipmentContentItemLabel"
                            >
                              {data.label && data.label}
                            </label>
                          </div>
                          <input
                            type="checkbox"
                            name={data.label}
                            id={data.label}
                            className="equipmentContentItemCheckbox"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <Link href={"/mobile_pages/client_dashboard"}>
                <Button value="Lets get started" className="active mb-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Equipment;
