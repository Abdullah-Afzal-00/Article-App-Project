import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "./../axios";
import { URL } from "./../Constants";
import Swal from "sweetalert2";

function Articles_by_author({ setSlug, articleByAuthor, setArticleByAuthor }) {
  let navigate = useNavigate();
  var temp;
  useEffect(() => {});
  temp = JSON.parse(localStorage.getItem("article"));
  const goToViewArticlePage = (data) => {
    setSlug(data);
    localStorage.setItem("slug", data);
    navigate("./../../view_an_article");
  };
  return (
    <>
      {articleByAuthor.length !== 0
        ? articleByAuthor.map((d, index) => {
            return (
              <>
                <div className="articleDiv">
                  <h2>{d.title}</h2>
                  <h6 className="my-3">{d.description}</h6>
                  <h4>
                    <span className="lightFont">Author :</span>{" "}
                    <span className="authorName">{d.author.username}</span>
                  </h4>
                  <button
                    className="btn btn-primary"
                    onClick={() => goToViewArticlePage(d.slug)}
                  >
                    Read
                  </button>
                </div>
                <hr />
              </>
            );
          })
        : temp.map((d, index) => {
            return (
              <>
                <div className="articleDiv">
                  <h2>{d.title}</h2>
                  <h6 className="my-3">{d.description}</h6>
                  <h4>
                    <span className="lightFont">Author :</span>{" "}
                    <span className="authorName">{d.author.username}</span>
                  </h4>
                  <button
                    className="btn btn-primary"
                    onClick={() => goToViewArticlePage(d.slug)}
                  >
                    Read
                  </button>
                </div>
                <hr />
              </>
            );
          })}
    </>
  );
}

export default Articles_by_author;
