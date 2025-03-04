import React, { useState, useEffect, useRef } from "react" 

const WeightRuler = ({ minValue = 1, maxValue = 300, initialValue = 75, step = 1, unit = "Kg" }) => {
  const [currentValue, setCurrentValue] = useState(initialValue)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [offsetX, setOffsetX] = useState(0)
  const [isChanging, setIsChanging] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [inputValue, setInputValue] = useState(initialValue.toString())
  
  const rulerRef = useRef(null)
  const numbersContainerRef = useRef(null)
  const inputRef = useRef(null)
  
  // Calculate visible range (how many numbers to show on each side)
  const visibleRange = 2
  const valueWidth = 60 // Width in pixels for each value marker
  
  // Calculate which values to display - show more values for smoother transitions
  const getVisibleValues = () => {
    const values = []
    for (let i = currentValue - visibleRange - 1; i <= currentValue + visibleRange + 1; i++) {
      if (i >= minValue && i <= maxValue) {
        values.push(i)
      }
    }
    return values
  }
  
  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.clientX)
    setOffsetX(0)
  }
  
  const handleMouseMove = (e) => {
    if (!isDragging) return
    
    const diff = e.clientX - startX
    const newOffsetX = offsetX + diff
    
    // Calculate value change based on offset
    const valueChange = Math.round(newOffsetX / valueWidth)
    
    if (valueChange !== 0) {
      const newValue = Math.max(minValue, Math.min(maxValue, currentValue - valueChange))
      if (newValue !== currentValue) {
        updateValue(newValue)
      }
      setStartX(e.clientX)
      setOffsetX(0)
    } else {
      setOffsetX(newOffsetX)
    }
  }
  
  const handleMouseUp = () => {
    setIsDragging(false)
  }
  
  // Add touch support
  const handleTouchStart = (e) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
    setOffsetX(0)
  }
  
  const handleTouchMove = (e) => {
    if (!isDragging) return
    
    const diff = e.touches[0].clientX - startX
    const newOffsetX = offsetX + diff
    
    // Calculate value change based on offset
    const valueChange = Math.round(newOffsetX / valueWidth)
    
    if (valueChange !== 0) {
      const newValue = Math.max(minValue, Math.min(maxValue, currentValue - valueChange))
      if (newValue !== currentValue) {
        updateValue(newValue)
      }
      setStartX(e.touches[0].clientX)
      setOffsetX(0)
    } else {
      setOffsetX(newOffsetX)
    }
  }
  
  const handleTouchEnd = () => {
    setIsDragging(false)
  }
  
  // Handle input value changes
  const handleInputChange = (e) => {
    const value = e.target.value
    setInputValue(value)
    setCurrentValue(value)
    
    // Update ruler if value is valid
    const numValue = parseInt(value)
    if (!isNaN(numValue) && numValue >= minValue && numValue <= maxValue) {
      updateValue(numValue)
    }
  }
  
  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleInputBlur()
    }
  }
  
  const handleInputBlur = () => {
    setIsEditing(false)
    // Validate and update value when input loses focus
    const numValue = parseInt(inputValue)
    if (isNaN(numValue) || numValue < minValue || numValue > maxValue) {
      // Reset to current value if invalid
      setInputValue(currentValue.toString())
    } else {
      updateValue(numValue)
    }
  }
  
  // Update value and trigger animation
  const updateValue = (newValue) => {
    setCurrentValue(newValue)
    setInputValue(newValue.toString())
    triggerChangeAnimation()
  }
  
  // Trigger animation when value changes
  const triggerChangeAnimation = () => {
    setIsChanging(true)
    setTimeout(() => setIsChanging(false), 300)
  }
  
  useEffect(() => {
    const handleUp = () => setIsDragging(false)
    document.addEventListener("mouseup", handleUp)
    document.addEventListener("touchend", handleUp)
    return () => {
      document.removeEventListener("mouseup", handleUp)
      document.removeEventListener("touchend", handleUp)
    }
  }, [])
  
  // Generate tick marks
  const generateTicks = () => {
    const ticks = []
    const ticksPerValue = 5
    
    for (let i = 0; i < ticksPerValue * (visibleRange * 2 + 3); i++) {
      const offset = (i - (ticksPerValue * (visibleRange + 1.5))) * (valueWidth / ticksPerValue)
      ticks.push(
        <div 
          key={i} 
          className={`rulerTick ${i % ticksPerValue === 0 ? 'rulerTickLarge' : 'rulerTickSmall'}`}
          style={{
            transform: `translateX(${offset}px)`
          }}
        />
      )
    }
    
    return ticks
  }
  
  return (
    <div className="rulerContainer">
      <div 
        className="rulerWrapper"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        ref={rulerRef}
      >
        {/* Top numbers */}
        <div className="rulerNumbersContainer" ref={numbersContainerRef}>
          {getVisibleValues().map((value) => (
            <div 
              key={value} 
              className={`rulerNumber ${value === currentValue ? 'rulerNumberActive' : ''}`}
              style={{
                transform: `translateX(${(value - currentValue) * valueWidth}px)`,
              }}
            >
              {value}
            </div>
          ))}
        </div>
        
        {/* Tick marks */}
        <div className="rulerTicksContainer"> 
          {generateTicks()} 
          <div className="rulerIndicatorLine" />
        </div>
        
        {/* Indicator section */}
        <div className="rulerIndicatorSection">
          <div 
            className="rulerTriangleIndicator" 
            style={{ transform: isChanging ? 'scale(1.2)' : 'scale(1)' }}
          />
        </div>
        
        {/* Value display with editable input */}
        <div className="rulerValueDisplay" onClick={() => {
          setIsEditing(true)
          setTimeout(() => inputRef.current?.focus(), 0)
        }}>
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
              <span className="rulerUnitText">{unit}</span>
            </div>
          ) : (
            <div className={`rulerValueText ${isChanging ? 'changing' : ''}`}>
              {currentValue}
              <span className="rulerUnitText">{unit}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default WeightRuler
