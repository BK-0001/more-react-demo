import { useCallback, useEffect, useState } from "react";
import { Button } from "./components/button";

export default function Component2() {
  const [id, setId] = useState<string>("");

  console.log("parent re-render");

  const handleClick = useCallback(() => {}, []);

  const getProduct = useCallback(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, [id]);

  useEffect(() => {
    getProduct();
  }, [id]);

  for (let i = 0; i < 10000; i++) {
    console.log(i);
  }

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <Button onClick={handleClick}>Some Button</Button>
    </div>
  );
}
