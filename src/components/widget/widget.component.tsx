import { useState, useEffect } from "react";
import useDraggable from "../../hooks/useDraggable.hook";
import Button from "./button.component";
import Spinner from "./spinner.component";

const Widget = () => {
  const [comments, setComments] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const { state, handleMouseDown } = useDraggable();

  useEffect(() => {
    if (state.isDragging) return setIsDragging(state.isDragging);
    setTimeout(() => setIsDragging(state.isDragging), 0);
  }, [state.isDragging]);

  const handleOnClick = () => {
    if (isDragging) return;
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className="
      fixed right-0 top-1/2 
      cursor-grab rounded-l bg-rose-500 text-white
      active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onClick={handleOnClick}
      style={{ top: state.y }}
    >
      <Spinner dragging={state.isDragging} />
      {comments.length > 0 && (
        <div className="text-center font-medium">{comments.length}</div>
      )}
      {isExpanded && (
        <div className="block">
          <Button role={"pin"} />
          <Button role={"shot"} />
        </div>
      )}
    </div>
  );
};

export default Widget;
