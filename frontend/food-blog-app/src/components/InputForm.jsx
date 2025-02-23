import React, { useState } from 'react';

export default function InputForm({ setIsOpen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    
    if (isSignUp) {
      localStorage.setItem("user", JSON.stringify({ email, password }));
      localStorage.setItem("token", "dummy-token");
    } else {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
        setError("Invalid email or password");
        return;
      }
      localStorage.setItem("token", "dummy-token");
    }

    setIsOpen();
  };

  return (
    <form className="form" onSubmit={handleOnSubmit}>
      <div className="form-control">
        <label>Email</label>
        <input type="email" className="input" onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="form-control">
        <label>Password</label>
        <input type="password" className="input" onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">{isSignUp ? "Sign Up" : "Login"}</button><br />
      {error && <h6 className="error">{error}</h6>}<br />
      <p onClick={() => setIsSignUp((prev) => !prev)}>{isSignUp ? "Already have an account?" : "Create new account"}</p>
    </form>
  );
}
