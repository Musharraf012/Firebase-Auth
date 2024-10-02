import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password).then((res) => {
      console.log(res);
    });
  };
  return (
    <div>
      <div>
        <label htmlFor="">email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="">password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button onClick={signIn}>submit</button>
      </div>
    </div>
  );
}

export default SignIn;
