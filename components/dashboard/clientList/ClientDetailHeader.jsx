import React from "react";
import TextHeader from "../TextHeader";
import Button from "@/components/Button";
import OptionInput from "@/components/OptionsInput";

function ClientDetailHeader({
  title,
  text,
  buttonText,
  buttonImage,
  buttonClasses,
  options,
}) {
  return (
    <div className="ClientDetailHeader mb-2">
      <TextHeader title={title} text={text} className="smTextHeader" />

      <div className="clientDetailFileds">
        {buttonText && (
          <Button
            value={buttonText}
            image={buttonImage}
            className={`${buttonClasses}`}
          />
        )}
        {options && <OptionInput options={options} />}
      </div>
    </div>
  );
}

export default ClientDetailHeader;
