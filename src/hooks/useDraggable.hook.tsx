import type { MouseEvent } from "react";
import { useState, useCallback, useEffect } from "react";

const INITIAL_STATE = {
  isDragging: false,
  offsetY: 0,
  y: 0,
};

function useDraggable() {
  const [state, setState] = useState(INITIAL_STATE);

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

  return {
    state,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  };
}

export default useDraggable;
