import { forwardRef } from "react";
import Image from "next/image"

const Button = forwardRef(function MyInput(
  { value = "", className = "", imageClasses = "", image, ...props },
  ref
) {
  return (
    <button ref={ref} className={`mainBtn ${className}`} {...props}>
      {image && <Image src={image} alt={image} className={`btnImage  ${imageClasses}`} />}{" "}
      {value}
    </button>
  );
});

export default Button;
