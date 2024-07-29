import PropTypes from "prop-types";
import styled from "styled-components";

const SeatCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.isSelected ? "#FADBC5" : props.isAvailable ? "#9DB899" : "#FADBC5"};
  border-radius: 12px;
  width: 26px;
  height: 26px;
  margin: 5px;
  color: #2b2d36;
  border: ${(props) =>
    props.isSelected
      ? "2px solid #EE897F"
      : props.isAvailable
      ? "2px solid #212226"
      : "2px solid #EE897F"};
  cursor: ${(props) => (props.isAvailable ? "pointer" : "not-allowed")};
`;

const Seat = ({ seatNumber, isAvailable, isSelected, onClick }) => {
  return (
    <SeatCircle
      isAvailable={isAvailable}
      isSelected={isSelected}
      onClick={isAvailable ? onClick : undefined}
    >
      {seatNumber}
    </SeatCircle>
  );
};

Seat.propTypes = {
  seatNumber: PropTypes.string.isRequired,
  isAvailable: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Seat;
