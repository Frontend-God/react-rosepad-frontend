import styled from "styled-components";
import PlusImg from "../../assets/icons/plus.svg";
import ArrowImg from "../../assets/icons/arrow.svg";
import GradientBtn from "components/GradientBtn";
import { useState } from "react";

const Container = styled.div`
  width: 55%;
  margin: 3rem auto 6rem;
  -webkit-box-shadow: inset 0 0 2rem ${({ theme }) => theme.primary}80;
  -moz-box-shadow: inset 0 0 2rem ${({ theme }) => theme.primary}80;
  box-shadow: inset 0 0 2rem ${({ theme }) => theme.primary}80;
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  padding: 2rem;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 2rem 1rem;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-family: "Nasalization";
`;

const Desc = styled.p`
  text-align: center;
  margin-top: 1rem;
  font-size: 1rem;
`;

const Forms = styled.div`
  font-family: "Nasalization";
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
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Label = styled.div`
  width: 35%;
  text-align: center;
  position: relative;
`;

const LabelText = styled.h3`
  font-family: "Nasalization";
  font-size: 1.5rem;
`;

const FormControl = styled.input`
  font-family: "Nasalization";
  width: 65%;
  height: 50px;
  border-radius: 0.5rem;
  border: none;
  outline: none;
  color: black;
  padding: 0.5rem 1rem;
  text-align: right;
  font-size: 1.8rem;
`;

const DayInput = styled.input`
  border: none;
  outline: none;
  color: black;
  padding: 0.3rem 0.5rem;
  font-size: 1.5rem;
  border-radius: 0.5rem;
  width: 4rem;
  text-align: center;
  font-weight: bold;
`;

const Icon = styled.div`
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
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  font-size: 30px;
`;

const AmountContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: center;
`;

const Amount = styled.h1`
  font-family: "Nasalization";
`;

const Symbol = styled.h3`
  margin-left: 10px;
  padding: 3px 0;
`;

const MiddleText = styled.p`
  position: absolute;
  top: -25px;
`;

const CalculatorForm = () => {
  const [amount] = useState<number>(5000);

  return (
    <Container>
      <Title>xRpad Calculator</Title>
      <Desc>
        Calculate your xRpad depending on the amount of staked tokens and your
        lock time.
      </Desc>
      <Forms>
        <FormGroup>
          <Label>
            <LabelText>Rpad</LabelText>
          </Label>
          <FormControl value={"5000"}></FormControl>
        </FormGroup>
        <FormGroup>
          <Label
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "35%",
            }}
          >
            <MiddleText>and / or</MiddleText>
            <LabelText>Rpad-LP</LabelText>
          </Label>
          <FormControl value={"0"}></FormControl>
        </FormGroup>
      </Forms>
      <Icon>
        <img src={PlusImg} width="20px" alt="icon" />
      </Icon>
      <Forms style={{ textAlign: "center", fontSize: "1.5rem" }}>
        Lock tokens for <DayInput value={"365"} /> days
      </Forms>
      <Icon>
        <img src={ArrowImg} width="15px" alt="icon" />
      </Icon>
      <AmountContainer>
        <Amount>{amount.toLocaleString()}</Amount>
        <Symbol>xRpad</Symbol>
      </AmountContainer>
      <AmountContainer>locked until 4/23/2023</AmountContainer>
      <GradientBtn style={{ width: "100%", marginTop: "2rem" }} animateOnHover>
        Connect Wallet
      </GradientBtn>
    </Container>
  );
};

export default CalculatorForm;
