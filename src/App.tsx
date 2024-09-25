import { useState } from "react";
import "./App.css";
import { Child } from "./components/child";
import { useDebounce } from "./hooks/use-debounce";

function App() {
  const [search, setSearch] = useState<string>(""); // 1
  const [task, setTask] = useState<string>(""); // 1

  const searchDebounced = useDebounce(search, 1000);
  const taskDebounced = useDebounce(task, 3000);

  return (
    <>
      <header style={{ border: "1px solid blue" }}>
        <p>with Debounce {searchDebounced}</p>

        <input
          type="search"
          value={search}
          onChange={(e) => {
            // send request to the server and get the data and set the state

            setSearch(e.target.value);
          }}
        />
      </header>

      <br />
      <main style={{ border: "1px solid red" }}>
        <p>with Debounce {taskDebounced}</p>
        <form action="">
          <input
            type="text"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          <button>Submit</button>
        </form>
      </main>
      <Child age={20} task={taskDebounced} />
    </>
  );
}

export default App;
