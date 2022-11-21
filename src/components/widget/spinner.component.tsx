import { cva, type VariantProps } from "class-variance-authority";

type SpinnerProps = VariantProps<typeof spinner>;

const spinner = cva(
  ["h-8 w-8 rounded-full border-4 pointer-events-none transition-transform"],
  {
    variants: {
      dragging: {
        true: "border-rose-300 scale-90",
        false: "border-white",
      },
    },
    defaultVariants: {
      dragging: false,
    },
  }
);

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props extends SpinnerProps {}

const Spinner = ({ dragging }: Props) => {
  return (
    <div className="p-2">
      <div className={spinner({ dragging })}></div>
    </div>
  );
};

export default Spinner;
