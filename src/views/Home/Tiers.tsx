import CardSwiper from "components/CardSwiper";
import styled from "styled-components";
import rose3 from "../../assets/images/Roses/rose3.png";
import Calculator from "./Calculator";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 3rem 0 0 0;
  padding: 5rem 0 3rem 0;
  position: relative;

  @media (max-width: 1024px) {
    margin-bottom: 5rem;
  }
`;

const Title = styled.h2`
  font-family: "Nasalization";
  color: ${({ theme }) => theme.primary};
  text-transform: uppercase;
  text-align: center;
`;

const Body = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;

  @media (max-width: 1024px) {
    grid-template-columns: 100%;
    grid-auto-rows: 30rem;
  }
`;

const Column = styled.div`
  width: 100%;
`;

const Image = styled.img`
  position: absolute;
  top: 10;
  left: 0;
  width: 70px;
  height: 70px;
  animation: rose 10s linear infinite;
`;

const Tiers = () => {
  return (
    <Container>
      <Title>Tiers</Title>
      <Image src={rose3} />
      <Body>
        <Column>
          <CardSwiper />
        </Column>
        <Column>
          <Calculator />
        </Column>
      </Body>
    </Container>
  );
};

export default Tiers;
