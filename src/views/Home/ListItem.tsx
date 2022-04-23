import { usePalette } from "react-palette";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 1fr 0.25fr;
  border-bottom: 1px solid ${({ theme }) => theme.primary}29;
  padding: 1rem 1.5rem 1rem 1.5rem;
  backdrop-filter: blur(10px);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(1fr);
    gap: 2rem;
  }
`;

const Logo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Token = styled.div`
  width: 2.5rem;
  aspect-ratio: 1;
  border-radius: 100%;
  border: 3px solid #2c2936;
  z-index: 1;
  overflow: hidden;

  &:last-child {
    transform: translate(-1rem);
  }
`;

const Token1 = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  padding: 0.25rem;
`;

const Token2 = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 0.25rem;
`;

const Title = styled.h3`
  font-family: "Nasalization";
`;

const Pair = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.p`
  opacity: 0.56;
  font-weight: 500;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Value = styled.h3`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const Description = styled.p`
  opacity: 0.56;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  @media (max-width: 1024px) {
    max-width: 90%;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export default ({
  pair,
  title,
  description,
  ticker,
  raised,
  price,
  roi,
}: any) => {
  const { data: bg1 } = usePalette(pair[0].img);
  const { data: bg2 } = usePalette(pair[1].img);

  return (
    <Container>
      <Pair>
        <Logo>
          <Token style={{ backgroundColor: bg1.vibrant }}>
            <Token1 src={pair[0].img} />
          </Token>

          <Token style={{ backgroundColor: bg2.vibrant }}>
            <Token2 src={pair[1].img} />
          </Token>
        </Logo>
        <Main>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Main>
      </Pair>

      <Item>
        <Label>Ticker</Label>
        <Value>{ticker}</Value>
      </Item>
      <Item>
        <Label>Total raised</Label>
        <Value>{raised}</Value>
      </Item>
      <Item>
        <Label>Token price</Label>
        <Value>{price}</Value>
      </Item>
      <Item>
        <Label>ROI</Label>
        <Value>{roi}</Value>
      </Item>
    </Container>
  );
};
