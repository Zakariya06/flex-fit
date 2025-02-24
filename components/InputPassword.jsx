import { forwardRef, useId, useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";

const InputPassword = forwardRef(function InputPassword(
  { type = "password", placeholder = "", className = "", label = "", ...props },
  ref
) {
  const id = useId();
  const [isPasswordShow, setIsPasswordShow] = useState(true);
  const [value, setValue] = useState("")

  return (
    <div ref={ref} className={`inputHolder  ${className} `}>
      <input
        type={isPasswordShow ? type : "text"}
        placeholder={placeholder}
        className={`inputArea`}
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...props}
      />
      {label && (
        <label className="inputLable" htmlFor={id}>
          {label}
        </label>
      )}
      {value != "" &&  ( isPasswordShow ? (
        <IoEye
          className="passwordeyeIcon"
          onClick={() => setIsPasswordShow(!isPasswordShow)}
        />
      ) : (
        <IoMdEyeOff 
          className="passwordeyeIcon"
          onClick={() => setIsPasswordShow(!isPasswordShow)}
        />
      ))}  
     
    </div>
  );
});

export default InputPassword;
