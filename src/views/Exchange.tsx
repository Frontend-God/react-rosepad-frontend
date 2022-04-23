import gearIcon from "assets/icons/gear.svg";
import infoIcon from "assets/icons/info.svg";
import refreshIcon from "assets/icons/refresh.svg";
import resetIcon from "assets/icons/reset.svg";
import AmountInput from "components/AmountInput";
import GlowContainer from "components/GlowContainer";
import GradientBtn from "components/GradientBtn";
import IconBtn from "components/IconBtn";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  place-content: center;
  width: 100%;
  height: 100%;
  min-height: 100%;
  margin: 2rem 0 0 0;
  padding: 5rem 0;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  padding: 1.7rem;
  border-bottom: 1px solid #f3088939;
`;

const Body = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: space-between;
  padding: 1.7rem;
`;

const Inputs = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
`;

const Title = styled.h3`
  font-family: "Nasalization";
`;

const Sub = styled.p`
  font-family: "Nasalization";
  opacity: 0.64;
`;

const Options = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Extras = styled.div`
  margin: 1rem 0;
  width: 100%;
`;

const ExtraItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
`;
const ExtraLabel = styled.p`
  font-size: 0.9rem;
`;

const ExtraContent = styled.strong`
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;

const RefreshBtn = styled.img.attrs({ src: refreshIcon })`
  width: 1rem;
  opacity: 0.7;
  cursor: pointer;
  aspect-ratio: 1;
  filter: invert(1);

  &:hover {
    opacity: 1;
  }
`;

const InfoBtn = styled.img.attrs({ src: infoIcon })`
  width: 1rem;
  opacity: 0.7;
  cursor: pointer;
  aspect-ratio: 1;
  filter: invert(1);

  &:hover {
    opacity: 1;
  }
`;

const MoreContainer = styled.strong`
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  background: radial-gradient(circle at center, #e100ff11, transparent 40%),
    radial-gradient(circle at top left, #ff990034, transparent 12%),
    radial-gradient(circle at top right, #ff007360, transparent 15%),
    radial-gradient(circle at bottom right, #ffbb0068, transparent 30%),
    radial-gradient(circle at bottom left, #ff007349, transparent 25%),
    linear-gradient(96deg, #e7175c3e 0%, #f81f4e37 100%);
  padding: 1.5rem 1.75rem;
  border-radius: 1rem;
  margin: 1rem 0;
`;

const MoreItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
`;
const MoreLabel = styled.p`
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;

const MoreValue = styled.p`
  font-size: 0.9rem;
`;

export default () => {
  return (
    <Container>
      <GlowContainer>
        <Header>
          <Heading>
            <Title>Exchange</Title>
            <Sub>Trade tokens instantly</Sub>
          </Heading>
          <Options>
            <IconBtn icon={gearIcon} />
            <IconBtn icon={resetIcon} />
          </Options>
        </Header>
        <Body>
          <Inputs>
            <AmountInput label="From" defaultCoin="BTC" />
            <AmountInput label="To" />
          </Inputs>
          <Extras>
            <ExtraItem>
              <ExtraLabel>Price</ExtraLabel>
              <ExtraContent>
                1.323 USDT per ROSE <RefreshBtn />
              </ExtraContent>
            </ExtraItem>
          </Extras>
          <GradientBtn animateOnHover>Swap</GradientBtn>
        </Body>
      </GlowContainer>
      <MoreContainer>
        <MoreItem>
          <MoreLabel>
            Minimum Received <InfoBtn />
          </MoreLabel>
          <MoreValue>1230.32 USDT</MoreValue>
        </MoreItem>
        <MoreItem>
          <MoreLabel>
            Price Impact <InfoBtn />
          </MoreLabel>
          <MoreValue>&lt;10%</MoreValue>
        </MoreItem>
        <MoreItem>
          <MoreLabel>
            Liquidity Provide Fee <InfoBtn />
          </MoreLabel>
          <MoreValue>190.00 ROSE</MoreValue>
        </MoreItem>
      </MoreContainer>
    </Container>
  );
};
