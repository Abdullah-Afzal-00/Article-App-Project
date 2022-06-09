import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "./../axios";
import { URL } from "./../Constants";
import Articles_by_author from "./Articles_by_author";
import Swal from "sweetalert2";

function SearchBar({ setAuthorName, setArticleByAuthor, setArticleByTag }) {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [tag, setTag] = useState();
  //const [article, setArticle] = useState([]);
  const goToauthorArticlePage = () => {
    //console.log(name);
    axios
      .get(`${URL}/articles?author=${name}`)
      .then((res) => {
        console.log(res.data.articles);
        setArticleByAuthor(res.data.articles);
        //setArticle(res.data.articles);
        localStorage.setItem("article", JSON.stringify(res.data.articles));
        navigate("./article_by_author");
        //window.location.reload(<Articles_by_author />);
      })
      .catch((e) => {
        console.log("Error in search Bar");
      });
  };
  const goToTagArticlePage = () => {
    axios
      .get(`${URL}/articles?tag=${tag}`)
      .then((res) => {
        console.log(res.data.articles);
        setArticleByTag(res.data.articles);
        //setArticle(res.data.articles);
        localStorage.setItem("article", JSON.stringify(res.data.articles));
        navigate("./article_by_tag");
        //window.location.reload(<Articles_by_author />);
      })
      .catch((e) => {
        console.log("Error in search Bar");
      });
  };
  return (
    <div>
      <br />
      <form class="d-flex">
        <div className="row">
          <div className="mycol-1">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search by Author name or Tag"
              aria-label="Search"
              onChange={(event) => {
                setAuthorName(event.target.value);
                setName(event.target.value);
                setTag(event.target.value);
              }}
            />
            <div className="mt-3">
              <button
                class="btn btn-outline-success"
                type="button"
                onClick={() => goToauthorArticlePage()}
              >
                Search by Author
              </button>
              <button
                class="btn btn-outline-success mx-3"
                type="button"
                onClick={() => goToTagArticlePage()}
              >
                Search by Tag
              </button>
            </div>
          </div>
        </div>
      </form>
      <br />
      <Outlet />
    </div>
  );
}

export default SearchBar;
