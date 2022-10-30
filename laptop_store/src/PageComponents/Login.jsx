import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginUser(body){
    return fetch(
      "http://127.0.0.1:8000/auth/" ,{
        'method':'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(body)
      }
      
    ).then((resp) => resp.json())
}


function Login() {
  let navigate = useNavigate();
  const [userLog, setUserLog] = useState({
    username: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const handleLogin = (event) => {
    setFormErrors(validate(userLog));
    event.preventDefault();
    console.log("rrre--"+userLog.password);
    fetch(
      "http://127.0.0.1:8000/user/" +
        userLog.username +
        "/" +
        userLog.password
      
    )
      .then((response) => response.json())
      .then((data) => {
        setUserLog(data);
        console.log("data- "+(data))
        if(data=="Error"){
          window.localStorage.removeItem("userData")
          console.log("de "+data);
          
        }
        else{
          console.log("c "+window.localStorage.getItem("userData"));
         
          console.log((data))
       window.localStorage.setItem("userData", JSON.stringify(data));
       navigate("/home");
        window.location.reload();
        }

     
      });
      
      // window.localStorage.setItem("userName", JSON.stringify(userLog.username));
      // console.log("yyy--"+JSON.parse(window.localStorage.getItem("userName"))+"=========="+userLog.username);
      // window.localStorage.setItem("userPassword", JSON.stringify(userLog.password));
      // console.log("iiiiiii--"+JSON.parse(window.localStorage.getItem("userPassword"))+"=========="+userLog.password);
      // setFormErrors(validate(userLog));
      // if(JSON.parse(window.localStorage.getItem("userPassword"))===userLog.password){
      //   console.log("i");
      // }
  };

 
  const validate = (values) => {
    console.log("ooo  "+window.localStorage.getItem("userData"))
    const errors = {};
     
    if (!values.username ) {
      errors.username = "Username is required!";
      window.localStorage.removeItem("userName")
    }
    if (!values.password ) {
      errors.password = "Password is required!";
      window.localStorage.removeItem("userPassword")
    }
    if( window.localStorage.getItem("userData")===null)
   {
    errors.full = "Sorry, your password or username were incorrect";
   }
 
  return errors;
  };

  return (
<div>
<div class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="page-caption">
              <h2 class="page-title">Log in</h2>
              <div class="page-breadcrumb">
                <ol class="breadcrumb">
                  <li><a href="index.html">Home</a></li>
                  <li class="active">Log in</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="content">
        <div className="container">
          <div className="row">
            <div className="login-field">
              <h1>Login Form</h1>
              <p className="log-regist-p"> Please complete the form below.</p>
              <form>
                <div className="row">
                  <div className="login-data">
                    <label className="control-label" htmlFor="username">
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder=""
                      className="form-control"
                      onChange={(e) =>
                        setUserLog((prev) => ({
                          ...prev,
                          username: e.target.value,
                        }))
                      }
                    />
                    <p className="errormess">{formErrors.username}</p>
                  </div>
                 
                  
                  <div className="login-data">
                    <label className="control-label" htmlFor="password">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder=""
                      className="form-control"
                      onChange={(e) =>
                        setUserLog((prev) => ({
                          ...prev,
                          password: e.target.value,
                        }))
                      }
                    />
                     <p className="errormess">{formErrors.password}</p>
                  </div>
                 
                  <div className="col-md-12">
                    <div className="login-register-button">
                      <button
                        id="singlebutton"
                        name="singlebutton"
                        className="btn btn-default login_button"
                        
                        onClick={ // handleLogin
                          (e) => {
                            
                            handleLogin(e);               
                            if(window.localStorage.getItem("userData")==null)
                            {
                              document.getElementById('username').value = ''; 
                              document.getElementById('password').value = '';
                            //  alert("Incorrect username or password");
                            //  navigate("/login");
                              console.log("not logined");
                              
                            //  window.location.reload();
                            }
                            else
                            {
                              
                              console.log("logined");
                            }
                           
                          }
                        }
                      >
                        Login
                      </button>

                      <p className="errormess">{formErrors.full}</p>
                    </div>
                  </div>
                </div>
                <div className="psw">
                  <a href="#"> Forgot password?</a>
                </div>
                <hr />
                <div className="psw">
                  <span>Don't have an account?</span>
                  <a href="/registration"> Sign up</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
</div>
    );
}

export default Login;