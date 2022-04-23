import PARTNERS from "constants/partners";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-bottom: 5rem;
  padding-top: 5rem;
`;

const Partners = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const PartnerImg = styled.img`
  max-width: 6rem;
  min-width: 4rem;
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: pointer;
  filter: grayscale(100%) brightness(100%);
  opacity: 0.75;

  &:hover {
    filter: unset;
    opacity: 1;
  }
`;

const Partner = styled.button`
  outline: none;
  border: none;
  border-radius: 100%;
  width: 9rem;
  aspect-ratio: 1;
  padding: 0.86rem;
  cursor: pointer;
  padding: 1rem;
  background-color: transparent;

  &:hover {
    -webkit-box-shadow: inset 0 0 1.5rem ${({ theme }) => theme.primary}80,
      0 1rem 3rem ${({ theme }) => theme.primary}50;
    -moz-box-shadow: inset 0 0 1.5rem ${({ theme }) => theme.primary}80,
      0 1rem 3rem ${({ theme }) => theme.primary}50;
    box-shadow: inset 0 0 1.5rem ${({ theme }) => theme.primary}80,
      0 1rem 3rem ${({ theme }) => theme.primary}50;
  }
`;

const Title = styled.h2`
  font-family: "Nasalization";
  color: ${({ theme }) => theme.primary};
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 2rem;
`;

const Connect = () => (
  <Container id="contact">
    <Title>Our Partners</Title>
    <Partners>
      {PARTNERS.map((e, i) => (
        <Partner
          key={`${e.id}-${i}`}
          onClick={() => (window.open(e.link, "_blank") as any).focus()}
        >
          <PartnerImg src={e.src} />
        </Partner>
      ))}
    </Partners>
  </Container>
);

export default Connect;
