import styled from 'styled-components';

const CardSubtitle = styled.p`
  font-size: 1.5rem;
  text-align: center;
  padding: 0;
  margin: 0;

  @media (max-width: 950px) {
    font-size: 1rem;
  }

  @media (max-width: 750px) {
    font-size: 0.8rem;
  }

  @media (max-width: 550px) {
    font-size: 0.7rem;
  }
`;

export default CardSubtitle;