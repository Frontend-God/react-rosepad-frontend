import { T_FARMS } from "mock";
import styled from "styled-components";
import ListItem from "./ListItem";

const Container = styled.div`
  overflow: scroll;
  border-radius: 1rem;
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
      {T_FARMS.map((e) => (
        <ListItem key={e.id} {...e} />
      ))}
    </Container>
  );
};
