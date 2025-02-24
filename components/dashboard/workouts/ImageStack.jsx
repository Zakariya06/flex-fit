import Image from "next/image";
import React from "react";

const ImageStack = ({ images, moreCount }) => {
  return (
    <div className="d-inline-flex align-items-center">
      {images.map((src, index) => (
        <div
          key={index}
          className="position-relative"
          style={{ marginLeft: index === 0 ? "0" : "-20px" }}
        >
          <Image
            src={src}
            alt={`Profile ${index + 1}`}
            width={40}
            height={40}
            className="rounded-circle border border-white"
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}
      {moreCount > 0 && (
        <div
          className="rounded-circle bg-light d-flex justify-content-center align-items-center fw-bold text-secondary position-relative moreImagesBtn"
          style={{
            width: "40px",
            height: "40px",
            marginLeft: "-15px",
            zIndex: 1,
          }}
        >
          +{moreCount}
        </div>
      )}
    </div>
  );
};

export default ImageStack;
