import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import movieImg from "../images/movie.jpg";

function MovieDetails() {
  const [details, setDetails] = useState();
  const urlImage = "https://image.tmdb.org/t/p/w500";
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=d3ae3a369b6e0c351305491b7980a38b`
      )
      .then((response) => setDetails(response.data));
  }, [id]);

  if (!details) {
    return (
      <Container>
        <Row>
          <Col className="text-center">
            <h1>Loading Details...</h1>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <>
      <Container>
        <Row
          style={{ marginTop: "2vh", marginBottom: "5vh" }}
          className="text-center"
        >
          <h1>{details.title}</h1>
        </Row>
        <Row>
          <Col lg="6" md="12">
            <Card style={{ width: "100%" }}>
              <Card.Img
                src={
                  details.backdrop_path
                    ? `${urlImage}${details.backdrop_path}`
                    : movieImg
                }
                alt={details.title}
              />
            </Card>
          </Col>
          <Col style={{ marginTop: "20px" }}>
            <h3>{details.title}</h3>
            <p>{details.overview}</p>
            <p>
              Genres:{" "}
              {details.genres.map(
                (genre, index) => (index ? ", " : "") + genre.name
              )}
            </p>
            <p>Release Date: {details.release_date}</p>
            <p>Votes: {details.vote_count}</p>
            <Rating
              initialValue={Math.floor((details.vote_average / 2) * 100) / 100}
              readonly={true}
              size={25}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MovieDetails;
