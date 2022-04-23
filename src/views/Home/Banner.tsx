import GradientBtn from "components/GradientBtn";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 6rem 0;
  padding: 3rem 0;
  background: rgb(178, 26, 240);
  background: radial-gradient(ellipse at top center, #f0931e, transparent 30%),
    radial-gradient(circle at bottom left, #ff0073cc, transparent 25%),
    radial-gradient(circle at bottom right, #6f00ffcc, transparent 27%),
    radial-gradient(ellipse at bottom center, #9dff006a, transparent 36%),
    linear-gradient(
      324deg,
      rgba(178, 26, 240, 1) 0%,
      rgba(202, 62, 184, 1) 21%,
      rgba(246, 122, 23, 1) 100%
    );
  border-radius: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const Title = styled.h1`
  font-family: "Nasalization";
  color: white;
  text-transform: uppercase;
  text-align: center;
  font-weight: 400;
  line-height: 2em;
`;

const Description = styled.p`
  font-size: 18px;
  font-weight: 600;
  max-width: 50%;
  line-height: 1.8em;
  margin-bottom: 3rem;

  @media (max-width: 1024px) {
    max-width: calc(100% - 2rem);
  }
`;

export default () => {
  return (
    <Container>
      <Title>
        Apply for project <br /> incubation
      </Title>
      <Description>
        Connect with Oasis community and received assistance with financials,
        marketing and development.
      </Description>
      <GradientBtn animateOnHover>Apply for Launch</GradientBtn>
    </Container>
  );
};
