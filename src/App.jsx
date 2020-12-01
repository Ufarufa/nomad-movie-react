import React, { useState, useEffect } from "react";
import Axios from "axios";
import Movies from "./Movies";
import "./App.css"

const YTS_END_POINT = "https://yts-proxy.now.sh/";

function App() {
  const [isLoading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    Axios.get(`${YTS_END_POINT}list_movies.json?sort_by=rating`).then((res) => {
      //console.log(res.data.data.movies);
      const movies = res.data.data.movies;
      setLoading(false);
      setMovies(movies);
    });
  }, []);

  return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loding...</span>
        </div>
      ) : (
        <div className="movies">
          {movies.map((movie) => {
            return (
              <Movies
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              ></Movies>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default App;
