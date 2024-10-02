import { getDatabase, ref, set } from "firebase/database";
import { app } from './firebase'
import './App.css';
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";


const db = getDatabase(app)
function App() {

  return (
    <div className="app">
      <h1>FireBase</h1>
      <SignUp />
      <SignIn />

    </div>
  );
}

export default App;
