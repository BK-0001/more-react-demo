import { ButtonHTMLAttributes, memo, MouseEvent } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = memo(({ children, onClick, ...rest }: Props) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };
  console.log("child re-render");

  return (
    <button onClick={handleClick} {...rest}>
      {children}
    </button>
  );
});
