import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const Component2 = lazy(() => import("./component2"));

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<p>loading...</p>}>
    <Component2 />
  </Suspense>
);
