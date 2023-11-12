import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { motion } from "framer-motion";
const SortAndSearch = ({
  getSearch,
  setSearch,
  search,
  movieOrder,
  changeMovieOrder,
}) => {
  return (
    <div className="sort__and__search">
      <form onSubmit={getSearch}>
        <input
          type="text"
          placeholder="Search"
          className="input__search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="search__button"
        >
          <AiOutlineSearch style={{ fontWeight: "bold", fontSize: "16px" }} />
        </motion.button>
      </form>
      <div className="sort__container">
        <label htmlFor="sortBy">Sort By:</label>
        <select
          name="sortBy"
          id="sortBy"
          className="sort"
          onChange={changeMovieOrder}
        >
          <option value="by-opening-date">Most Recent</option>
          <option value="by-publication-date">Oldest</option>
          <option value="by-title">Title</option>
        </select>
      </div>
    </div>
  );
};

export default SortAndSearch;
