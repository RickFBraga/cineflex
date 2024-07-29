import styled from "styled-components";
import Logo from "../assets/clapperboard.svg";

export default function Header() {
  const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: #ee897f;
    gap: 15px;
  `;

  const Title = styled.h1`
    color: #fadbc5;
    font-size: 32px;
    font-weight: 600;
    font-family: Raleway;
  `;

  return (
    <div>
      <HeaderContainer>
        <img src={Logo} alt="" />
        <Title>Cineflex</Title>
      </HeaderContainer>
    </div>
  );
}
