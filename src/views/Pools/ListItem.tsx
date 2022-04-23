import caretIcon from "assets/icons/caret.svg";
import GradientBtn from "components/GradientBtn";
import { useState } from "react";
import { usePalette } from "react-palette";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.primary}29;
  padding: 1rem 1.5rem 1rem 1.5rem;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  gap: 2rem;
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

const Value = styled.h3`
  white-space: nowrap;
`;

const Caret = styled.button`
  display: grid;
  place-content: center;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0.75rem 0.64rem;
  border-radius: 0.5rem;
  width: fit-content;
  height: fit-content;

  &:hover {
    background-color: ${({ theme }) => theme.inputBG};
  }
`;

const CaretIcon = styled.img.attrs({ src: caretIcon })`
  width: 0.7rem;
  filter: invert(1);
`;

const Actions: any = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  align-self: flex-end;
  height: 0;
  opacity: 0;
  visibility: hidden;

  @media (max-width: 1024px) {
    align-self: center;
  }

  &.show-more {
    height: auto;
    opacity: 1;
    visibility: visible;
  }
`;

const Main = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 1fr 0.25fr;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(1fr);
    gap: 2rem;
  }
`;

export default ({ pair, earned, apr, liquidity, multiplier }: any) => {
  const { data: bg1 } = usePalette(pair[0].img);
  const { data: bg2 } = usePalette(pair[1].img);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Main>
        <Pair>
          <Logo>
            <Token style={{ backgroundColor: bg1.vibrant }}>
              <Token1 src={pair[0].img} />
            </Token>

            <Token style={{ backgroundColor: bg2.vibrant }}>
              <Token2 src={pair[1].img} />
            </Token>
          </Logo>
          <Title>
            {pair[0].symbol}-{pair[1].symbol}
          </Title>
        </Pair>

        <Item>
          <Label>Earned</Label>
          <Value>{earned}</Value>
        </Item>
        <Item>
          <Label>Apr</Label>
          <Value>{apr}</Value>
        </Item>
        <Item>
          <Label>Liquidity</Label>
          <Value>{liquidity}</Value>
        </Item>
        <Item>
          <Label>Multiplier</Label>
          <Value>{multiplier}</Value>
        </Item>
        <Caret onClick={() => setIsOpen(!isOpen)}>
          <CaretIcon />
        </Caret>
      </Main>

      <Actions className={isOpen && "show-more"}>
        <GradientBtn stroked={true}>Harvest</GradientBtn>
        <GradientBtn animateOnHover>Connect Wallet</GradientBtn>
      </Actions>
    </Container>
  );
};
