import { forwardRef, useId, useState } from "react";

const InputTextArea = forwardRef(function MyInput(
  { placeholder = "", className = "", label = "", value = "", ...props },
  ref
) {
  const [text, setText] = useState(value);
  const id = useId();
  const handleInput = (e) => {
    setText(e.target.innerText);
  };
  return (
    <div
      ref={ref}
      className={`inputHolder optionInputHolder p-2 py-3 ${className} `}
    >
      <div
        contentEditable
        onChange={handleInput}
        suppressContentEditableWarning
        id={id}
        className={`inputArea auto-wrap-input p-0`}
      >
        {text}
      </div>
      {label && (
        <label className="inputLable" htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
});

export default InputTextArea;
