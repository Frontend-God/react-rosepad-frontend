import gearIcon from "assets/icons/gear.svg";
import resetIcon from "assets/icons/reset.svg";
import AmountInput from "components/AmountInput";
import GlowContainer from "components/GlowContainer";
import GradientBtn from "components/GradientBtn";
import IconBtn from "components/IconBtn";
import styled from "styled-components";

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
  margin: 3rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ExtraItems = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  justify-content: space-between;
`;

const ExtraItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  gap: 0.5rem;
`;

const ExtraLabel = styled.p`
  font-size: 0.9rem;
`;

const ExtraValue = styled.strong`
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;

const MoreInfoHead = styled.p`
  font-size: 0.9rem;
  font-family: "Nasalization";
`;

export default () => {
  return (
    <GlowContainer>
      <Header>
        <Heading>
          <Title>Add Liquidity</Title>
          <Sub>Add liquidity to receive LP tokens</Sub>
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
          <MoreInfoHead>Prices and pool share</MoreInfoHead>
          <ExtraItems>
            <ExtraItem>
              <ExtraValue>1.5562</ExtraValue>
              <ExtraLabel>USDT per ROSE</ExtraLabel>
            </ExtraItem>
            <ExtraItem>
              <ExtraValue>15.56</ExtraValue>
              <ExtraLabel>ROSE per USDT</ExtraLabel>
            </ExtraItem>
            <ExtraItem>
              <ExtraValue>15.75%</ExtraValue>
              <ExtraLabel>Share of Pool</ExtraLabel>
            </ExtraItem>
          </ExtraItems>
        </Extras>
        <GradientBtn animateOnHover>Supply</GradientBtn>
      </Body>
    </GlowContainer>
  );
};
