import React from "react";
import MovieReview from "./MovieReview";

const MovieReviews = ({ reviews, loading }) => {
  return (
    <div>
      <main>
        {!loading && (
          <div className="movie__list">
            {reviews.length === 0 && <h2>No results</h2>}
            {reviews.map((review, index) => (
              <MovieReview
                key={index}
                link={review.link.url}
                title={
                  review.display_title === null
                    ? "No Title Found"
                    : review.display_title
                }
                description={
                  review.summary_short === null
                    ? "No Summary Found"
                    : review.summary_short
                }
                image={review.multimedia.src}
                year={review.publication_date.substring(0, 4)}
                month={review.publication_date.substring(5, 7)}
                day={review.publication_date.substring(8, 10)}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default MovieReviews;
