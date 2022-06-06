import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "./axios";
import Swal from "sweetalert2";

function UpdateUser() {
  const [email, setEmail] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/user")
      .then((res) => setEmail(res.data.user.email))
      .catch((e) => {
        console.log("Error Found !!");
      });
  }, []);
  const updateUser = () => {
    axios
      .put("http://localhost:8000/api/user", {
        user: {
          email: email,
        },
      })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Email Updated",
        });
      })
      .catch((e) => {
        console.log("Erorr Found!!");
        Swal.fire({
          icon: "question'",
          title: "An Error Occured",
        });
      });
  };
  return (
    <>
      {" "}
      <div className="d-flex justify-content-center">
        <h1>Update Email</h1>
      </div>
      <form onKeyPress={(e) => e.key === "Enter" && updateUser()}>
        {" "}
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
                defaultValue={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button
            type="button"
            class="btn btn-outline-secondary"
            onClick={() => updateUser()}
          >
            Done
          </button>
        </div>
      </form>
    </>
  );
}

export default UpdateUser;
