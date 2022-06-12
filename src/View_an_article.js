import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "./axios";
import { URL } from "./Constants";
import Swal from "sweetalert2";

function View_an_article({ slug, SetEditArticle }) {
  const navigate = useNavigate();
  const [article, setArticle] = useState([]);
  const [comment, setComment] = useState("");
  useEffect(() => {
    console.log(slug);
    let sl = localStorage.getItem("slug");
    axios
      .get(`http://localhost:8000/api/articles/${sl}`)
      .then((res) => {
        console.log(res);
        console.log(slug);
        setArticle(res.data.article);
        SetEditArticle(res.data.article.body);
        localStorage.setItem("editBody", res.data.article.body);
      })
      .catch((e) => {
        console.log("Error found !!");
        console.log(slug);
      });
  }, []);
  const deleteArticle = () => {
    let sl = localStorage.getItem("slug");
    axios
      .delete(`${URL}/articles/${sl}`)
      .then(() => {
        Swal.fire({
          //position: 'top-end',
          icon: "success",
          title: "Your Article is Deleted",
        });
        navigate("./../searchBar/all_articles");
      })
      .catch((e) => {
        Swal.fire({
          icon: "error",
          title: "You can only Delete the articles posted by you",
        });
        // console.log(e);
        // console.log("Can't Delete");
      });
  };

  // const postComment = () => {
  //   let sl = localStorage.getItem("slug");
  //   axios
  //     .post(`${URL}/articles/${sl}/comments`, {
  //       comment: {
  //         body: comment,
  //       },
  //     })
  //     .then(() => {
  //       Swal.fire({
  //         icon: "success",
  //         title: "Comment Posted",
  //       });
  //     })
  //     .catch((e) => console.log("Error Found !!!"));
  // };

  return (
    <>
      <h1>{article.title}</h1>
      <br />
      <h5>
        <span className="lightFont">Description :</span> {article.description}
      </h5>
      <br />
      <p>{article.body}</p>
      <div className="d-flex align-items-center justify-content-center">
        <button
          type="button"
          class="btn btn-outline-info mx-3"
          onClick={() => navigate("./../edit_article")}
        >
          Edit{" "}
        </button>
        <button
          type="button"
          class="btn btn-outline-danger"
          onClick={() => deleteArticle()}
        >
          Delete
        </button>
      </div>
      {/* <input
        onChange={(event) => {
          setComment(event.target.value);
        }}
      ></input>
      <button className="btn btn-primary" onClick={() => postComment()}>
        Comment
      </button> */}
    </>
  );
}

export default View_an_article;
