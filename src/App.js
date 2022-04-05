import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { auth } from "./firebase-config"
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"

function App() {


  const [registerUser, setRegisterUser] = useState();
  const [registerPassword, setRegisterPassword] = useState();

  const [loginUser, setLoginUser]=useState();
  const [loginPassword, setLoginPassword] = useState();


  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    // when we referesh the page, we will loose the currnt user inorder to avaoid that we will store the user 
    // whenever there is change in the onAuthStateChanged
    setUser(currentUser)
  })

  const Register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerUser,
        registerPassword
      )
      console.log(user)
      
    }
    catch(e){
    console.log(e);
    }

  

  }




  const Login = async () => {
    
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginUser,
        loginPassword
      )
      console.log(user);
    }
    catch (e) {
      console.log(e);
    }
    
  }


  const logout = async () => {
    await signOut(auth);
    
    


  }


  return (
    <div className="App">
      <div>
        <h3> Register user</h3>
        <input
          placeholder="email..."
          onChange={(e) => setRegisterUser(e.target.value)}
        />

        <input
          // type="password"
          placeholder="password.."
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <button onClick={() => Register()}> Register</button>
      </div>

      <div>
        <h1> login</h1>
        <input
          placeholder="name..."
          onChange={(e) => {
            setLoginUser(e.target.value);
          }}
        />
        <input
          placeholder="password.."
          onChange={(e) => {
            setLoginPassword(e.target.value);
          }}
        />
        <button onClick={()=>Login()}> Login</button>
      </div>

      <button
        onClick={() => {
          logout();
        }}
      >
        SignOut
      </button>

      <h1>Current User:{user?.email}</h1>
    </div>
  );
}

export default App;
