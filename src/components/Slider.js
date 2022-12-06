import React, { useState, useEffect } from "react";
import "../css/Slider.css";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import axios from "axios";

function Slider() {
  const [movies, setMovies] = useState();
  const navigate = useNavigate();
  const urlImage = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=d3ae3a369b6e0c351305491b7980a38b"
      )
      .then((response) => setMovies(response.data.results.slice(0, 5)));
  }, []);

  if (!movies) {
    return <></>;
  }
  return (
    <Carousel>
      {movies.map((movie) => (
        <Carousel.Item
          key={movie.id}
          interval={2000}
          style={{
            height: "100%",
            width: "100%",
            cursor: "pointer",
            maxHeight: 600,
          }}
          onClick={() => navigate(`details/${movie.id}`)}
        >
          <img
            className="d-block w-100"
            src={`${urlImage}${movie.backdrop_path}`}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{movie.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;
