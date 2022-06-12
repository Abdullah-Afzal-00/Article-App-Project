import React from "react";
import { useEffect, useState } from "react";
import axios from "./axios";
import { useNavigate } from "react-router-dom";
import { URL } from "./Constants";

function Home() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [imgSrc, setImageSrc] = useState("");

  let usr = localStorage.getItem("username");
  const goToUpdatePage = () => {
    navigate("updateUser");
  };
  useEffect(() => {
    //let usr = localStorage.getItem("username");
    axios
      .get(`${URL}/user`)
      .then((res) => {
        // console.log(res);
        //console.log(res.data.user.username, res.data.user.email);
        setUsername(res.data.user.username);
        setEmail(res.data.user.email);
      })
      .catch((e) => console.log("Error Found !!"));

    axios
      .get(`${URL}/profiles/${usr}`)
      .then((res) => {
        console.log(res);
        setImageSrc(res.data.profile.image);
      })
      .catch((e) => console.log("Error Found !!!"));
  }, []);
  return (
    <>
      <div className="d-flex justify-content-center">
        <h1>Hello {usr}!</h1>
      </div>
      <div class="d-flex justify-content-center mb-4">
        <div class="flex-shrink-0">
          <img src={imgSrc} alt="Picture of User" className="rounded-circle" />
        </div>
      </div>
      <div className="card">
        <ul className="list-group list-group-flush">
          <div className="d-flex justify-content-center">
            <li className="list-group-item">Personal Information</li>
          </div>
          <li className="list-group-item">User Name = {usr}</li>
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
