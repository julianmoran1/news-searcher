import React from "react";
import styles from "./Form.module.css";
import useSelect from "../hooks/useSelect";
import PropTypes from "prop-types";


export default function Form({ setCategory }) {
  const OPTIONS = [
    { value: "general", label: "General" },
    { value: "business", label: "Business" },
    { value: "entertainment", label: "Entertainment" },
    { value: "health", label: "Health" },
    { value: "science", label: "Science" },
    { value: "sports", label: "Sports" },
    { value: "technology", label: "Technology" },
  ];

  const [category, SetCategory] = useSelect("general", OPTIONS);

  const searchNews = (event) => {
    event.preventDefault();
    setCategory(category)
  };

  return (
    <div className={`row ${styles.searcher}`}>
      <div className="col s12 m8 offset-m2">
        <form onSubmit={searchNews}>
          <h2 className={styles.heading}>Find news by category</h2>
          <SetCategory />
          <div className="input-field col s12">
            <button
              type="submit"
              className={`btn-large amber darken-2 ${styles.btn_block}`}
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );

}

Form.propTypes = {
  setCategory: PropTypes.func.isRequired
}