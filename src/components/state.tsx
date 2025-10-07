import { useState } from "react";

export default function counter() {
    const [count , setcount] = useState(0);

    function increment() {
        setcount(count + 2);
    }
    function decrement() {
        setcount(count - 1);
    }
    return <div className="container">
        <h1>Counter : {count}</h1>
        <button className="btn btn-primary mx-3" onClick={increment}>Increment</button>
        <button className="btn btn-danger mx-3" onClick={decrement}>Decrement</button>
    </div>

}