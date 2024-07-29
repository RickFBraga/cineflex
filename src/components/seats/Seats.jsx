import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Seat from "./Seat";
import Line from "../../assets/line.svg";

const Subtitle = styled.h2`
  text-align: center;
  color: #fff;
  font-size: 24px;
  font-family: Sarala;
  font-weight: 400;
`;

const SeatContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

const LineImage = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 38px;
  height: 2px;
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 24px;
  color: #fff;
  font-weight: 400;
  font-family: Sarala;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Input = styled.input`
  height: 40px;
  width: 338px;
  border: 0;
  border-radius: 8px;
  margin-top: 8px;
  padding: 0 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0;
`;

const ReserveButton = styled.button`
  width: 225px;
  height: 42px;
  border: 0;
  border-radius: 8px;
  background-color: #ee897f;
  color: #fff;
  font-weight: 400;
  font-family: Sarala;
  font-size: 18px;
  cursor: pointer;
`;

export default function Seats() {
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const { movieId } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { movieName, sessionDate } = state || {};

  useEffect(() => {
    axios
      .get(
        `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${movieId}/seats`
      )
      .then((response) => {
        setSeats(response.data.seats);
      })
      .catch((error) => {
        console.error("API Error:", error.response?.data || error.message);
      });
  }, [movieId]);

  const handleSeatClick = (id) => {
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(id)
        ? prevSelectedSeats.filter((seatId) => seatId !== id)
        : [...prevSelectedSeats, id]
    );
  };

  const handleReservation = (e) => {
    e.preventDefault();
    const reservationData = {
      ids: selectedSeats,
      name,
      cpf,
    };

    axios
      .post(
        "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many",
        reservationData
      )
      .then((response) => {
        navigate("/order", {
          state: {
            selectedSeats: selectedSeats.map(
              (seatId) =>
                seats.find((seat) => seat.id === seatId)?.name || seatId
            ),
            name,
            cpf,
            movieName,
            sessionDate,
          },
        });
      })
      .catch((error) => {
        console.error("API Error:", error.response?.data || error.message);
      });
  };

  return (
    <>
      <Subtitle>Selecione o(s) assento(s)</Subtitle>
      <SeatContainer>
        {seats.map((seat) => (
          <Seat
            key={seat.id}
            seatNumber={seat.name}
            isAvailable={seat.isAvailable}
            isSelected={selectedSeats.includes(seat.id)}
            onClick={() => handleSeatClick(seat.id)}
          />
        ))}
      </SeatContainer>
      <LineImage>
        <img src={Line} alt="Linha de separação" />
      </LineImage>
      <FormContainer>
        <form onSubmit={handleReservation}>
          <InputContainer>
            <label htmlFor="name">Nome do comprador:</label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="cpf">CPF do comprador:</label>
            <Input
              type="text"
              id="cpf"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
            />
          </InputContainer>
          <ButtonContainer>
            <ReserveButton type="submit">Reservar assento(s)</ReserveButton>
          </ButtonContainer>
        </form>
      </FormContainer>
    </>
  );
}
