import Image from "next/image";
import React from "react";

export default function BenchEqupmentsSection() {
  const cardData = [
    {
      image: "/assets/Flat_Bench.png",
      title: "Flat Bench",
    },
    {
      image: "/assets/Barbells.png",
      title: "Barbells",
    },
    {
      image: "/assets/Plates.png",
      title: "Plates",
    },
  ];
  return (
    <section className="BenchEqupmentsSection">
      <h1 className="mdHeading">Equpments</h1>
      <div className="row">
        {cardData.map((item, index) => (
          <div key={index} className="col-3">
            <div className="benchEqupmentCard">
              <Image
                src={item.image}
                alt={item.title}
                width={70}
                height={70}
                className="benchEqupmentImage"
              />
              <p className="mainText">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
