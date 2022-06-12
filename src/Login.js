import React, { useEffect } from "react";
import { useState } from "react";
import axios from "./axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [visibilty, setVisibility] = useState(false);
  const [textType, setTextType] = useState("password");

  useEffect(() => localStorage.clear(), []);

  const checkCredentials = (e) => {
    //e.preventDefault();
    console.log(username, password);
    axios
      .post("http://localhost:8000/api/users/login", {
        user: { email: username, password: password },
      })
      .then((res) => {
        window.localStorage.setItem("token", res.data.user.token);
        console.log(res);
        //setUsernameID(res.data.user.username);
        localStorage.setItem("username", res.data.user.username);
        navigate("/main");
      })
      .catch((e) => {
        console.log("Erorr Found");
        Swal.fire({
          icon: "error",
          title: "Invalid User ID or Password",
        });
      });
  };
  const goToSignUp = () => {
    navigate("/signUp");
  };

  const changeVisibility = () => {
    visibilty ? setTextType("password") : setTextType("text");
    setVisibility(!visibilty);
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <h1>Login</h1>
      </div>
      <form onKeyPress={(e) => e.key === "Enter" && checkCredentials()}>
        <div className="d-flex justify-content-center">
          <div className="d-inline-flex p-4">
            {" "}
            <div class="input-group flex-nowrap">
              <span class="input-group-text" id="addon-wrapping">
                Email{" "}
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="d-inline-flex p-4">
            {" "}
            <div class="input-group flex-nowrap">
              <span class="input-group-text" id="addon-wrapping">
                Password
              </span>
              <div className="position-relative">
                <input
                  type={textType}
                  className="form-control"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="addon-wrapping"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <a onClick={() => changeVisibility()} className="eye">
                  {visibilty ? (
                    <i class="far fa-eye-slash" id="togglePassword" />
                  ) : (
                    <i class="far fa-eye" id="togglePassword" />
                  )}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button
            type="button"
            class="btn btn-dark"
            onClick={() => checkCredentials()}
          >
            Login
          </button>
        </div>
        <div className="d-flex justify-content-center">
          <p>If you don't have ID, then Sign up here!</p>
        </div>
      </form>
      <div className="d-flex justify-content-center">
        <button type="button" class="btn btn-dark" onClick={() => goToSignUp()}>
          Sign Up
        </button>
      </div>
    </>
  );
}

export default Login;
