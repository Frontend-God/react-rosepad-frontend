import { useState } from "react";
import styled from "styled-components";
import AddLiquidity from "./AddLiquidity";
import Liquidity from "./Liquidity";

const Container = styled.div`
  display: grid;
  place-content: center;
  width: 100%;
  height: 100%;
  margin: 2rem 0 0 0;
  padding: 5rem 0;
`;

export default () => {
  const [isAdd, setIsAdd] = useState(false);

  return (
    <Container>
      {!isAdd && <Liquidity onAddLiquidity={() => setIsAdd(!isAdd)} />}
      {isAdd && <AddLiquidity />}
    </Container>
  );
};
