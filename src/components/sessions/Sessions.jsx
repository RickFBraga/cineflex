import styled from "styled-components";
import Session from "./Session";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

const Subtitle = styled.h2`
  text-align: center;
  color: #fff;
  font-size: 24px;
  font-family: Sarala;
  font-weight: 400;
`;

export default function Sessions() {
  const [showSession, setShowSession] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();
  const movieName = location.state?.movieName || "Nome do Filme";

  useEffect(() => {
    axios
      .get(
        `https://mock-api.driven.com.br/api/v8/cineflex/movies/${movieId}/showtimes`
      )
      .then((response) => {
        setShowSession(response.data.days);
        setLoading(false);
      })
      .catch((error) => {
        console.error("API Error:", error.response.data);
        setError("Ocorreu um erro ao carregar as sessões.");
        setLoading(false);
      });
  }, [movieId]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Subtitle>Selecione o horário</Subtitle>
      <div>
        {showSession.map((session) => (
          <Session
            key={session.id}
            weekday={session.weekday}
            date={session.date}
            showtimes={session.showtimes}
            movieId={movieId}
            movieName={movieName}
          />
        ))}
      </div>
    </>
  );
}
