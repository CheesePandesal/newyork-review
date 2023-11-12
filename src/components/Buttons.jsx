import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { BiChevronLeft } from "react-icons/bi";
const Buttons = ({ nextPage, prevPage, offsetNum }) => {
  return (
    <div
      style={{
        marginTop: "25px",
        width: "100%",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        height: "100px",
      }}
    >
      {offsetNum !== 0 && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevPage}
          className="page__button"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BiChevronLeft size={25} />
          <span style={{ marginLeft: "-6px" }}>Previous Page</span>
        </motion.button>
      )}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextPage}
        className="page__button"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ marginRight: "-6px" }}>Next Page</span>
        <BiChevronRight size={25} />
      </motion.button>
    </div>
  );
};

export default Buttons;
