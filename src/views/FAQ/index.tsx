import styled from "styled-components";
import FAQ from './FAQ';
import Header from '../../components/Header';

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
  position: relative;
`;

export default () => {
  return (
    <Wrapper>
      <Header />
      <Content>
        <Container>
          <FAQ />
        </Container>
      </Content>
    </Wrapper>
  )
};