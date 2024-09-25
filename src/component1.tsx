import { useEffect, useMemo, useState } from "react";
import { CalculateResult } from "./components/calcultate-result";

export function Component1() {
  // triggering re-render by changing the state
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [someState, setSomeState] = useState(false);

  const sum = () => {
    return num1 + num2;
  };

  const calculated = useMemo(sum, [num1, num2]);

  useEffect(() => {
    // do something
  }, [calculated]);

  const calculatedMore = useMemo(() => {
    return calculated * 2;
  }, [calculated]);

  console.log("render parent");

  return (
    <div>
      <CalculateResult num1={num1} num2={num2} calculated={calculated} />

      <button onClick={() => setNum1((prev) => prev + 1)}>
        trigger re-render with recalculate
      </button>
      <button onClick={() => setNum2((prev) => prev + 1)}>
        trigger re-render2 without recalculate
      </button>

      <button
        onClick={() => {
          setSomeState((prev) => !prev);
        }}
      >
        trigger re-render except child component: CalculateResult
      </button>
    </div>
  );
}
