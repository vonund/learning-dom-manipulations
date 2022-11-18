import { cva, type VariantProps } from "class-variance-authority";

type SpinnerProps = VariantProps<typeof spinner>;

const spinner = cva(["h-8 w-8 rounded-full border-4 transition-transform"], {
  variants: {
    dragging: {
      true: "border-rose-300 scale-90",
      false: "border-white",
    },
  },
  defaultVariants: {
    dragging: false,
  },
});

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props extends SpinnerProps {}

const WidgetDraggable = ({ dragging }: Props) => {
  return (
    <div className="pointer-events-none p-2">
      <div className={spinner({ dragging })}></div>
    </div>
  );
};

export default WidgetDraggable;
