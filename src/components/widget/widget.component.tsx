import useDraggable from "../../hooks/useDraggable.hook";
import Spinner from "./spinner.component";

const Widget = () => {
  const { state, handleMouseDown } = useDraggable();

  return (
    <div
      className="
      fixed right-0 top-1/2 
      cursor-grab rounded-l bg-rose-500 text-white
      active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      style={{ top: state.y }}
    >
      <Spinner dragging={state.isDragging} />
    </div>
  );
};

export default Widget;
