import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "./../axios";
import { URL } from "./../Constants";
import { useEffect } from "react";

function Edit_Article({ editArticle, slug }) {
  const [body, setBody] = useState("");
  //console.log(editArticle);
  let temp = localStorage.getItem("editBody");
  let tempSlug = localStorage.getItem("slug");
  //console.log(description, title, body, tags);

  useEffect(() => {
    setBody(temp);
  }, []);

  const submitArticle = () => {
    //console.log(body);
    // console.log(slug);
    axios
      .put(`${URL}/articles/${tempSlug}`, {
        article: { body },
      })
      .then(() =>
        Swal.fire({
          icon: "success",
          title: "Your Article is Edited",
        })
      )
      .catch((e) => console.log("Erorr Found !!!"));
  };

  return (
    <>
      {editArticle.length != 0 ? (
        <div className="container">
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Body
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              defaultValue={editArticle}
              onChange={(event) => {
                setBody(event.target.value);
                console.log(body);
              }}
            ></textarea>
            <div className="d-flex justify-content-center">
              <div className="d-inline-flex p-2">
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => {
                    submitArticle();
                  }}
                >
                  Edit Article
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Body
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              defaultValue={temp}
              onChange={(event) => setBody(event.target.value)}
            ></textarea>
            <div className="d-flex justify-content-center">
              <div className="d-inline-flex p-2">
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => submitArticle()}
                >
                  Edit Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Edit_Article;
