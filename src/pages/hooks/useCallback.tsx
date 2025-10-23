import { useState, useCallback, memo } from "react";

// Child Component
const ChildButton = memo(({ onClick, text }: { onClick: () => void; text: string }) => {
  console.log(`${text} rendered `);
  return (
    <button className="btn btn-success mt-3" onClick={onClick}>
      {text}
    </button>
  );
});

// Parent Component
export default function UseCallbackExample() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [theme, setTheme] = useState("light");

  // These functions are memoized and only recreated when dependencies change
  const handleClick1 = useCallback(() => {
    setCount1((prev) => prev + 1);
  }, [count1]);

  const handleClick2 = useCallback(() => {
    setCount2((prev) => prev + 1);
  }, [count2]);

  console.log("Parent rendered ");

  return (
    <div
      className={`container mt-4 d-flex flex-column align-items-center p-4 rounded-3 shadow-sm ${
        theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <h1>useCallback Example</h1>
      <h4>Theme: {theme.toUpperCase()}</h4>

      <div className="d-flex flex-column align-items-center mt-3">
        <h2>Count 1: {count1}</h2>
        <h2>Count 2: {count2}</h2>

        {/* Two child buttons using memoized callbacks */}
        <ChildButton onClick={handleClick1} text="Increment Count 1" />
        <ChildButton onClick={handleClick2} text="Increment Count 2" />
      </div>

      <button
        className="btn btn-secondary mt-4"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        Toggle Theme
      </button>

      <p className="mt-4 col-md-8 text-muted text-center">
        The <code>useCallback</code> hook memoizes the increment functions.
        When you change the theme, only the parent re-renders —
        but the <code>ChildButton</code> components don’t re-render,
        since their function references stay the same unless their respective
        counters (<code>count1</code> or <code>count2</code>) change.
      </p>
    </div>
  );
}
