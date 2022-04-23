import styled from "styled-components";
import SOCIALS from "constants/socials";
import Header from "../../components/Header";

const Container = styled.div`
  width: 100%;
  min-height: 20rem;
  padding: 0 0 7rem 0;
  background: rgb(178, 26, 240);
  background: radial-gradient(ellipse at top center, #f0931e, transparent 30%),
    radial-gradient(circle at bottom left, #ff3c60, transparent 45%),
    radial-gradient(circle at bottom right, #fe008c, transparent 50%),
    radial-gradient(ellipse at bottom center, #fe008c, transparent 60%),
    linear-gradient(
      324deg,
      rgba(178, 26, 240, 1) 0%,
      rgba(202, 62, 184, 1) 21%,
      rgba(246, 122, 23, 1) 100%
    );
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  @media (max-width: 1024px) {
    height: auto;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: min(1920px, calc(100% - 16rem));
  margin: auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2rem;

  @media (max-width: 1024px) {
    padding-top: 2rem;
    grid-template-columns: 100%;
    max-width: calc(100% - 2rem);
  }
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  @media (max-width: 1024px) {
    text-align: center;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-family: "Nasalization";
  color: white;
  text-transform: uppercase;
  font-weight: 400;
  line-height: 2em;
`;

const Description = styled.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.8em;
  margin-bottom: 1rem;
`;

const ValueBoard = styled.div`
  border-radius: 1rem;
  -webkit-box-shadow: inset 0 0 2rem ${({ theme }) => theme.primary}80;
  -moz-box-shadow: inset 0 0 2rem ${({ theme }) => theme.primary}80;
  box-shadow: inset 0 0 2rem ${({ theme }) => theme.primary}80;
  box-shadow: 0 1rem 2rem #56013f;
  background: radial-gradient(ellipse at center, #000, transparent 4%),
    radial-gradient(circle at top left, #5f022b, transparent 20%),
    radial-gradient(circle at top right, #5f022b, transparent 15%),
    radial-gradient(circle at bottom right, #5f022b, transparent 20%),
    radial-gradient(circle at bottom left, #5f022b, transparent 15%), black;
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 15px 15px;

  @media (max-width: 1024px) {
    padding: 3rem 15px;
  }
`;

const Options = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Subtitle = styled.div`
  font-family: "Nasalization";
  color: white;
  line-height: 1.5em;
  font-size: 25px;
  text-align: center;
  letter-spacing: -1px;
  margin-top: 30px;
  width: 100%;
  align-self: center;
`;

const Subdescription = styled.div`
  font-family: "Nasalization";
  font-weight: 400;
  font-size: 23px;
  text-align: center;
  color: #ff0089;
  letter-spacing: 1px;
  width: 100%;
`;

const Socials = styled.div`
  display: flex;
  justify-self: center;
  align-self: flex-end;
  gap: 1rem;
`;

const SocialImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: pointer;
  filter: ${({ theme }) => theme.primaryFilter} opacity(0.56);
`;

const Social = styled.button`
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.primary}16;
  border-radius: 100%;
  height: 2rem;
  width: 2rem;
  padding: 0.46rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.primary}29;

    ${SocialImg} {
      filter: ${({ theme }) => theme.primaryFilter} opacity(0.96);
    }
  }
`;

const Button = styled.button`
  background: none;
  outline: white;
  border: 1px solid white;
  border-radius: 20px;
  padding: 0.5rem 2rem;
  color: white;
  font-family: "Nasalization";
  cursor: pointer;

  &:hover {
    background: white;
    color: #ff0089;
  }
`;

const Hero = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Main>
          <Title>
            Fundraising and Trading <br /> Platform on Oasis
          </Title>
          <Description>
            Highly-vetted ideas and teams you can trust.
            <br /> Supported by industry-leading creators and funds.
          </Description>
          <Options>
            <Button>Contact us</Button>
            <Button>Read more</Button>
          </Options>
        </Main>
        <ValueBoard>
          <Subtitle>
            RosePad Launchpad-DEX-NFT platform on Oasis Network{" "}
            <Subdescription>Launching Q2 2022</Subdescription>
          </Subtitle>
          <Socials>
            {SOCIALS.map((e, i) => (
              <Social
                key={`${e.title}-${i}`}
                onClick={() => (window.open(e.link, "_blank") as any).focus()}
              >
                <SocialImg src={e.img} />
              </Social>
            ))}
          </Socials>
        </ValueBoard>
      </Content>
    </Container>
  );
};

export default Hero;
