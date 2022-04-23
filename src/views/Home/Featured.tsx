import GameCard from "components/GameCard";
import GradientBtn from "components/GradientBtn";
import { T_PROJECTS } from "mock";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-family: "Nasalization";
  color: ${({ theme }) => theme.primary};
  align-self: center;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const Items = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: 5rem;
  grid-auto-rows: 17rem;
  margin-bottom: 2rem;
  margin: 2rem 0;
  padding: 0 3rem;
`;

const Featured = () => {
  return (
    <Container>
      <Title>Featured Projects</Title>
      <Items>
        {T_PROJECTS.slice(0, 3).map((i, index) => (
          <GameCard index={index} key={i.id} {...i} />
        ))}
      </Items>
      <GradientBtn animateOnHover>View all Projects</GradientBtn>
    </Container>
  );
};

export default Featured;
