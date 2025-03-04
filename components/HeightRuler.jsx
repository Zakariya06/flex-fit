import trakArrow from "@/public/assets/trak_arrow.svg";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

function HeightRuler({
  minValue = 1,
  maxValue = 300,
  initialValue = 75,
  step = 1,
}) {
  const [currentValue, setCurrentValue] = useState(initialValue);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(initialValue.toString());

  const rulerRef = useRef(null);
  const numbersContainerRef = useRef(null);
  const inputRef = useRef(null);
  const trakLineRef = useRef(null);

  // Calculate visible range (how many numbers to show on each side)
  const visibleRange = 2;
  const valueHeight = 60; // Height in pixels for each value marker

  // Calculate which values to display - show more values for smoother transitions
  const getVisibleValues = () => {
    const values = [];
    for (
      let i = currentValue - visibleRange - 1;
      i <= currentValue + visibleRange + 1;
      i++
    ) {
      if (i >= minValue && i <= maxValue) {
        values.push(i);
      }
    }
    return values;
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartY(e.clientY);
    setOffsetY(0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const diff = e.clientY - startY;
    const newOffsetY = offsetY + diff;

    // Calculate value change based on offset
    const valueChange = Math.round(newOffsetY / valueHeight);

    if (valueChange !== 0) {
      const newValue = Math.max(
        minValue,
        Math.min(maxValue, currentValue - valueChange)
      );
      if (newValue !== currentValue) {
        updateValue(newValue);
      }
      setStartY(e.clientY);
      setOffsetY(0);
    } else {
      setOffsetY(newOffsetY);
    }
    // **Apply transform to move .heightTraks**
    if (trakLineRef.current) {
      trakLineRef.current.style.transform = `translateY(${newOffsetY}px)`;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Add touch support
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartY(e.touches[0].clientY);
    setOffsetY(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;

    const diff = e.touches[0].clientY - startY;
    const newOffsetY = offsetY + diff;

    // Calculate value change based on offset
    const valueChange = Math.round(newOffsetY / valueHeight);

    if (valueChange !== 0) {
      const newValue = Math.max(
        minValue,
        Math.min(maxValue, currentValue - valueChange)
      );
      if (newValue !== currentValue) {
        updateValue(newValue);
      }
      setStartY(e.touches[0].clientY);
      setOffsetY(0);
    } else {
      setOffsetY(newOffsetY);
    }

    // **Apply transform to move .heightTraks**
    if (trakLineRef.current) {
      trakLineRef.current.style.transform = `translateY(${newOffsetY}px)`;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Handle input value changes
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setCurrentValue(value);

    // Update ruler if value is valid
    const numValue = parseInt(value);
    if (!isNaN(numValue) && numValue >= minValue && numValue <= maxValue) {
      updateValue(numValue);
    }
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      handleInputBlur();
    }
  };

  const handleInputBlur = () => {
    setIsEditing(false);
    // Validate and update value when input loses focus
    const numValue = parseInt(inputValue);
    if (isNaN(numValue) || numValue < minValue || numValue > maxValue) {
      // Reset to current value if invalid
      setInputValue(currentValue.toString());
    } else {
      updateValue(numValue);
    }
  };

  // Update value and trigger animation
  const updateValue = (newValue) => {
    setCurrentValue(newValue);
    setInputValue(newValue.toString());
    triggerChangeAnimation();
  };

  // Trigger animation when value changes
  const triggerChangeAnimation = () => {
    setIsChanging(true);
    setTimeout(() => setIsChanging(false), 300);
  };

  useEffect(() => {
    const handleUp = () => setIsDragging(false);
    document.addEventListener("mouseup", handleUp);
    document.addEventListener("touchend", handleUp);
    return () => {
      document.removeEventListener("mouseup", handleUp);
      document.removeEventListener("touchend", handleUp);
    };
  }, []);

  // Generate tick marks
  const generateTicks = () => {
    const ticks = [];
    const ticksPerValue = 5;

    for (let i = 0; i < ticksPerValue * (visibleRange * 2 + 3); i++) {
      const offset =
        (i - ticksPerValue * (visibleRange + 1.5)) *
        (valueHeight / ticksPerValue);
      ticks.push(
        <div
          key={i}
          className={`rulerTick ${
            i % ticksPerValue === 0 ? "rulerTickLarge" : "rulerTickSmall"
          }`}
          style={{
            transform: `translateY(${offset}px)`,
          }}
        />
      );
    }

    return ticks;
  };

  return (
    <div className="HeightRuler">
      <div
        className="rulerRangeLineContainer"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseUp={handleMouseUp}
        ref={rulerRef}
      >
        <div className="mainTrakLine"></div>
        <div className="mainTrakArrow">
          <Image src={trakArrow} alt="trakArrow" className="trakArrow" />
        </div>
        <div className="trakLinkeParent">
          <div className="heightTraks" ref={trakLineRef}>
            {Array.from({ length: maxValue - minValue + 1 }, (_, index) => (
              <div key={index} className="heightTrakLine"></div>
            ))}
          </div>
          <div className="trakNumberContainer" ref={numbersContainerRef}>
            {getVisibleValues().map((value) => (
              <div
                key={value}
                className={`trakNumber ${
                  value === currentValue ? "rulerNumberActive" : ""
                }`}
                style={{
                  transform: `translateY(${
                    (value - currentValue) * valueHeight
                  }px)`,
                }}
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Value display with editable input */}
      <div
        className="rulerValueDisplay"
        onClick={() => {
          setIsEditing(true);
          setTimeout(() => inputRef.current?.focus(), 0);
        }}
      >
        {isEditing ? (
          <div className="rulerValueInputWrapper">
            <input
              ref={inputRef}
              type="number"
              className="rulerValueInput"
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onKeyDown={handleInputKeyDown}
              min={minValue}
              max={maxValue}
              step={step}
            />
            <span className="rulerUnitText">cm</span>
          </div>
        ) : (
          <div className={`rulerValueText ${isChanging ? "changing" : ""}`}>
            {currentValue}
            <span className="rulerUnitText">cm</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default HeightRuler;
