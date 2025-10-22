import { useState, useRef } from "react";

export default function UseRef() {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    function increment() {
        countRef.current++;
    }

    return (
        <div className="container mt-4 d-flex flex-column align-items-center">
            <h1>useRef Example</h1>

            <h2>Counter</h2>
            <h5>{countRef.current}</h5>
            <div className="d-flex">
                <button className="btn btn-primary me-3" onClick={increment}>
                    Increment
                </button>
                <button className="btn btn-primary ms-3" onClick={() => setCount(countRef.current)}>
                    Update
                </button>
            </div>

            <p className="mt-4 text-center" style={{ maxWidth: "700px" }}>
                <strong>Explanation:</strong> <br />
                The <code>useRef</code> hook lets you store a value that persists
                across renders without causing the component to re-render when it
                changes. <br />
                Here, <code>countRef</code> starts at <code>0</code> and updates
                using <code>countRef.current++</code> each time the Increment button
                is clicked. However, the UI doesn’t immediately reflect the change
                because <code>useRef</code> doesn’t trigger re-renders. <br />
                The <strong>Update</strong> button calls{" "}
                <code>setCount(countRef.current)</code> to trigger a re-render and
                display the latest <code>countRef.current</code> value. <br />
                This example demonstrates that <code>useRef</code> is ideal for
                keeping mutable values (like counters, previous states, or DOM
                elements) that need to persist between renders without affecting the
                rendering cycle.
            </p>
        </div>
    );
}