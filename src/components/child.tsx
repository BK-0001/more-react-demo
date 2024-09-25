import { memo } from "react";

type Props = {
  age: number;
  task: string;
};

export const Child = memo(({ age, task }: Props) => {
  console.log("inside child");

  return (
    <div>
      <p>{age}</p>
      <p>{task}</p>
    </div>
  );
});
