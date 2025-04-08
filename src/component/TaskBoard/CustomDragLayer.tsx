// components/CustomDragLayer.tsx
import React from "react";
import { useDragLayer } from "react-dnd";
import "./customDragLayer.scss";

const layerStyles: React.CSSProperties = {
  position: "fixed",
  pointerEvents: "none",
  zIndex: 100,
  left: 0,
  top: 0,
};

const getItemStyles = (currentOffset: any) => {
  if (!currentOffset) return { display: "none" };

  const { x, y } = currentOffset;
  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform,
  };
};

const CustomDragLayer: React.FC = () => {
  const {
    item,
    itemType,
    isDragging,
    currentOffset,
  } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  if (!isDragging || itemType !== "TASK") return null;

  return (
    <div style={layerStyles}>
      <div style={getItemStyles(currentOffset)}>
        <div className="task-card drag-preview">
          {item.label}
        </div>
      </div>
    </div>
  );
};

export default CustomDragLayer;
