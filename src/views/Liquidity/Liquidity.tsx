import gearIcon from "assets/icons/gear.svg";
import resetIcon from "assets/icons/reset.svg";
import GlowContainer from "components/GlowContainer";
import GradientBtn from "components/GradientBtn";
import IconBtn from "components/IconBtn";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
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

const Message = styled.p`
  font-size: 0.9rem;
`;

const Prompt = styled.div`
  font-size: 0.9rem;
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const Ask = styled.p`
  font-size: 0.9rem;
`;

export default ({ onAddLiquidity }: any) => {
  return (
    <Container>
      <GlowContainer>
        <Header>
          <Heading>
            <Title>Liquidity</Title>
            <Sub>Add liquidity to receive LP tokens</Sub>
          </Heading>
          <Options>
            <IconBtn icon={gearIcon} />
            <IconBtn icon={resetIcon} />
          </Options>
        </Header>
        <Body>
          <Message>No liquidity found!</Message>
          <Prompt>
            <Ask>Don't see a pool you joined?</Ask>
            <GradientBtn stroked={true}>Find other LP tokens</GradientBtn>
          </Prompt>
          <GradientBtn animateOnHover onClick={() => onAddLiquidity()}>
            Add Liquidity
          </GradientBtn>
        </Body>
      </GlowContainer>
    </Container>
  );
};
