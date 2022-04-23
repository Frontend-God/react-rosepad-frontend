import { Outlet } from "react-router";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  height: 100vh;
  margin: 0 auto 0 auto;
  background: ${({ theme }) => theme.bg};
  padding-bottom: 5rem;
`;

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 5rem 0;
  margin: 2rem auto 0 auto;
  max-width: min(1920px, calc(100% - 16rem));

  @media (max-width: 1024px) {
    max-width: calc(100% - 1rem);
  }
`;

export default () => {
  return (
    <Wrapper>
      <Container>
        <Outlet />
      </Container>
    </Wrapper>
  );
};
