import React from "react";
import { useState } from "react";
import axios from "./axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function SignUp() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const checkCredentials = () => {
    console.log(username, password);
    axios
      .post("http://localhost:8000/api/users", {
        user: { email: email, password: password, username: username },
      })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Sign Up",
        });
        navigate("/home");
      })
      .catch((e) => {
        console.log("Erorr Found");
        console.log(e);
        Swal.fire({
          icon: "error",
          title: "Invalid User ID or Password",
        });
      });
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <h1>Sign Up</h1>
      </div>
      <form onKeyPress={(e) => e.key === "Enter" && checkCredentials()}>
        <div className="d-flex justify-content-center">
          <div className="d-inline-flex p-4">
            {" "}
            <div class="input-group flex-nowrap">
              <span class="input-group-text" id="addon-wrapping">
                User ID
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
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
                Email
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                onChange={(event) => setEmail(event.target.value)}
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
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="addon-wrapping"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          </div>
        </div>
      </form>
      <div className="d-flex justify-content-center">
        <button
          type="button"
          class="btn btn-dark"
          onClick={() => checkCredentials()}
        >
          Sign Up
        </button>
      </div>
    </>
  );
}

export default SignUp;
