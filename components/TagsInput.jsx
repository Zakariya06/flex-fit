import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "@/features/workoutSlice";

const TagsInput = ({ options, label,  setWorkOutValue, ...props }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const containerRef = useRef(null); 

  // Handle option selection
  const handleOptionSelect = (event) => {
    const option = event.target.value;
    if (!selectedOptions.includes(option)) {
      const newSelectedOptions = [...selectedOptions, option];
      setSelectedOptions(newSelectedOptions);
      setWorkOutValue(newSelectedOptions) 
    }
    // Reset the select element to its default value
    event.target.value = "";
  };

  // Handle option removal
  const handleOptionRemove = (optionToRemove) => {
    const updatedOptions = selectedOptions.filter(
      (option) => option !== optionToRemove
    );
    setSelectedOptions(updatedOptions);
    console.log("Selected options array:", updatedOptions); // Log the updated array
  };

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="tagsContainer">
      <div className="inputHolder optionInputHolder">
        {selectedOptions.map((option, index) => (
          <div key={index} className="tagsField">
            {option},
          </div>
        ))}
        <select
          onChange={handleOptionSelect}
          onFocus={() => setShowDropdown(true)}
          className="inputArea" 
          {...props}
        >
          <option  value="" disabled>
            Select an option...
          </option>
          {options
            .filter((option) => !selectedOptions.includes(option))
            .map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
        </select>
        {label && <label className="inputLable">{label}</label>}
      </div>
    </div>
  );
};

export default TagsInput;
