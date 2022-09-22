import styles from "./Login.module.css";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

export default function Login() {
  //intial value of empty string when using state with input fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //deconstruct useLogin hook
  const { login, error, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
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
      {!isPending && <button className="btn">Login</button>}
      {isPending && (
        <button className="btn" disabled>
          loading
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
}
