import styled from 'styled-components';

const CardTxt = styled.p`
  font-size: 1.2rem;
  padding: 0 3% 3% 3%;
  text-align: left;

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

export default CardTxt;