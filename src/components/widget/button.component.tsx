import { cva, type VariantProps } from "class-variance-authority";
import { type MouseEvent } from "react";

type ButtonProps = VariantProps<typeof button>;

const button = cva(
  [
    "flex items-center justify-center h-12 w-12 transition-colors hover:bg-rose-400",
  ],
  {
    variants: {
      role: {
        pin: "",
        shot: "",
      },
      disabled: {
        true: "opacity-50",
        false: "",
      },
    },
    defaultVariants: {
      role: "pin",
      disabled: false,
    },
  }
);

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ButtonInterface extends ButtonProps {}

const Button = ({ role, disabled }: ButtonInterface) => {
  return (
    <button
      className={button({ role, disabled })}
      onClick={(event: MouseEvent<HTMLButtonElement>) =>
        event.stopPropagation()
      }
      onMouseDown={(event: MouseEvent<HTMLButtonElement>) =>
        event.stopPropagation()
      }
      type="button"
    >
      {role === "shot" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      )}
      {role === "pin" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
          />
        </svg>
      )}
    </button>
  );
};

export default Button;
