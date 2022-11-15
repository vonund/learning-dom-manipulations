import { useState, useEffect, useCallback } from "react";
import type { MouseEvent } from "react";

const WIDGET_INITIAL_STATE = {
  isDragging: false,
  offsetY: 0,
  y: 0,
};

const Widget = () => {
  const [state, setState] = useState(WIDGET_INITIAL_STATE);

  const handleMouseDown = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      const { offsetY } = event.nativeEvent;
      setState({
        ...state,
        offsetY,
        isDragging: true,
      });
    },
    [state]
  );

  const handleMouseMove = useCallback(
    (event: globalThis.MouseEvent) => {
      const { clientY } = event;
      const y = clientY - state.offsetY;

      setState({
        ...state,
        y: y < 0 ? 0 : y,
      });
      event.preventDefault();
    },
    [state]
  );

  const handleMouseUp = useCallback(() => {
    setState({
      ...state,
      isDragging: false,
    });
  }, [state]);

  useEffect(() => {
    if (!state.isDragging) {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      return;
    }

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [state.isDragging, handleMouseMove, handleMouseUp]);

  return (
    <div
      className="
      fixed right-0 top-1/2 
      cursor-grab rounded-l bg-rose-500 py-2 text-white
      active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      style={{ top: state.y }}
    >
      <span className="pointer-events-none">widget</span>
    </div>
  );
};

export default Widget;
