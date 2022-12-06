import React, { useState } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Slider from "./Slider";
import Movies from "./Movies";
import MovieDetails from "./MovieDetails";
import Reviews from "./Reviews";
import About from "./About";

export default function Menu() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      navigate(`../search`, { replace: true });
    }
  };

  return (
    <>
      <Navbar
        variant="dark"
        sticky="top"
        expand={"sm"}
        style={{
          backgroundColor: "black",
        }}
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            Movies App
          </Navbar.Brand>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <Button
              variant="outline-warning"
              onClick={() => navigate(`../search`, { replace: true })}
            >
              Search
            </Button>
          </Form>
        </Container>
      </Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <Movies />
            </>
          }
        />
        <Route
          path="about"
          element={
            <>
              <About />
            </>
          }
        />
        <Route
          path="search"
          element={
            <>
              <Movies search={search} />
            </>
          }
        />
        <Route
          path="details/:id"
          element={
            <>
              <MovieDetails />
              <Reviews />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <Slider />
              <Movies />
            </>
          }
        />
      </Routes>
    </>
  );
}
