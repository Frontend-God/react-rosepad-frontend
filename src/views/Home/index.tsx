import styled from "styled-components";
import Banner from "./Banner";
import Connect from "./Connect";
import Featured from "./Featured";
import Hero from "./Hero";
import Partners from "./Partners";
import Platforms from "./Platforms";
import Roadmap from "./Roadmap";
import Team from "./Team";
import Tiers from "./Tiers";
import Tokenomics from "./Tokenomics";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  margin: 0 auto 0 auto;
`;

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 5rem 0;
  margin: -1.2rem auto 0 auto;
  max-width: min(1920px, calc(100% - 16rem));
  @media (max-width: 1024px) {
    max-width: calc(100% - 1rem);
  }
`;

const Content = styled.div`
  width: 100%;
  min-height: 100%;
  z-index: 1;
  border-radius: 1.5rem 1.5rem 0 0;
  background: radial-gradient(ellipse at center, #000, transparent 40%),
    radial-gradient(circle at top left, #90004f, transparent 4%),
    radial-gradient(circle at top right, #90004f, transparent 8%),
    radial-gradient(circle at right, #90004f, transparent 5%),
    radial-gradient(circle at bottom right, #90004f, transparent 4%),
    radial-gradient(circle at bottom left, #90004f, transparent 4%),
    radial-gradient(circle at left, #90004f, transparent 6%), black;
  position: relative;
`;

const Home = ({ scroll }: any) => {
  return (
    <Wrapper>
      <Hero />
      <Content>
        <Container>
          <Platforms />
          <Tiers />
          <Featured />
          <Banner />
          <Roadmap />
          <Tokenomics />
          <Team />
          <Partners />
          <Connect />
        </Container>
      </Content>
    </Wrapper>
  );
};

export default Home;
