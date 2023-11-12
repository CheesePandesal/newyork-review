import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import MovieReviews from './components/MovieReviews'
import { CircleIndicator } from './components/CircleIndicator';

function App() {
  const apiKey = "6xA6btZr9r2YyutPpcOfGtdhTndoxLAO";
  const [reviews, setReviews] = useState([]);
  const [offsetNum, setOffsetNum] = useState(0);
  const [morePages, setMorePages] = useState();
  const [movieOrder, setMovieOrder] = useState("by-opening-date");
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getReviews();
    // eslint-disable-next-line
  }, [offsetNum, movieOrder, query]);
  const nextPage = () => {
    if (morePages) {
      setOffsetNum(offsetNum + 20);
    }
  };

  const prevPage = () => {
    if (offsetNum !== 0) {
      setOffsetNum(offsetNum - 20);
    }
  };
  const changeMovieOrder = (e) => {
    setMovieOrder(e.target.value);
    setOffsetNum(0);
    console.log(movieOrder);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setOffsetNum(0);
    setQuery(search);
  };
  const getReviews = async () => {
    setLoading(true);
    const response = await fetch(
      `https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=${apiKey}&offset=${offsetNum}&order=${movieOrder}&query=${query}`
    );
    const reviewData = await response.json();
    setReviews(reviewData.results);
    setMorePages(reviewData.has_more);
    setLoading(false);
    console.log(reviewData);
  };
  return (
    <>
      <CircleIndicator />
      <Header getSearch={getSearch} setSearch={setSearch} search={search} nextPage={nextPage} prevPage={prevPage} movieOrder={movieOrder} changeMovieOrder={changeMovieOrder} offsetNum={offsetNum}/>
      <MovieReviews reviews={reviews} loading={loading}/>
    </>
  )
}

export default App
