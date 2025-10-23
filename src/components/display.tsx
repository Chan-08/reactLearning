import MyContext from "../pages/hooks/useContext";
import { useContext } from "react";

export default function Display() {

  const data = useContext(MyContext);

  return (
    <div className="container-fluid d-flex justify-content-center text-center">
      <div className="p-4 rounded shadow bg-white">
        <h1 className=" text-primary fw-bold">Welcome 👋</h1>

        <p className="fs-5 text-muted">
          This page is created by{" "}
          <span>
            <a
              href="https://chandrakumars.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none fw-semibold text-dark"
            >
              Chandrakumar
            </a>
          </span>{" "}
          to learn the <strong>React</strong> library. Here all the concepts are demonstrated with simple examples.
        </p>
        <p>{data}</p>
        <a href="https://github.com/Chan-08/reactLearning" target="_blank" rel="noopener noreferrer">
            Repo Link
        </a>
      </div>
    </div>
  );
}
