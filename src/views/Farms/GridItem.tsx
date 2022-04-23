import GradientBtn from "components/GradientBtn";
import { usePalette } from "react-palette";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  border-bottom: 1px solid #222325;
  -webkit-box-shadow: inset 0 0 2rem ${({ theme }) => theme.primary}80;
  -moz-box-shadow: inset 0 0 2rem ${({ theme }) => theme.primary}80;
  box-shadow: inset 0 0 2rem ${({ theme }) => theme.primary}80;
  border-radius: 1rem;
  backdrop-filter: blur(10px);
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
`;

const Value = styled.h3``;

const Stretch = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.primary}29;
  width: 100%;
  padding: 1rem 1.5rem 1rem 1.5rem;
  height: fit-content;
`;

const Actions = styled.div`
  width: 100%;
  display: grid;
  place-content: center;
  padding: 1rem 0 2rem 0;
`;
export default ({ pair, earned, apr, liquidity, multiplier }: any) => {
  const { data: bg1 } = usePalette(pair[0].img);
  const { data: bg2 } = usePalette(pair[1].img);

  return (
    <Container>
      <Stretch>
        <Pair>
          <Logo>
            <Token style={{ width: "3.6rem", backgroundColor: bg1.vibrant }}>
              <Token1 src={pair[0].img} />
            </Token>

            <Token
              style={{
                transform: "translate(-1.72rem, 0.5rem)",
                backgroundColor: bg2.vibrant,
              }}
            >
              <Token2 src={pair[1].img} />
            </Token>
          </Logo>
          <Title>
            {pair[0].symbol}-{pair[1].symbol}
          </Title>
        </Pair>
        <Item>
          <Label>Multiplier</Label>
          <Value>{multiplier}</Value>
        </Item>
      </Stretch>
      <Stretch>
        <Item>
          <Label>Apr</Label>
          <Value>{apr}</Value>
        </Item>
        <Item>
          <Label>Liquidity</Label>
          <Value>{liquidity}</Value>
        </Item>
      </Stretch>
      <Stretch>
        <Item>
          <Label>Earned</Label>
          <Value>{earned}</Value>
        </Item>
        <GradientBtn stroked={true}>Harvest</GradientBtn>
      </Stretch>
      <Actions>
        <GradientBtn animateOnHover>Connect Wallet</GradientBtn>
      </Actions>
    </Container>
  );
};
