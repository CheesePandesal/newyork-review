import React, { useEffect } from "react";
import { useAnimation} from "framer-motion";
import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";
const MovieReview = ({ link, title, description, image, year, month, day }) => {
    const controls = useAnimation();
  const [ref, inView] = useInView();
  console.log(inView)
  const movieAnimations = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0 },
    tap: { scale: 0.9 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.a
    href={link}
    target="_blank"
      rel="noopener noreferrer"
      variants={movieAnimations}
      ref={ref}
      initial="hidden"
      animate={controls}
      whileTap="tap"
    >
      <div className="movie__container">
        <div>
          <h2 style={{ marginBottom: "-1px" }}>{title}</h2>
          <hr />
          <p className="movie__description">{description}</p>
          <img src={image} className="movie__image" />
          <p className="movie__year">
            Published: {month}/{day}/{year}
          </p>
        </div>
      </div>
    </motion.a>
  );
};

export default MovieReview;
