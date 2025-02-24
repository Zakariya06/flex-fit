 
import { forwardRef, useId } from 'react';

const Input = forwardRef(function MyInput({
    type = "text",
    placeholder = "",
    className = "",
    label = '',
   ...props
}, ref) {
    const id = useId()
     return (
        <div ref={ref} className={`inputHolder  ${className} `}>
            <input type={type} placeholder={placeholder} className={`inputArea`} id={id} {...props} />
            {label && <label className="inputLable" htmlFor={id} >{label}</label> }
        </div>
     )
});

export default Input;