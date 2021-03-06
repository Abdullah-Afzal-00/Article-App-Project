import React, { useEffect } from "react";
import axios from "./axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL } from "./Constants";

function All_Articles({ setSlug, setAuthorName, setSearchTag }) {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [tagList, setTagList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/articles")
      .then((res) => {
        setArticles(res.data.articles);
        console.log(res.data.articles);
        //console.log(typeof res.data.articles);
      })
      .catch((e) => console.log(" Error Found !!!"));

    axios
      .get(`${URL}/tags`)
      .then((res) => {
        console.log(res);
        setTagList(res.data.tags);
      })
      .catch((e) => {
        console.log("Error Found !!!");
      });
  }, []);

  const goToViewArticlePage = (data) => {
    setSlug(data);
    localStorage.setItem("slug", data);
    navigate("./../../view_an_article");
  };

  return (
    <>
      <h1 className="d-flex justify-content-center">All Articles</h1>

      <br />
      <h2 className="text-center">Top Trends</h2>
      <div className="d-flex justify-content-center flex-wrap">
        {tagList.map((d, index) => {
          return (
            <div>
              <div className="alert alert-warning d-inline-block mx-1">
                {index + 1} - {d}
              </div>
            </div>
          );
        })}
      </div>
      <div>
        {articles.map((key, index) => {
          return (
            <>
              <div className="articleDiv">
                <h2>{key.title}</h2>
                <h6 className="my-3">{key.description}</h6>
                <h4>
                  <span className="lightFont">Author :</span>{" "}
                  <span className="authorName">{key.author.username}</span>
                </h4>
                <button
                  className="btn btn-primary"
                  onClick={() => goToViewArticlePage(key.slug)}
                >
                  Read
                </button>
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </>
  );
}

export default All_Articles;
