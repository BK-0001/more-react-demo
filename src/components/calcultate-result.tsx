import { memo } from "react";

type Props = {
  num1: number;
  num2: number;
  calculated: number;
};

export const CalculateResult = memo(({ num1, num2, calculated }: Props) => {
  console.log("rendering....");

  return (
    <div>
      <p>
        {num1} + {num2} = {calculated}
      </p>
    </div>
  );
});
