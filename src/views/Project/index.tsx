import { T_PROJECT } from "mock";
import styled from "styled-components";
import Deadline from "./Deadline";
import Details from "./Details";
import Header from "./Header";
import Info from "./Info";
import Pools from "./Pools";
import ProjectMap from "./ProjectMap";
import Stats from "./Stats";
import Target from "./Target";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto 0 auto;
  background: ${({ theme }) => theme.bg};
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 5rem 0;
  margin: 2rem auto 0 auto;
  max-width: min(1920px, calc(100% - 16rem));

  @media (max-width: 1024px) {
    max-width: calc(100% - 1rem);
  }
`;

const Boards = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-auto-rows: 10rem;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 100%;
  }
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 64% 36%;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 100%;
  }
`;

const Left = styled.div``;

const Right = styled.div``;

export default () => {
  return (
    <Wrapper>
      <Container>
        <Header project={T_PROJECT} />
        <Main>
          <Left>
            <Boards>
              <Deadline project={T_PROJECT} />
              <Target project={T_PROJECT} />
            </Boards>

            <Stats project={T_PROJECT} />
            <Info project={T_PROJECT} />
          </Left>
          <Right>
            <ProjectMap project={T_PROJECT} />
          </Right>
        </Main>
        <Pools />
        <Details project={T_PROJECT} />
      </Container>
    </Wrapper>
  );
};
