import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const users = [
    { id: 1, username: "user1", password: "pass1" },
    { id: 2, username: "user2", password: "pass2" },
    { id: 3, username: "user3", password: "pass3" },
  ];

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(event: any) {
    event.preventDefault();

    const userFound = users.find(
      (user) => user.username === username && user.password === password
    );

    if (userFound) {
      localStorage.setItem("loggedInUser", JSON.stringify(userFound));
      navigate("/");
    } else {
      alert("Invalid username or password.");
    }
  }

  return (
    <div className="container py-3 my-5 col-12 col-sm-6 col-md-4 col-lg-3 bg-light rounded shadow">
      <h2 className="mb-4">Login Page</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text" className="form-control" id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password" className="form-control" id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-outline-primary" onClick={handleLogin}> Login </button>
      </form>
      <hr />
      <h5>Test Credentials:</h5>
      <p>username: user1, password: pass1</p>
      <p>username: user2, password: pass2</p>
      <p>username: user3, password: pass3</p>      
    </div>
  );
}
