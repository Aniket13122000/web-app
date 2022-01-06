import logo from './logo.svg';
import './App.css';
import Login from './components/login'
import React, { useState } from 'react';
import Axios from 'axios';

function App() {

  const [usernamereg, setusernamereg] = useState('');
  const [passwordreg, setpasswordreg] = useState('');

  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');  

  const [loginstatus, setloginstatus] = useState('');

  const register = () => {
    Axios.post('http://localhost:3002/register', {
      username:usernamereg,
      password: passwordreg
    }).then((response)=>{
      console.log(response.data);
    })
  }

  const login = () => {
    Axios.post('http://localhost:3002/login', {
      username:username,
      password: password
    }).then((response)=>{
      if(response.data[0].usertype == 0){
        user();
      }
      if(response.data[0].usertype == 1){
        // var type = "Hi Admin!";
        admin();
      }
      console.log(response.data);
      console.log(type);
    })
  }

  const user = () => {
    
  }

  const admin = () => {

  }

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-7 col-lg-5">
          <div className="wrap">
            <div className="img" style={{ backgroundImage: 'url(https://preview.colorlib.com/theme/bootstrap/login-form-15/images/xbg-1.jpg.pagespeed.ic.EtoN2PmO7Y.webp)' }} />
            <div className="login-wrap p-4 p-md-5">
              <div className="d-flex">
                <div className="w-100">
                  <h3 className="mb-4">Sign In</h3>
                </div>
              </div>
              <form action="#" className="signin-form">
                <div className="form-group mt-3">
                  <input type="text" className="form-control" onChange={(e)=> {setusername(e.target.value);}} required />
                  <label className="form-control-placeholder" htmlFor="username">Username</label>
                </div>
                <div className="form-group">
                  <input id="password-field" type="password" className="form-control" onChange={(e)=> {setpassword(e.target.value);}} required />
                  <label className="form-control-placeholder" htmlFor="password">Password</label>
                  <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password" />
                </div>
                <div className="form-group">
                  <button type="submit"  onClick={login} className="form-control btn btn-primary rounded submit px-3">Sign In</button>
                </div>
                <div className="form-group d-md-flex">
                  <div className="w-50 text-left">
                    <label className="checkbox-wrap checkbox-primary mb-0">Remember Me
                      <input type="checkbox" defaultChecked />
                      <span className="checkmark" />
                    </label>
                  </div>
                  <div className="w-50 text-md-right">
                    <a href="#">Forgot Password</a>
                  </div>
                </div>
              </form>
              <p className="text-center">Not a member? <a data-toggle="tab" href="#signup">Sign Up</a></p>
            </div>
            <div className="login-wrap p-4 p-md-5">
              <div className="d-flex">
                <div className="w-100">
                  <h3 className="mb-4">Sign Up</h3>
                </div>
              </div>
              <form action="#" className="signin-form">
                <div className="form-group my-3">
                  <input type="text" className="form-control" onChange={(e)=> {setusernamereg(e.target.value);}} required />
                  <label className="form-control-placeholder" htmlFor="username">Username</label>
                </div>
                <div className="form-group mb-3">
                  <input id="password-field" type="password" onChange={(e)=> {setpasswordreg(e.target.value);}} className="form-control" required />
                  <label className="form-control-placeholder" htmlFor="password">Password</label>
                  <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password" />
                </div>
                <div className="form-group">
                  <button type="submit" onClick={register} className="form-control btn btn-primary rounded submit px-3">Sign Up</button>
                </div>
              </form>
              <p className="text-center">Already a member? <a data-toggle="tab" href="#signup">Sign In</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
