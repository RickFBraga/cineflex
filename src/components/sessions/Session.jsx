import styled from "styled-components";
import Line from "../../assets/line.svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const SchedulesContainer = styled.div`
  display: flex;
  padding: 15px;
  gap: 20px;
`;

const Schedules = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ee897f;
  border: 2px solid #ee897f;
  border-radius: 4px;
  width: 84px;
  height: 41px;
  text-decoration: none;
`;

const SessionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 338px;
  height: 150px;
  margin-bottom: 20px;
  background-color: #2b2d36;
  border-radius: 8px;
  color: #fff;
  font-family: Sarala;
  font-size: 20px;
`;

export default function Session({ weekday, date, showtimes, movieName }) {
  return (
    <Container>
      <SessionContainer>
        <div>
          <p>
            {weekday}, {date}
          </p>
        </div>
        <img src={Line} alt="" />
        <SchedulesContainer>
          {showtimes.map((item) => (
            <Schedules
              key={item.id}
              to={`/seats/${item.id}`}
              state={{ movieName, sessionDate: `${date}, ${item.name}` }}
            >
              <p>{item.name}</p>
            </Schedules>
          ))}
        </SchedulesContainer>
      </SessionContainer>
    </Container>
  );
}

Session.propTypes = {
  weekday: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  showtimes: PropTypes.array.isRequired,
  movieName: PropTypes.string.isRequired,
};
