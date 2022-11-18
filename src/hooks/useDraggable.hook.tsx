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

  useEffect(() => {
    const handleMouseMove = (event: globalThis.MouseEvent) => {
      const { clientY } = event;
      const y = clientY - state.offsetY;

      setState({
        ...state,
        y: y < 0 ? 0 : y,
      });
      event.preventDefault();
    };

    const handleMouseUp = () => {
      setState({
        ...state,
        isDragging: false,
      });
    };

    const addDocumentEventListeners = () => {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    const removeDocumentEventListeners = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    if (!state.isDragging) {
      removeDocumentEventListeners();
      return;
    }
    addDocumentEventListeners();

    return () => {
      removeDocumentEventListeners();
    };
  }, [state]);

  return {
    state,
    handleMouseDown,
  };
}

export default useDraggable;
