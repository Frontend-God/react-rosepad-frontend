import caretIcon from "assets/icons/caret.svg";
import axios from "axios";
import useOutsideListener from "hooks/useOutsideListener";
import { useEffect, useRef, useState } from "react";
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

const TokensContainer = styled.div`
  position: relative;
`;
const TokensDropdown = styled.ul`
  position: absolute;
  list-style: none;
  padding: 1rem 0;
  background-color: #000000ea;
  border-radius: 1rem;
  z-index: 10;
  max-height: 14rem;
  overflow: scroll;
`;
const TokenItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: #ffffff11;
  }
`;
const TokenLabel = styled.p``;
const TokenLogo = styled.img`
  width: 1rem;
`;

const Caret = styled.img.attrs({ src: caretIcon })`
  width: 0.7rem;
  filter: invert(1);
  cursor: pointer;
`;

const Selected = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
  width: fit-content;
  width: 7rem;

  &:hover {
    background-color: #ffffff11;
  }
`;
const SelectedToken = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Inputs = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "fe25e44c28msh675075f6a942f6dp1dbb99jsnf1bbb156a085",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const AmountInput = ({ label, defaultCoin = "USDT" }: any) => {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

  const [selected, setSelected] = useState({} as any);
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/coins`, { headers: cryptoApiHeaders })
      .then((res: any) => {
        setTokens(res?.data?.data?.coins);

        if (defaultCoin) {
          const coin = (res?.data?.data?.coins || []).find((e: any) =>
            e.symbol.match(defaultCoin)
          );

          setSelected(coin || {});

          setValue(parseFloat((+coin?.price).toFixed(5)) || 0);
        }
      });
  }, [defaultCoin]);

  const ref = useRef(null);

  useOutsideListener(ref, setOpen);

  return (
    <Container>
      <Label>{label}</Label>
      <Inputs>
        <Input
          type="number"
          value={value}
          onInput={(e: any) => setValue(e.target.value)}
        />
        <TokensContainer ref={ref}>
          <Selected onClick={() => setOpen(!open)}>
            <SelectedToken>
              <TokenLogo src={selected.iconUrl} />
              <TokenLabel>{selected.symbol}</TokenLabel>
            </SelectedToken>
            <Caret />
          </Selected>
          {open && (
            <TokensDropdown>
              {tokens.map((e: any) => (
                <TokenItem
                  key={e.uuid}
                  onClick={() => {
                    setSelected(e);
                    setOpen(!open);
                    setValue(parseFloat((+e?.price).toFixed(5)) || 0);
                  }}
                >
                  <TokenLogo src={e.iconUrl} />
                  <TokenLabel>{e.symbol}</TokenLabel>
                </TokenItem>
              ))}
            </TokensDropdown>
          )}
        </TokensContainer>
      </Inputs>
    </Container>
  );
};

export default AmountInput;
