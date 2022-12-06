import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";
import ReadMore from "./ReadMore";
import avatarImage from "../images/user.png";

function Reviews() {
  const [reviews, setReviews] = useState();
  const urlImageAvatar = "https://image.tmdb.org/t/p/w200";
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=d3ae3a369b6e0c351305491b7980a38b`
      )
      .then((response) => setReviews(response.data.results));
  }, [id]);

  const checkAvatarUrl = (url) => {
    if (url) {
      if (url.substring(1, 5) === "http") {
        return url.slice(1);
      } else {
        return `${urlImageAvatar}${url}`;
      }
    } else {
      return avatarImage;
    }
  };

  if (!reviews) {
    return <></>;
  }

  return (
    <Container>
      <Row className="text-center" style={{ marginTop: "50px" }}>
        <h2>{reviews.length > 0 ? "Reviews" : ""}</h2>
      </Row>
      {reviews.map((review) => (
        <Row key={review.id} style={{ marginBottom: 20 }}>
          <Col md="0" lg="1">
            <img
              className="rounded-circle float-right"
              style={{ width: "70px", height: "70px", objectFit: "cover" }}
              src={checkAvatarUrl(review.author_details.avatar_path)}
              alt="User"
            />
          </Col>
          <Col md="12" lg="10">
            <h4>{review.author}</h4>
            <ReadMore>{review.content}</ReadMore>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default Reviews;
