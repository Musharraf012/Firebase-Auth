import React from "react";
import { app } from "../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

let auth = getAuth(app);

function SignUp() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        alert("success");
      })
      .catch((error) => {
        alert(`Error: ${error.message}`);
      });
  };

  return (
    <div>
      <h1>SIGN UP PAGE</h1>
      <div>
        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="">password</label>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button onClick={signUp}>Sign Up</button>
      </div>
    </div>
  );
}

export default SignUp;
