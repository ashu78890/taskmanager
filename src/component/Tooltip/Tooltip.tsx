import React, { useState, useRef, useEffect } from "react";
import "./Tooltip.scss"; // Ensure this file exists

interface CustomTooltipProps {
  text: string;
  children: React.ReactNode;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ text, children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current) {
        setIsOverflowing(containerRef.current.scrollWidth > containerRef.current.clientWidth);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [text]);

  const handleMouseEnter = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setTooltipPosition({
        top: rect.top - 30,
        left: rect.left + rect.width / 2,
      });
      setShowTooltip(true);
    }
  };

  const handleMouseLeave = () => setShowTooltip(false);

  return (
    <div ref={containerRef} className="tooltip-container">
      <div
        onMouseEnter={isOverflowing ? handleMouseEnter : undefined}
        onMouseLeave={handleMouseLeave}
        className="tooltip-trigger"
      >
        {children}
      </div>

      {showTooltip && (
        <div className="custom-tooltip" style={{ top: tooltipPosition.top, left: tooltipPosition.left }}>
          {text}
        </div>
      )}
    </div>
  );
};

export default CustomTooltip;
