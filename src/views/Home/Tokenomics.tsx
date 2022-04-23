import styled from "styled-components";
import Tokenomics1 from "assets/images/tokenomics/Circle1_Full.png";
import Tokenomics2 from "assets/images/tokenomics/Circle2_Full.png";
import ArrowPic1 from "assets/images/tokenomics/arrow_1.png";
import ArrowPic2 from "assets/images/tokenomics/arrow_2.png";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 3rem 0;
`;

const Title = styled.h2`
  font-family: "Nasalization";
  color: ${({ theme }) => theme.primary};
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const Chart = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  place-content: center;
  padding: 2rem;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const TokenomicsImg1 = styled.img`
  width: 53%;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const TokenomicsImg11 = styled.img`
  width: 100%;

  display: none;
  @media (max-width: 1024px) {
    display: block;
  }
`;

const TokenomicsImg2 = styled.img`
  padding-top: 3rem;
  width: 40%;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const TokenomicsImg21 = styled.img`
  padding-top: 3rem;
  width: 80%;

  display: none;
  @media (max-width: 1024px) {
    display: block;
  }
`;

const ArrowLine1 = styled.img`
  width: 22%;
  margin: 0 -10% 0 -12%;
  padding-top: 2rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const ArrowLine2 = styled.img`
  width: 20%;
  margin: -3% 0 -5% 0;
  padding-top: 2rem;
  display: none;
  @media (max-width: 1024px) {
    display: block;
  }
`;

const Tokenomics = () => {
  return (
    <Container>
      <Title>Tokenomics</Title>
      <Chart>
        <TokenomicsImg1
          src={Tokenomics1}
          data-aos="fade-right"
          data-aos-delay="200"
        />
        <TokenomicsImg11
          src={Tokenomics1}
          data-aos="fade-up"
          data-aos-delay="200"
        />
        <ArrowLine1
          src={ArrowPic1}
          data-aos="fade-right"
          data-aos-delay="400"
        />
        <ArrowLine2 src={ArrowPic2} data-aos="fade-up" data-aos-delay="300" />
        <TokenomicsImg2
          src={Tokenomics2}
          data-aos="fade-right"
          data-aos-delay="700"
        />
        <TokenomicsImg21
          src={Tokenomics2}
          data-aos="fade-up"
          data-aos-delay="400"
        />
      </Chart>
    </Container>
  );
};

export default Tokenomics;
