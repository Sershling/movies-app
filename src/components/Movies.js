import React, { useState, useEffect } from "react";
import "../css/Movies.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Card, Container, Row, Col } from "react-bootstrap";

function Movies(props) {
  const [movies, setMovies] = useState();
  const navigate = useNavigate();
  const urlImage = "https://image.tmdb.org/t/p/w300";
  let url =
    "https://api.themoviedb.org/3/movie/popular?api_key=d3ae3a369b6e0c351305491b7980a38b";
  if (props.search) {
    url = `https://api.themoviedb.org/3/search/movie?api_key=d3ae3a369b6e0c351305491b7980a38b&query=${props.search}`;
  }

  useEffect(() => {
    axios.get(url).then((response) => setMovies(response.data.results));
  }, [url]);

  if (!movies) {
    return (
      <Container>
        <Row>
          <Col className="text-center">
            <h1>Loading Movies...</h1>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container fluid>
      <Row>
        {movies.map((movie) => {
          if (!movie.poster_path) return <></>;

          return (
            <Col lg="3" md="4" sm="6" xs="12" key={movie.id} className="mt-3">
              <Card
                style={{ width: "250px" }}
                className="mx-auto card"
                onClick={() =>
                  navigate(`../details/${movie.id}`, { replace: true })
                }
              >
                <Card.Img
                  style={{ height: "375px" }}
                  src={`${urlImage}${movie.poster_path}`}
                  alt={movie.title}
                />
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Movies;
