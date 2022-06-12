import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import Home from "./Home";
import SignUp from "./SignUp";
import UpdateUser from "./UpdateUser";
import Main from "./Main";
import Add_Article from "./Add_Article";
import All_Articles from "./All_Articles";
import View_an_article from "./View_an_article";
import SearchBar from "./components/SearchBar";
import Articles_by_author from "./components/Articles_by_author";
import Edit_Article from "./components/Edit_Article";
import Article_by_tag from "./components/Article_by_tag";
import Protected from "./components/protected";

function App() {
  const [slug, setSlug] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [searchTag, setSearchTag] = useState("");
  const [articleByAuthor, setArticleByAuthor] = useState([]);
  const [articleByTag, setArticleByTag] = useState([]);
  const [editArticle, SetEditArticle] = useState([]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route element={<Protected />}>
          {" "}
          <Route path="/main" element={<Main />}>
            <Route path="" element={<Home />}></Route>
            <Route path="updateUser" element={<UpdateUser />}></Route>
            <Route path="add_article" element={<Add_Article />}></Route>
            <Route
              path="searchBar"
              element={
                <SearchBar
                  setAuthorName={setAuthorName}
                  setSearchTag={setSearchTag}
                  setArticleByAuthor={setArticleByAuthor}
                  setArticleByTag={setArticleByTag}
                />
              }
            >
              {" "}
              <Route
                path="all_articles"
                element={<All_Articles setSlug={setSlug} />}
              ></Route>
              <Route
                path="article_by_author"
                element={
                  <Articles_by_author
                    authorName={authorName}
                    setSlug={setSlug}
                    articleByAuthor={articleByAuthor}
                    setArticleByAuthor={setArticleByAuthor}
                  />
                }
              ></Route>
              <Route
                path="article_by_tag"
                element={
                  <Article_by_tag
                    searchTag={searchTag}
                    setSlug={setSlug}
                    articleByTag={articleByTag}
                  />
                }
              ></Route>
            </Route>
            <Route
              path="view_an_article"
              element={
                <View_an_article
                  slug={slug}
                  SetEditArticle={SetEditArticle}
                  setSlug={setSlug}
                />
              }
            ></Route>
            <Route
              path="edit_article"
              element={<Edit_Article slug={slug} editArticle={editArticle} />}
            ></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
