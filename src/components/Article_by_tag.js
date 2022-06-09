import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Article_by_tag({ articleByTag, setSlug }) {
  let navigate = useNavigate();
  var temp;
  useEffect(() => {});
  temp = JSON.parse(localStorage.getItem("article"));
  const goToViewArticlePage = (data) => {
    setSlug(data);
    localStorage.setItem("slug", data);
    navigate("./../../view_an_article");
  };
  if (articleByTag.length === 0 && temp.length === 0) {
    return <h1 className="text-center">No Article Found</h1>;
  }
  return (
    <>
      {articleByTag.length !== 0
        ? articleByTag.map((d, index) => {
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

export default Article_by_tag;
