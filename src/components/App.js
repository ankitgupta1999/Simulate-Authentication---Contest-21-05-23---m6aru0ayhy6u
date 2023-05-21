import React,{useState} from "react";
import "../styles/App.css";
import User from "../models/user";

const App = () => {
  const [flag,setFlag]=useState(true);
  const [userdetails,setUserdetails]=useState(new User(null,null,null));
  const [logindetails,setlogindetails]=useState(new User(null,null,null));
  function auth(){
    const signupName=document.getElementById('signupName').value;
    const signupEmail=document.getElementById('signupEmail').value;
    const signupPassword=document.getElementById('signupPassword').value;
    const signupConfirmPassword=document.getElementById('signupConfirmPassword').value;
    if(signupPassword===signupConfirmPassword){
      setUserdetails(new User(signupEmail,signupPassword,signupName));
    }
  }
  function auth2(){
    const loginEmail=document.getElementById('loginEmail').value;
    const loginPassword=document.getElementById('loginPassword').value;
    if(loginPassword===userdetails.password){
      setlogindetails(new User(userdetails.email,userdetails.password,userdetails.name));
      setFlag(false);
    }
  }
  function logout(){
    setFlag(true);
  }
  if(flag){
  return (
    <div id="main">
      <table id="all-users">
      <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
          <tr>
            <td>{userdetails.name}</td>
            <td>{userdetails.email}</td>
            <td>{userdetails.password}</td>
          </tr>
        </tbody>
      </table>

      <div>
        <form className="signup-form">
          <label htmlFor="name">Name</label>
          <input type="text" name="signupName" id="signupName" />
          <label htmlFor="email">Email</label>
          <input type="email" name="signupEmail" id="signupEmail" />
          <label htmlFor="password">Password</label>
          <input type="password" name="signupPassword" id="signupPassword" />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="signupConfirmPassword"
            id="signupConfirmPassword"
          />
        </form>
        <button id="signup-button" onClick={auth}>Signup</button>
        <form className="login-styles">
          <label htmlFor="loginEmail">Email</label>
          <input id="loginEmail" name="loginEmail" type="email" />
          <label htmlFor="loginPassword">Password</label>
          <input id="loginPassword" name="loginPassword" type="password" />
        </form>
        <button id="login-button" onClick={auth2}>Login</button>
      </div>
      </div>
      );
}
else{
     return (
      <div id="main">
      <table id="all-users">
      <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
          <tr>
            <td>{userdetails.name}</td>
            <td>{userdetails.email}</td>
            <td>{userdetails.password}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <h3 id="username">{logindetails.name}</h3>
        <h3 id="email">{logindetails.email}</h3>
        <button id="logout-button" onClick={logout}>Logout</button>
      </div>
    </div>
  );
}
};

export default App;
