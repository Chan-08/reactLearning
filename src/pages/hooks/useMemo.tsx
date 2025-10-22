import { useState, useMemo } from "react";

export default function UseMemo() {
    const [count, setCount] = useState(0);
    const [multiple, setMultiple] = useState(1);

    const multiplydValue = useMemo(() => {
        console.log("Calculating multiplied value...");
        return count * multiple;
    }, [count, multiple]);

    return (
        <div className="container mt-4 d-flex flex-column align-items-center">
            <h1>useMemo Example</h1>

            <h4> Set Multiple value</h4>
            <input type="number" value={multiple}  onChange={(e) => setMultiple(Number(e.target.value))}  />
            <button className="btn btn-primary mt-3" onClick={() => setCount(count + 1)}>Increment Count</button>


            <h2 className="mt-5">Count: {count}</h2>
            <h2>Multiplied Value : {multiplydValue}</h2>


            <p className="mt-4 col-md-8 col-lg-6 text-muted">
                In this example, the <code>useMemo</code> hook is used to memoize the result of multiplying
                the <code>count</code> by <code>multiple</code>. The multiplication is only recalculated
                when either <code>count</code> or <code>multiple</code> changes, optimizing performance
                by avoiding unnecessary calculations on every render.
            </p>
        </div>
    );
}