import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import NewsList from "./components/NewsList";

//API_key = e7d45b40e9c64cbe8521f2905699a9b8

function App() {

  const [category, setCategory] = useState("");
  const [news, setNews ] = useState([]);

  useEffect(() => {
    const apiQuery = async () => {
      
          const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=e7d45b40e9c64cbe8521f2905699a9b8`;
          const response = await fetch(url)
          const result = await response.json()
          setNews(result.articles)
        };
        apiQuery();
  }, [category]);

  return (
    <Fragment>
      <Header title="News seracher" />
      <div className="container white">
        <Form setCategory={setCategory} />
        <NewsList news={news} />
      </div>
    </Fragment>
  );
}

export default App;
