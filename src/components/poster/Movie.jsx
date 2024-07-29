import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Image = styled.img`
  width: 145px;
  height: 210px;
  border-radius: 8px;
  object-fit: contain;
  cursor: pointer;
`;

const ContainerImage = styled(Link)`
  text-decoration: none;
`;

export default function Movie({ posterURL, movieId, movieName }) {
  return (
    <ContainerImage
      to={{
        pathname: `/sessions/${movieId}`,
      }}
      state={{ movieName }}
    >
      <Image src={posterURL} alt={movieName} />
    </ContainerImage>
  );
}

Movie.propTypes = {
  posterURL: PropTypes.string.isRequired,
  movieName: PropTypes.string.isRequired,
  movieId: PropTypes.number.isRequired,
};
