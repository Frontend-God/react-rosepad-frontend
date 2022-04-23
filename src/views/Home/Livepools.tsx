import GradientBtn from "components/GradientBtn";
import { T_LIVE_POOLS } from "mock";
import styled from "styled-components";
import ListItem from "./ListItem";

const Container = styled.div`
  width: 100%;
  margin: 3rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

const Title = styled.h2`
  font-family: "Nasalization";
  color: ${({ theme }) => theme.primary};
  align-self: flex-start;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const Table = styled.div`
  overflow: scroll;
  border-radius: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  -webkit-box-shadow: inset 0 0 5rem ${({ theme }) => theme.primary}80;
  -moz-box-shadow: inset 0 0 5rem ${({ theme }) => theme.primary}80;
  box-shadow: inset 0 0 5rem ${({ theme }) => theme.primary}80;
  max-height: calc(100vh - 16rem);
  min-height: 16rem;
`;

export default () => {
  return (
    <Container>
      <Title>Live Pools</Title>
      <Table>
        {T_LIVE_POOLS.map((e) => (
          <ListItem key={e.id} {...e} />
        ))}
      </Table>
      <GradientBtn stroked>View more Pools</GradientBtn>
    </Container>
  );
};
