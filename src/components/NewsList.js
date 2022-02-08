import React from "react";
import NewsPiece from "./NewsPiece";
import PropTypes from "prop-types";


export default function NewsList({ news }) {
  return (
    <div className="row">
      {news.map((newsPiece) => (
        <NewsPiece key={newsPiece.url} newsPiece={newsPiece} />
      ))}
    </div>
  );
}

NewsList.propTypes = {
  news: PropTypes.array.isRequired
}
