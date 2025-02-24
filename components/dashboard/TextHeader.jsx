import React from "react";

const TextHeader = React.forwardRef(({
    title="",
    text="",
    span = "", 
    className = "", 
   ...props
}, ref) => {
  return (
    <>
      <div ref={ref} className={`textHeaderComponent ${className}`} { ...props}>
        {title && (
          <h1 className="textHeaderHeading">
            {title} {span && <span>{span}</span>} 
          </h1>
        )}
        {text && <p className="textHeaderText">{text}</p>}
      </div>
    </>
  );
});

export default TextHeader;
