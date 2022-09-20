import styles from "./Login.module.css";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //intial value of empty string when using state with input fields

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    // class name has a hyphen, reason for diff format on form tag
    // global css index.css, reason for diff format on button tag
    <form className={styles["login-form"]} onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        <span>email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <button className="btn">Login</button>
    </form>
  );
}
