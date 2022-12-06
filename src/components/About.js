import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import themovieImg from "../images/themoviedb.svg";
import reactImg from "../images/React.png";

const About = () => {
  return (
    <>
      <Container>
        <Row className="text-center">
          <Col>
            <h1 style={{ marginBottom: 50 }}>About</h1>
            <img
              src={themovieImg}
              alt="PokeApi"
              style={{ height: "8rem", marginRight: 50 }}
            />
            <img src={reactImg} alt="React" style={{ height: "12rem" }} />
            <br />
            <br />
            <p>TheMovieDB and React used for the creation of this app.</p>
            <p>Created by Sergio Cervantes using React, 2022</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
