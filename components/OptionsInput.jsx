import { forwardRef, useId } from "react";

const OptionInput = forwardRef(function OptionInput(
  {
    type = "text",
    placeholder = "",
    className = "",
    label = "",
    options = [],
    ...props
  },
  ref
) {
  const id = useId();
  return (
    <div ref={ref}  className={`inputHolder optionInputHolder ${className} `}>
      {label && (
        <label className="inputLable" htmlFor={id}>
          {label}
        </label>
      )}
      <select  className={`inputArea`}   {...props}>
        {options.map((options, index) => (
          <option key={index} value={options}>
            {options}
          </option>
        ))}
      </select>
    </div>
  );
});

export default OptionInput;
