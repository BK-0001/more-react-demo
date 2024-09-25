import { useEffect, useState } from "react";

export const useDebounce = (value: string, delay: number) => {
  const [debounced, setDebounced] = useState<string>(value);

  useEffect(() => {
    const debounceHandler = setTimeout(() => {
      setDebounced(value);
    }, delay);

    return () => {
      clearTimeout(debounceHandler);
    };
  }, [value, delay]);

  return debounced;
};
