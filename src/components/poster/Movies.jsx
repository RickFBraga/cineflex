import styled from "styled-components";
import Movie from "./Movie";
import { useEffect, useState } from "react";
import axios from "axios";

const Subtitle = styled.h2`
  text-align: center;
  color: #fff;
  font-size: 24px;
  font-family: Sarala;
  font-weight: 400;
`;

const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 26px;
`;

export default function Movies() {
  const [poster, setPoster] = useState([]);

  useEffect(() => {
    axios
      .get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
      .then((response) => {
        setPoster(response.data);
      })
      .catch((error) => {
        console.error(error.response);
      });
  }, []);

  return (
    <>
      <Subtitle>Em Cartaz</Subtitle>
      <MoviesContainer>
        {poster.map((movie) => (
          <Movie
            key={movie.id}
            posterURL={movie.posterURL}
            movieId={movie.id}
            movieName={movie.title}
          />
        ))}
      </MoviesContainer>
    </>
  );
}
