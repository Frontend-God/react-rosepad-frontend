import { T_FARMS } from "mock";
import styled from "styled-components";
import GridItem from "./GridItem";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-auto-rows: 24rem;
  gap: 1rem;
`;

export default () => {
  return (
    <Container>
      {T_FARMS.map((e) => (
        <GridItem key={e.id} {...e} />
      ))}
    </Container>
  );
};
