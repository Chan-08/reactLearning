import { useReducer } from "react";

export default function UseReducer() {
    const initialState = 0;
    const reducer = (state: number, action: { type: string }) => {
        switch (action.type) {
            case "increment":
                return state + 1;
            case "decrement":
                return state - 1;
            case "reset":
                return initialState;
            default:
                return state;
        }
    };

    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="container-fluid p-4 text-center">

            <h1>Use Reducer</h1>
            <h2>Count: {count}</h2>
            <div className="container d-flex justify-content-center gap-3">
                <button className="btn btn-primary" onClick={() => dispatch({ type: "increment" })}>Increment</button>
                <button className="btn btn-danger" onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
                <button className="btn btn-secondary" onClick={() => dispatch({ type: "reset" })}>Reset</button>
            </div>

            <div className="container text-start p-4 mt-4 col-md-8 col-lg-6 mx-auto">
                <h5 className="text-center mb-3 text-primary">Explanation</h5>
                <p className="text-muted">
                    The <code>useReducer</code> hook is an alternative to <code>useState</code>
                    for managing complex state logic. It follows the <em>Reducer Pattern</em>,
                    where a function called <code>reducer</code> determines how the state
                    changes based on a given <code>action</code> type.
                </p>
                <p className="text-muted">
                    In this example:
                    <br /><br />
                    • The <code>initialState</code> starts at <strong>0</strong>.<br />
                    • <code>dispatch()</code> sends an <code>action</code> to the reducer.<br />
                    • The reducer checks <code>action.type</code> and updates the state:
                    <br />&nbsp;&nbsp;→ <code>increment</code>: increases count by 1
                    <br />&nbsp;&nbsp;→ <code>decrement</code>: decreases count by 1
                    <br />&nbsp;&nbsp;→ <code>reset</code>: resets count to 0
                </p>
                <p className="text-muted">
                    This approach makes the code more <strong>predictable</strong>,
                    <strong>testable</strong>, and <strong>scalable</strong> — ideal when handling
                    multiple state transitions or complex logic.
                </p>
            </div>
        </div>
    );
}