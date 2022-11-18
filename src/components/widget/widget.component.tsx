import useDraggable from "../../hooks/useDraggable.hook";

const Widget = () => {
  const { state, handleMouseDown } = useDraggable();

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
