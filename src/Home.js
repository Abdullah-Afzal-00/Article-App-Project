import React from "react";
import { useEffect, useState } from "react";
import axios from "./axios";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const goToUpdatePage = () => {
    navigate("updateUser");
  };
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/user")
      .then((res) => {
        // console.log(res);
        //console.log(res.data.user.username, res.data.user.email);
        setUsername(res.data.user.username);
        setEmail(res.data.user.email);
      })
      .catch((e) => console.log("Error Found !!"));
  }, []);
  return (
    <>
      <div className="d-flex justify-content-center">
        <h1>Hello {username}!</h1>
      </div>
      <div className="card">
        <ul className="list-group list-group-flush">
          <div className="d-flex justify-content-center">
            <li className="list-group-item">Personal Information</li>
          </div>
          <li className="list-group-item">User Name = {username}</li>
          <li className="list-group-item">Email = {email}</li>
        </ul>
      </div>
      <div
        className="d-flex justify-content-center
      "
      >
        <div className="d-inline-flex p-4">
          <button
            type="button"
            class="btn btn-secondary"
            onClick={() => goToUpdatePage()}
          >
            Update User
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
