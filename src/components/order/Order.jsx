import styled from "styled-components";
import Line from "../../assets/line.svg";
import { useLocation } from "react-router-dom";

const Title = styled.h2`
  color: #9db899;
  font-size: 24px;
  text-align: center;
  font-family: Sarala;
  font-weight: 400;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 338px;
  flex-direction: column;
  background-color: #2b2d36;
  margin: auto;
  border-radius: 8px;
  padding: 16px;

  h3 {
    color: #ee897f;
    font-size: 22px;
    font-weight: 700;
    font-family: Sarala;
    margin: 16px 0 8px 0;
  }

  p {
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    font-family: Sarala;
    margin: 4px 0;
  }
`;

const SubmitButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  cursor: pointer;
  height: 42px;
  width: 338px;
  margin-top: 15px;
  font-size: 18px;
  color: #2b2d36;
  font-weight: 700;
  border-radius: 8px;
  background-color: #ee897f;
`;

export default function Order() {
  const { state } = useLocation();

  const {
    selectedSeats = [],
    name = "",
    cpf = "",
    movieName = "",
    sessionDate = "",
  } = state || {};

  return (
    <>
      <div>
        <Title>Pedido realizado com sucesso!</Title>
      </div>

      <Container>
        <div>
          <h3>Filme e sessão</h3>
          <img src={Line} alt="Line" />
          <p>{movieName}</p>
          <p>{sessionDate}</p>
        </div>

        <div>
          <h3>Assentos</h3>
          <img src={Line} alt="Line" />
          {selectedSeats.length > 0 ? (
            selectedSeats.map((seat, index) => (
              <p key={index}>Assento {seat}</p>
            ))
          ) : (
            <p>Nenhum assento selecionado</p>
          )}
        </div>

        <div>
          <h3>Comprador(a)</h3>
          <img src={Line} alt="Line" />
          <p>Nome: {name}</p>
          <p>CPF: {cpf}</p>
        </div>
      </Container>

      <div>
        <SubmitButton onClick={() => (window.location.href = "/")}>
          Voltar para tela inicial
        </SubmitButton>
      </div>
    </>
  );
}
