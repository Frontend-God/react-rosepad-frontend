import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid #ffffff22;
  border-radius: 0.72rem;
  padding: 0.5rem 1rem;

  &:hover {
    background-color: #ff8fba11;
    border-color: #ff075a89;
  }

  &:focus-within {
    background-color: #f3499e1c;
    border-color: #ff078f;
  }
`;
const Label = styled.p`
  font-size: 0.8rem;
`;

const Input = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 2rem;
  font-weight: 700;
  width: 100%;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Inputs = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
`;

const Extras = styled.div`
  height: 100%;
`;

export default ({ value, label, defaultCoin = "USDT", extras = "" }: any) => {
  const [val, setValue] = useState(value || 0);

  return (
    <Container>
      <Label>{label}</Label>
      <Inputs>
        <Input
          type="number"
          value={val}
          onInput={(e: any) => setValue(e.target.value)}
        />
        <Extras>{extras}</Extras>
      </Inputs>
    </Container>
  );
};
