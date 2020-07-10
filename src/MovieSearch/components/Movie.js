import React from "react";
import {Card,Row} from "react-bootstrap"
const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    
            <Row className="all">
    <Card className="movie">
      <Card.Title>{movie.Title}</Card.Title>
      <Card.Body>
        <Card.Img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
        <Card.Text>
        {movie.Year}
        </Card.Text>
      </Card.Body>
    </Card>
    </Row>
   
  );
};

export default Movie;