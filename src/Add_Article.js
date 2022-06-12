import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "./axios";

function Add_Article() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);

  //console.log(description, title, body, tags);
  const deleteTag = (i) => {
    let temp = [...tags];
    temp.splice(i, 1);
    setTags(temp);
    console.log(temp);
  };

  const submitArticle = () => {
    axios
      .post("http://localhost:8000/api/articles", {
        article: { title, description, body, tagList: tags },
      })
      .then(() =>
        Swal.fire({
          //position: 'top-end',
          icon: "success",
          title: "Your Article is Submitted",
        })
      )
      .catch((e) => console.log("Erorr Found !!!"));
  };

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-6 mx-auto">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Title{" "}
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Title"
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Description
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Description"
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Body
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                onChange={(event) => setBody(event.target.value)}
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Tags
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Tags"
                onChange={(event) => setTag(event.target.value)}
              />
            </div>
            <button
              type="button"
              class="btn btn-primary"
              onClick={() => {
                tag === ""
                  ? Swal.fire({
                      position: "top-end",
                      icon: "error",
                      title: "Kindly Write Something in the Tag",
                      showConfirmButton: false,
                      timer: 1500,
                    })
                  : tags.indexOf(tag) === -1
                  ? setTags((state) => [...state, tag])
                  : Swal.fire({
                      position: "top-end",
                      icon: "error",
                      title: "This Tag is already added",
                      showConfirmButton: false,
                      timer: 1500,
                    });
              }}
            >
              Add Tag
            </button>
          </div>
          <ul className="allTags">
            {tags ? (
              tags.map((d, index) => (
                <li className="customTags">
                  <div>
                    <span className="bold">{index + 1}-</span>
                    {d}
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => deleteTag(index)}
                    >
                      X
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <></>
            )}
          </ul>
          <div className="d-flex justify-content-center">
            <div className="d-inline-flex p-2">
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => submitArticle()}
              >
                Submit Article
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Add_Article;
